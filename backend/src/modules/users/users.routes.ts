import { Router } from "express";

import { authMiddleware } from "../../middleware/auth.middleware";
import { requireRole } from "../../middleware/role.middleware";

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
  requireRole("owner"),
  getUsers
);

router.post(
  "/",
  requireRole("owner"),
  createUser
);

router.put(
  "/:id",
  requireRole("owner"),
  updateUser
);

router.delete(
  "/:id",
  requireRole("owner"),
  deleteUser
);

export default router;