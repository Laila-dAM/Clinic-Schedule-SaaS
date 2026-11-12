"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const permission_middleware_1 = require("../../middleware/permission.middleware");
const users_controller_1 = require("./users.controller");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.authMiddleware);
router.get("/me", users_controller_1.getMe);
router.get("/", (0, permission_middleware_1.requirePermission)("users.read"), users_controller_1.getUsers);
router.get("/:id", (0, permission_middleware_1.requirePermission)("users.read"), users_controller_1.getUserById);
router.post("/", (0, permission_middleware_1.requirePermission)("users.create"), users_controller_1.createUser);
router.put("/:id", (0, permission_middleware_1.requirePermission)("users.update"), users_controller_1.updateUser);
router.delete("/:id", (0, permission_middleware_1.requirePermission)("users.delete"), users_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=users.routes.js.map