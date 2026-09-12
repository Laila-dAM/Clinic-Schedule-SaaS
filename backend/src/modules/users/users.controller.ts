import { Response } from "express";
import bcrypt from "bcryptjs";

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

export async function createUser(
  req: AuthRequest,
  res: Response
) {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required",
      });
    }

    const allowedRoles = ["staff"];

    if (role && !allowedRoles.includes(role)) {
      return res.status(400).json({
        message: "Invalid role",
      });
    }

    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role || "staff",
        clinicId: req.user!.clinicId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        clinicId: true,
        createdAt: true,
      },
    });

    return res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.error("ERROR CREATE USER:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}