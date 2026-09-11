import { Router } from "express";

import { authMiddleware } from "../../middleware/auth.middleware";
import { requireRole } from "../../middleware/role.middleware";

import {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} from "./patients.controller";

const router = Router();

// Todas as rotas de pacientes precisam de autenticação
router.use(authMiddleware);

// ===============================
// CREATE
// POST /patients
// ===============================

router.post(
  "/",
  requireRole("owner"),
  createPatient
);

// ===============================
// READ ALL
// GET /patients
// ===============================

router.get(
  "/",
  getPatients
);

// ===============================
// READ ONE
// GET /patients/:id
// ===============================

router.get(
  "/:id",
  getPatientById
);

// ===============================
// UPDATE
// PUT /patients/:id
// ===============================

router.put(
  "/:id",
  requireRole("owner"),
  updatePatient
);

// ===============================
// DELETE
// DELETE /patients/:id
// ===============================

router.delete(
  "/:id",
  deletePatient
);

export default router;