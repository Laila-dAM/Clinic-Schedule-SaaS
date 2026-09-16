import { Router } from "express";

import { authMiddleware } from "../../middleware/auth.middleware";
import { requirePermission } from "../../middleware/permission.middleware";

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
  requirePermission("appointments.create"),
  createAppointment
);

router.get(
  "/",
  requirePermission("appointments.read"),
  getAppointments
);

router.get(
  "/:id",
  requirePermission("appointments.read"),
  getAppointmentById
);

router.put(
  "/:id",
  requirePermission("appointments.update"),
  updateAppointment
);

router.patch(
  "/:id/status",
  requirePermission("appointments.update"),
  updateAppointmentStatus
);

router.delete(
  "/:id",
  requirePermission("appointments.delete"),
  deleteAppointment
);

export default router;