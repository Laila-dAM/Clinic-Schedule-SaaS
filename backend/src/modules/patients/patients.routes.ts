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

router.use(authMiddleware);

router.post(
  "/",
  requireRole("owner"),
  createPatient
);

router.get(
  "/",
  getPatients
);

router.get(
  "/:id",
  getPatientById
);

router.put(
  "/:id",
  requireRole("owner"),
  updatePatient
);

router.delete(
  "/:id",
  requireRole("owner"),
  deletePatient
);

export default router;