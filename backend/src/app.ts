import express from "express";
import cors from "cors";

import authRoutes from "./modules/auth/auth.routes";
import patientsRoutes from "./modules/patients/patients.routes";
import appointmentsRoutes from "./modules/appointments/appointments.routes";
import usersRoutes from "./modules/users/users.routes";

import { authMiddleware } from "./middleware/auth.middleware";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.use("/patients", patientsRoutes);
app.use("/appointments", appointmentsRoutes);
app.use("/users", usersRoutes);

app.get("/health", (req, res) => {
  return res.json({
    status: "ok",
    message: "API funcionando",
  });
});

app.get("/me", authMiddleware, (req: any, res) => {
  return res.json({
    message: "Usuário autenticado",
    user: req.user,
  });
});

export default app;