import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware";
import {
  createAppointment,
  getAppointments,
} from "./appointments.controller";


const router = Router();


router.post(
  "/",
  authMiddleware,
  createAppointment
);


router.get(
  "/",
  authMiddleware,
  getAppointments
);


export default router;