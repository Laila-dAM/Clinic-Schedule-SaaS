import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware";

import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
} from "./appointments.controller";


const router = Router();


// ===============================
// CREATE APPOINTMENT
// POST /appointments
// ===============================
router.post(
  "/",
  authMiddleware,
  createAppointment
);


// ===============================
// GET ALL APPOINTMENTS
// GET /appointments
// ===============================
router.get(
  "/",
  authMiddleware,
  getAppointments
);


// ===============================
// GET APPOINTMENT BY ID
// GET /appointments/:id
// ===============================
router.get(
  "/:id",
  authMiddleware,
  getAppointmentById
);

// ===============================
// UPDATE APPOINTMENT
// PUT /appointments/:id
// ===============================
router.put(
  "/:id",
  authMiddleware,
  updateAppointment
);

export default router;