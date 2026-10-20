
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
      updateMany: vi.fn(),
      delete: vi.fn(),
      deleteMany: vi.fn(),
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

const appointmentId = "appointment-test-id";

const existingAppointment = {
  id: appointmentId,
  ...validAppointment,
  date: new Date("2026-12-10T00:00:00.000Z"),
  clinicId: testUser.clinicId,
  status: "scheduled",
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

function authenticatedGetAppointment(id = appointmentId) {
  return request(app)
    .get(`/appointments/${id}`)
    .set("Authorization", `Bearer ${createToken()}`);
}

function authenticatedPut() {
  return request(app)
    .put(`/appointments/${appointmentId}`)
    .set("Authorization", `Bearer ${createToken()}`);
}

function authenticatedStatus() {
  return request(app)
    .patch(`/appointments/${appointmentId}/status`)
    .set("Authorization", `Bearer ${createToken()}`);
}

function authenticatedDelete() {
  return request(app)
    .delete(`/appointments/${appointmentId}`)
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

    it("deve retornar 401 ao consultar agendamento sem token", async () => {
      const response = await request(app).get(
        `/appointments/${appointmentId}`,
      );

      expect(response.status).toBe(401);
      expect(response.body.message).toBe("Token não enviado");
    });
  });

  describe("Consulta de agendamentos", () => {
    it("deve retornar 404 quando o agendamento não existir na clínica", async () => {
      mockAuthorizedUser();
      prismaMock.appointment.findFirst.mockResolvedValue(null);

      const response = await authenticatedGetAppointment();

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Agendamento não encontrado");

      expect(prismaMock.appointment.findFirst).toHaveBeenCalledWith(
        expect.objectContaining({
          where: {
            id: appointmentId,
            clinicId: testUser.clinicId,
          },
        }),
      );
    });

    it("deve impedir a consulta de um agendamento de outra clínica", async () => {
      mockAuthorizedUser();
      prismaMock.appointment.findFirst.mockResolvedValue(null);

      const otherClinicAppointmentId = "appointment-other-clinic";

      const response = await authenticatedGetAppointment(
        otherClinicAppointmentId,
      );

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Agendamento não encontrado");

      expect(prismaMock.appointment.findFirst).toHaveBeenCalledWith(
        expect.objectContaining({
          where: {
            id: otherClinicAppointmentId,
            clinicId: testUser.clinicId,
          },
        }),
      );
    });
  });

  describe("Criação de agendamentos", () => {
    it("deve rejeitar campos obrigatórios ausentes", async () => {
      const response = await authenticatedRequest().send({});

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        "Todos os campos são obrigatórios",
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
        "Horário inválido. Use o formato HH:mm",
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
        "Data do agendamento inválida",
      );
      expect(prismaMock.patient.findFirst).not.toHaveBeenCalled();
    });

    it.each([
      ["formato brasileiro", "19/10/2026"],
      ["formato sem separadores", "20261019"],
      ["dia inexistente", "2026-02-30"],
      ["mês inexistente", "2026-13-10"],
      ["dia zero", "2026-10-00"],
    ])("deve rejeitar uma data inválida na criação: %s", async (_description, date) => {
      const response = await authenticatedRequest().send({
        ...validAppointment,
        date,
      });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        "Data do agendamento inválida",
      );
      expect(prismaMock.patient.findFirst).not.toHaveBeenCalled();
      expect(prismaMock.appointment.create).not.toHaveBeenCalled();
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
        "O profissional já possui um agendamento nesse horário",
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
        appointmentCreated as never,
      );

      const response = await authenticatedRequest().send(validAppointment);

      expect(response.status).toBe(201);
      expect(response.body.message).toBe("Agendamento criado com sucesso");
      expect(response.body.appointment.id).toBe("new-appointment-id");
      expect(prismaMock.appointment.create).toHaveBeenCalledOnce();
    });
  });

  describe("Atualização de agendamentos", () => {
    it("deve retornar 404 quando o agendamento não existir", async () => {
      mockAuthorizedUser();
      prismaMock.appointment.findFirst.mockResolvedValue(null);

      const response = await authenticatedPut().send(validAppointment);

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Agendamento não encontrado");
      expect(prismaMock.appointment.updateMany).not.toHaveBeenCalled();
    });

    it("deve rejeitar a atualização quando o paciente não existir", async () => {
      mockAuthorizedUser();
      prismaMock.appointment.findFirst.mockResolvedValue(
        existingAppointment as never,
      );
      prismaMock.patient.findFirst.mockResolvedValue(null);

      const response = await authenticatedPut().send(validAppointment);

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Paciente não encontrado");
      expect(prismaMock.appointment.updateMany).not.toHaveBeenCalled();
    });

    it("deve rejeitar a atualização quando o profissional não existir", async () => {
      mockAuthorizedUser();
      prismaMock.appointment.findFirst.mockResolvedValue(
        existingAppointment as never,
      );
      mockExistingPatient();
      prismaMock.user.findFirst.mockResolvedValueOnce(null);

      const response = await authenticatedPut().send(validAppointment);

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Profissional não encontrado");
      expect(prismaMock.appointment.updateMany).not.toHaveBeenCalled();
    });

    it.each([
      ["formato brasileiro", "19/10/2026"],
      ["formato sem separadores", "20261019"],
      ["dia inexistente", "2026-02-30"],
      ["mês inexistente", "2026-13-10"],
      ["dia zero", "2026-10-00"],
    ])("deve rejeitar uma data inválida na atualização: %s", async (_description, date) => {
      mockAuthorizedUser();

      const response = await authenticatedPut().send({
        ...validAppointment,
        date,
      });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        "Data do agendamento inválida",
      );
      expect(prismaMock.appointment.updateMany).not.toHaveBeenCalled();
      expect(prismaMock.patient.findFirst).not.toHaveBeenCalled();
    });

    it("deve rejeitar a atualização quando houver conflito de horário", async () => {
      mockAuthorizedUser();
      prismaMock.appointment.findFirst
        .mockResolvedValueOnce(existingAppointment as never)
        .mockResolvedValueOnce({
          id: "other-appointment-id",
          status: "confirmed",
        } as never);

      mockExistingPatient();
      mockExistingProfessional();

      const response = await authenticatedPut().send({
        ...validAppointment,
        time: "11:00",
      });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        "O profissional já possui um agendamento nesse horário",
      );
      expect(prismaMock.appointment.updateMany).not.toHaveBeenCalled();
    });

    it("deve atualizar o agendamento quando não houver conflito", async () => {
      mockAuthorizedUser();
      prismaMock.appointment.findFirst
        .mockResolvedValueOnce(existingAppointment as never)
        .mockResolvedValueOnce(null);

      mockExistingPatient();
      mockExistingProfessional();

      prismaMock.appointment.updateMany.mockResolvedValue({ count: 1 } as never);

      const response = await authenticatedPut().send({
        ...validAppointment,
        service: "Retorno",
      });

      expect(response.status).toBe(200);
      expect(response.body.message).toBe(
        "Agendamento atualizado com sucesso",
      );
      expect(prismaMock.appointment.updateMany).toHaveBeenCalledOnce();
      expect(prismaMock.appointment.updateMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: {
            id: appointmentId,
            clinicId: testUser.clinicId,
          },
        }),
      );
    });

    it("deve impedir a atualização de um agendamento de outra clínica", async () => {
      mockAuthorizedUser();
      prismaMock.appointment.findFirst.mockResolvedValue(null);

      const response = await authenticatedPut().send(validAppointment);

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Agendamento não encontrado");
      expect(prismaMock.appointment.updateMany).not.toHaveBeenCalled();

      expect(prismaMock.appointment.findFirst).toHaveBeenCalledWith(
        expect.objectContaining({
          where: {
            id: appointmentId,
            clinicId: testUser.clinicId,
          },
        }),
      );
    });
  });

  describe("Atualização de status", () => {
    it("deve rejeitar um status inválido", async () => {
      mockAuthorizedUser();

      const response = await authenticatedStatus().send({
        status: "pendente",
      });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe("Status inválido");
      expect(prismaMock.appointment.findFirst).not.toHaveBeenCalled();
    });

    it("deve impedir alteração de status de agendamento concluído", async () => {
      mockAuthorizedUser();
      prismaMock.appointment.findFirst.mockResolvedValue({
        ...existingAppointment,
        status: "completed",
      } as never);

      const response = await authenticatedStatus().send({
        status: "confirmed",
      });

      expect(response.status).toBe(400);
      expect(prismaMock.appointment.updateMany).not.toHaveBeenCalled();
    });

    it("deve impedir a conclusão antes da data e hora previstas", async () => {
      mockAuthorizedUser();
      prismaMock.appointment.findFirst.mockResolvedValue({
        ...existingAppointment,
        date: new Date("2099-12-10T00:00:00.000Z"),
        time: "10:30",
        status: "confirmed",
      } as never);

      const response = await authenticatedStatus().send({
        status: "completed",
      });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        "Não é possível concluir um agendamento antes da data e hora previstas",
      );
      expect(prismaMock.appointment.updateMany).not.toHaveBeenCalled();
    });

    it("deve impedir a alteração de status de um agendamento de outra clínica", async () => {
      mockAuthorizedUser();
      prismaMock.appointment.findFirst.mockResolvedValue(null);

      const response = await authenticatedStatus().send({
        status: "confirmed",
      });

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Agendamento não encontrado");
      expect(prismaMock.appointment.updateMany).not.toHaveBeenCalled();

      expect(prismaMock.appointment.findFirst).toHaveBeenCalledWith(
        expect.objectContaining({
          where: {
            id: appointmentId,
            clinicId: testUser.clinicId,
          },
        }),
      );
    });

    it("deve atualizar o status de um agendamento válido", async () => {
      mockAuthorizedUser();
      prismaMock.appointment.findFirst.mockResolvedValue(
        existingAppointment as never,
      );
      prismaMock.appointment.updateMany.mockResolvedValue({ count: 1 } as never);

      const response = await authenticatedStatus().send({
        status: "confirmed",
      });

      expect(response.status).toBe(200);
      expect(response.body.message).toBe("Status atualizado com sucesso");
      expect(response.body.appointment.status).toBe("confirmed");
      expect(prismaMock.appointment.updateMany).toHaveBeenCalledOnce();
      expect(prismaMock.appointment.updateMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: {
            id: appointmentId,
            clinicId: testUser.clinicId,
          },
        }),
      );
    });
  });

  describe("Exclusão de agendamentos", () => {
    it("deve retornar 404 quando o agendamento não existir", async () => {
      mockAuthorizedUser();
      prismaMock.appointment.findFirst.mockResolvedValue(null);

      const response = await authenticatedDelete();

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Agendamento não encontrado");
      expect(prismaMock.appointment.deleteMany).not.toHaveBeenCalled();
    });

    it("deve impedir a exclusão de um agendamento de outra clínica", async () => {
      mockAuthorizedUser();
      prismaMock.appointment.findFirst.mockResolvedValue(null);

      const response = await authenticatedDelete();

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Agendamento não encontrado");
      expect(prismaMock.appointment.deleteMany).not.toHaveBeenCalled();

      expect(prismaMock.appointment.findFirst).toHaveBeenCalledWith(
        expect.objectContaining({
          where: {
            id: appointmentId,
            clinicId: testUser.clinicId,
          },
        }),
      );
    });

    it("deve excluir um agendamento existente", async () => {
      mockAuthorizedUser();
      prismaMock.appointment.findFirst.mockResolvedValue(
        existingAppointment as never,
      );
      prismaMock.appointment.deleteMany.mockResolvedValue({ count: 1 } as never);

      const response = await authenticatedDelete();

      expect(response.status).toBe(200);
      expect(response.body.message).toBe("Agendamento removido com sucesso");
      expect(prismaMock.appointment.deleteMany).toHaveBeenCalledOnce();
      expect(prismaMock.appointment.deleteMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: {
            id: appointmentId,
            clinicId: testUser.clinicId,
          },
        }),
      );
    });
  });
});