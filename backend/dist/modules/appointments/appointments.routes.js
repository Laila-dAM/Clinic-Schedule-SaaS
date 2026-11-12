"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const permission_middleware_1 = require("../../middleware/permission.middleware");
const appointments_controller_1 = require("./appointments.controller");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.authMiddleware);
router.post("/", (0, permission_middleware_1.requirePermission)("appointments.create"), appointments_controller_1.createAppointment);
router.get("/", (0, permission_middleware_1.requirePermission)("appointments.read"), appointments_controller_1.getAppointments);
router.get("/:id", (0, permission_middleware_1.requirePermission)("appointments.read"), appointments_controller_1.getAppointmentById);
router.put("/:id", (0, permission_middleware_1.requirePermission)("appointments.update"), appointments_controller_1.updateAppointment);
router.patch("/:id/status", (0, permission_middleware_1.requirePermission)("appointments.update"), appointments_controller_1.updateAppointmentStatus);
router.delete("/:id", (0, permission_middleware_1.requirePermission)("appointments.delete"), appointments_controller_1.deleteAppointment);
exports.default = router;
//# sourceMappingURL=appointments.routes.js.map