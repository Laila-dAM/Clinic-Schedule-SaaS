"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const permission_middleware_1 = require("../../middleware/permission.middleware");
const patients_controller_1 = require("./patients.controller");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.authMiddleware);
router.post("/", (0, permission_middleware_1.requirePermission)("patients.create"), patients_controller_1.createPatient);
router.get("/", (0, permission_middleware_1.requirePermission)("patients.read"), patients_controller_1.getPatients);
router.get("/:id", (0, permission_middleware_1.requirePermission)("patients.read"), patients_controller_1.getPatientById);
router.put("/:id", (0, permission_middleware_1.requirePermission)("patients.update"), patients_controller_1.updatePatient);
router.delete("/:id", (0, permission_middleware_1.requirePermission)("patients.delete"), patients_controller_1.deletePatient);
exports.default = router;
//# sourceMappingURL=patients.routes.js.map