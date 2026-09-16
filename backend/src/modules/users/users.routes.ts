import { Router } from "express";

import { authMiddleware } from "../../middleware/auth.middleware";
import { requirePermission } from "../../middleware/permission.middleware";

import {
  getMe,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "./users.controller";

const router = Router();

router.use(authMiddleware);

router.get(
  "/me",
  getMe
);

router.get(
  "/",
  requirePermission("users.read"),
  getUsers
);

router.post(
  "/",
  requirePermission("users.create"),
  createUser
);

router.put(
  "/:id",
  requirePermission("users.update"),
  updateUser
);

router.delete(
  "/:id",
  requirePermission("users.delete"),
  deleteUser
);

export default router;