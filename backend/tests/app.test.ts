
import { describe, expect, it } from "vitest";
import request from "supertest";
import app from "../src/app";

describe("API", () => {
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
