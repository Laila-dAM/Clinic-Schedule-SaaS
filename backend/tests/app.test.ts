
import { beforeEach, describe, expect, it, vi } from "vitest";
import request from "supertest";
import jwt from "jsonwebtoken";

const TEST_JWT_SECRET = "test-secret-for-vitest";
process.env.JWT_SECRET = TEST_JWT_SECRET;

const { prismaMock } = vi.hoisted(() => ({
  prismaMock: {
    patient: {
      findFirst: vi.fn(),
    },
    user: {
      findFirst: vi.fn(),
      findUnique: vi.fn(),
    },
    appointment: {
      findFirst: vi.fn(),
      create: vi.fn(),
      findMany: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
  },
}));

vi.mock("../src/prisma", () => ({
  default: prismaMock,
}));

import app from "../src/app";

const testUser = {
  id: "user-test-id",
  email: "teste@example.com",
  role: "admin",
  clinicId: "clinic-test-id",
};

const validAppointment = {
  patientId: "patient-test-id",
  professionalId: "professional-test-id",
  date: "2026-12-10",
  time: "10:30",
  service: "Consulta",
};

const testPermissions = [
  { name: "appointments.create" },
  { name: "appointments.read" },
  { name: "appointments.update" },
  { name: "appointments.delete" },
];

function createToken() {
  return jwt.sign(testUser, TEST_JWT_SECRET);
}

function authenticatedRequest() {
  return request(app)
    .post("/appointments")
    .set("Authorization", `Bearer ${createToken()}`);
}

function mockAuthorizedUser() {
  prismaMock.user.findFirst.mockResolvedValueOnce({
    ...testUser,
    roleRef: {
      permissions: testPermissions,
    },
  } as never);
}

function mockExistingPatient() {
  prismaMock.patient.findFirst.mockResolvedValue({
    id: validAppointment.patientId,
    clinicId: testUser.clinicId,
  } as never);
}

function mockExistingProfessional() {
  prismaMock.user.findFirst.mockResolvedValueOnce({
    id: validAppointment.professionalId,
    clinicId: testUser.clinicId,
  } as never);
}

describe("API", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    prismaMock.user.findUnique.mockResolvedValue(testUser as never);

    prismaMock.user.findFirst.mockResolvedValue({
      ...testUser,
      roleRef: {
        permissions: testPermissions,
      },
    } as never);
  });

  describe("Rotas gerais", () => {
    it("deve responder com status 200 na rota /health", async () => {
      const response = await request(app).get("/health");

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        status: "ok",
        message: "API funcionando",
      });
    });

    it("deve retornar 401 ao acessar /me sem token", async () => {
      const response = await request(app).get("/me");

      expect(response.status).toBe(401);
      expect(response.body.message).toBe("Token não enviado");
    });

    it("deve retornar 404 ao acessar uma rota inexistente", async () => {
      const response = await request(app).get("/rota-inexistente");

      expect(response.status).toBe(404);
      expect(response.body).toEqual({
        message: "Rota não encontrada",
      });
    });
  });

  describe("Autenticação de agendamentos", () => {
    it("deve retornar 401 ao criar agendamento sem token", async () => {
      const response = await request(app)
        .post("/appointments")
        .send({});

      expect(response.status).toBe(401);
      expect(response.body.message).toBe("Token não enviado");
    });

    it("deve retornar 401 ao listar agendamentos sem token", async () => {
      const response = await request(app).get("/appointments");

      expect(response.status).toBe(401);
      expect(response.body.message).toBe("Token não enviado");
    });
  });

  describe("Validação de agendamentos", () => {
    it("deve rejeitar campos obrigatórios ausentes", async () => {
      const response = await authenticatedRequest().send({});

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        "Todos os campos são obrigatórios"
      );
      expect(prismaMock.patient.findFirst).not.toHaveBeenCalled();
      expect(prismaMock.appointment.create).not.toHaveBeenCalled();
    });

    it("deve rejeitar um horário inválido", async () => {
      const response = await authenticatedRequest().send({
        ...validAppointment,
        time: "25:90",
      });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        "Horário inválido. Use o formato HH:mm"
      );
      expect(prismaMock.patient.findFirst).not.toHaveBeenCalled();
    });

    it("deve rejeitar uma data inválida", async () => {
      const response = await authenticatedRequest().send({
        ...validAppointment,
        date: "data-invalida",
      });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        "Data do agendamento inválida"
      );
      expect(prismaMock.patient.findFirst).not.toHaveBeenCalled();
    });

    it("deve retornar 404 quando o paciente não existir", async () => {
      mockAuthorizedUser();
      prismaMock.patient.findFirst.mockResolvedValue(null);

      const response = await authenticatedRequest().send(validAppointment);

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Paciente não encontrado");
      expect(prismaMock.appointment.create).not.toHaveBeenCalled();
    });

    it("deve retornar 404 quando o profissional não existir", async () => {
      mockAuthorizedUser();
      mockExistingPatient();

      prismaMock.user.findFirst.mockResolvedValueOnce(null);

      const response = await authenticatedRequest().send(validAppointment);

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Profissional não encontrado");
      expect(prismaMock.appointment.create).not.toHaveBeenCalled();
    });

    it("deve rejeitar um horário já ocupado pelo profissional", async () => {
      mockAuthorizedUser();
      mockExistingPatient();
      mockExistingProfessional();

      prismaMock.appointment.findFirst.mockResolvedValue({
        id: "existing-appointment-id",
        status: "confirmed",
      } as never);

      const response = await authenticatedRequest().send(validAppointment);

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        "O profissional já possui um agendamento nesse horário"
      );
      expect(prismaMock.appointment.create).not.toHaveBeenCalled();
    });

    it("deve criar um agendamento quando não houver conflito", async () => {
      mockAuthorizedUser();
      mockExistingPatient();
      mockExistingProfessional();

      const appointmentCreated = {
        id: "new-appointment-id",
        ...validAppointment,
        date: new Date(`${validAppointment.date}T00:00:00.000Z`),
        clinicId: testUser.clinicId,
        status: "scheduled",
      };

      prismaMock.appointment.findFirst.mockResolvedValue(null);
      prismaMock.appointment.create.mockResolvedValue(
        appointmentCreated as never
      );

      const response = await authenticatedRequest().send(validAppointment);

      expect(response.status).toBe(201);
      expect(response.body.message).toBe("Agendamento criado com sucesso");
      expect(response.body.appointment.id).toBe("new-appointment-id");
      expect(prismaMock.appointment.create).toHaveBeenCalledOnce();
    });
  });
});