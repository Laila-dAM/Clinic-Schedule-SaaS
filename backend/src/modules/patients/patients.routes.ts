import { Router } from "express";

import { authMiddleware } from "../../middleware/auth.middleware";

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