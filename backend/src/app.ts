import express from "express";
import cors from "cors";

import authRoutes from "./modules/auth/auth.routes";
import { authMiddleware } from "./middleware/auth.middleware";
import patientsRoutes from "./modules/patients/patients.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/patients", patientsRoutes);

app.get("/health", (req, res) => {
  res.json({
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

app.use("/auth", authRoutes);

export default app;