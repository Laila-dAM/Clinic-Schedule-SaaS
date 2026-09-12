import { Router } from "express";

import { authMiddleware } from "../../middleware/auth.middleware";
import { requireRole } from "../../middleware/role.middleware";

import { getUsers } from "./users.controller";

const router = Router();

router.use(authMiddleware);

router.get(
  "/",
  requireRole("owner"),
  getUsers
);

export default router;