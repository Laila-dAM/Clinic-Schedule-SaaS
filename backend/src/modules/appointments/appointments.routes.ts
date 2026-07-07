import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware";

import {
  createAppointment,
  getAppointments,
  getAppointmentById,
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


export default router;