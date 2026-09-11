import { Router } from "express";

import { authMiddleware } from "../../middleware/auth.middleware";
import { requireRole } from "../../middleware/role.middleware";

import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  updateAppointmentStatus,
  deleteAppointment,
} from "./appointments.controller";

const router = Router();

router.use(authMiddleware);

router.post(
  "/",
  requireRole("owner"),
  createAppointment
);

router.get(
  "/",
  getAppointments
);

router.get(
  "/:id",
  getAppointmentById
);

router.put(
  "/:id",
  requireRole("owner"),
  updateAppointment
);

router.patch(
  "/:id/status",
  requireRole("owner"),
  updateAppointmentStatus
);

router.delete(
  "/:id",
  requireRole("owner"),
  deleteAppointment
);

export default router;