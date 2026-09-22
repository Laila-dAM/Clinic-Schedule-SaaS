import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import prisma from "../prisma";

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
    clinicId: string;
  };
}

export async function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "Token não enviado",
      });
    }

    const [scheme, token] = authHeader.split(" ");

    if (scheme !== "Bearer" || !token) {
      return res.status(401).json({
        message: "Token inválido",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    );

    const decodedUser = decoded as AuthRequest["user"];

if (!decodedUser?.id) {
  return res.status(401).json({
    message: "Token inválido",
  });
}

const user = await prisma.user.findUnique({
  where: {
    id: decodedUser.id,
  },
});

    if (!user) {
      return res.status(401).json({
        message: "Usuário não encontrado",
      });
    }

    req.user = {
      id: user.id,
      email: user.email,
      role: user.role,
      clinicId: user.clinicId,
    };

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Token expirado ou inválido",
    });
  }
}