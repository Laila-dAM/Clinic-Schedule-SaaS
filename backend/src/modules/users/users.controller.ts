import { Response } from "express";
import bcrypt from "bcryptjs";

import { AuthRequest } from "../../middleware/auth.middleware";
import prisma from "../../prisma";

export async function getMe(
  req: AuthRequest,
  res: Response
) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: req.user!.id,
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

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.json({
      user,
    });
  } catch (error) {
    console.error("ERROR GET ME:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

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

    if (role && role !== "staff") {
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

export async function updateUser(
  req: AuthRequest,
  res: Response
) {
  try {
    const id = String(req.params.id);
    const { name, email, password, role } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        id,
        clinicId: req.user!.clinicId,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (role && role !== "staff") {
      return res.status(400).json({
        message: "Invalid role",
      });
    }

    if (email && email !== user.email) {
      const emailExists = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (emailExists) {
        return res.status(400).json({
          message: "Email already registered",
        });
      }
    }

    const data: {
      name?: string;
      email?: string;
      password?: string;
      role?: string;
    } = {};

    if (name) {
      data.name = name;
    }

    if (email) {
      data.email = email;
    }

    if (role) {
      data.role = role;
    }

    if (password) {
      data.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        clinicId: true,
        createdAt: true,
      },
    });

    return res.json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("ERROR UPDATE USER:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

export async function deleteUser(
  req: AuthRequest,
  res: Response
) {
  try {
    const id = String(req.params.id);

    const user = await prisma.user.findFirst({
      where: {
        id,
        clinicId: req.user!.clinicId,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (user.id === req.user!.id) {
      return res.status(400).json({
        message: "You cannot delete your own account",
      });
    }

    await prisma.user.delete({
      where: {
        id,
      },
    });

    return res.json({
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("ERROR DELETE USER:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}