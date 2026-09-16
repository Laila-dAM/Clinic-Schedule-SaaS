import { Response, NextFunction } from "express";
import { AuthRequest } from "./auth.middleware";
import prisma from "../prisma";

export function requirePermission(permissionName: string) {
  return async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.user) {
      return res.status(401).json({
        message: "Usuário não autenticado",
      });
    }

    try {
      const user = await prisma.user.findUnique({
        where: {
          id: req.user.id,
        },
        include: {
          roleRef: {
            include: {
              permissions: true,
            },
          },
        },
      });

      if (!user || !user.roleRef) {
        return res.status(403).json({
          message: "Acesso não autorizado",
        });
      }

      const hasPermission = user.roleRef.permissions.some(
        (permission) => permission.name === permissionName
      );

      if (!hasPermission) {
        return res.status(403).json({
          message: "Permissão insuficiente",
        });
      }

      next();
    } catch (error) {
      console.error("ERROR CHECKING PERMISSION:", error);

      return res.status(500).json({
        message: "Internal server error",
      });
    }
  };
}