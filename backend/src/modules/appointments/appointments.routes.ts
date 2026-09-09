import { Router } from "express";

import { authMiddleware } from "../../middleware/auth.middleware";

import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  updateAppointmentStatus,
  deleteAppointment,
} from "./appointments.controller";

const router = Router();

// CREATE
router.post(
  "/",
  authMiddleware,
  createAppointment
);

// GET ALL
router.get(
  "/",
  authMiddleware,
  getAppointments
);

// GET BY ID
router.get(
  "/:id",
  authMiddleware,
  getAppointmentById
);

// UPDATE
router.put(
  "/:id",
  authMiddleware,
  updateAppointment
);

// UPDATE STATUS
router.patch(
  "/:id/status",
  authMiddleware,
  updateAppointmentStatus
);

// DELETE
router.delete(
  "/:id",
  authMiddleware,
  deleteAppointment
);

export default router;