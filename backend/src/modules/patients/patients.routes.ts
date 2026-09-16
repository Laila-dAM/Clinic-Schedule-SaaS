import { Router } from "express";

import { authMiddleware } from "../../middleware/auth.middleware";
import { requirePermission } from "../../middleware/permission.middleware";

import {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} from "./patients.controller";

const router = Router();

router.use(authMiddleware);

router.post(
  "/",
  requirePermission("patients.create"),
  createPatient
);

router.get(
  "/",
  requirePermission("patients.read"),
  getPatients
);

router.get(
  "/:id",
  requirePermission("patients.read"),
  getPatientById
);

router.put(
  "/:id",
  requirePermission("patients.update"),
  updatePatient
);

router.delete(
  "/:id",
  requirePermission("patients.delete"),
  deletePatient
);

export default router;