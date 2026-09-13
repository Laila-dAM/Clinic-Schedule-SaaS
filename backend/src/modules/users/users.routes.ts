import { Router } from "express";

import { authMiddleware } from "../../middleware/auth.middleware";
import { requireRole } from "../../middleware/role.middleware";

import {
  getUsers,
  createUser,
  updateUser,
} from "./users.controller";

const router = Router();

router.use(authMiddleware);

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

export default router;