import express from "express";
import cors from "cors";

import authRoutes from "./modules/auth/auth.routes";
import patientsRoutes from "./modules/patients/patients.routes";
import appointmentsRoutes from "./modules/appointments/appointments.routes";

import { authMiddleware } from "./middleware/auth.middleware";


const app = express();


// ===============================
// Middlewares globais
// ===============================

app.use(cors());
app.use(express.json());


// ===============================
// Rotas públicas
// ===============================

app.use("/auth", authRoutes);


// ===============================
// Rotas protegidas
// ===============================

app.use("/patients", patientsRoutes);
app.use("/appointments", appointmentsRoutes);


// ===============================
// Health Check
// ===============================

app.get("/health", (req, res) => {
  return res.json({
    status: "ok",
    message: "API funcionando",
  });
});


// ===============================
// Teste de autenticação
// ===============================

app.get(
  "/me",
  authMiddleware,
  (req: any, res) => {
    return res.json({
      message: "Usuário autenticado",
      user: req.user,
    });
  }
);


export default app;