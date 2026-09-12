import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware";
import prisma from "../../prisma";

export async function getUsers(
  req: AuthRequest,
  res: Response
) {
  try {
    const users = await prisma.user.findMany({
      where: {
        clinicId: req.user!.clinicId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.json({
      users,
    });
  } catch (error) {
    console.error("ERROR GET USERS:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}