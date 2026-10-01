import { Router } from "express";

import { authMiddleware } from "../../middleware/auth.middleware";
import { requirePermission } from "../../middleware/permission.middleware";

import { getDashboard } from "./dashboard.controller";

const router = Router();

router.use(authMiddleware);

router.get(
  "/",
  requirePermission("dashboard.read"),
  getDashboard
);

export default router;
