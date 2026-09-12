import { Router } from "express";

import { authMiddleware } from "../../middleware/auth.middleware";
import { requireRole } from "../../middleware/role.middleware";

import {
  getUsers,
  createUser,
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

export default router;