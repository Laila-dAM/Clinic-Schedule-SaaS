import { Response } from "express";
import bcrypt from "bcryptjs";

import { AuthRequest } from "../../middleware/auth.middleware";
import prisma from "../../prisma";

const allowedRoles = [
  "owner",
  "admin",
  "manager",
  "professional",
  "receptionist",
  "financial",
];

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
        roleId: true,
        clinicId: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "Usuário não encontrado",
      });
    }

    return res.json({
      user,
    });
  } catch (error) {
    console.error("ERRO GET ME:", error);

    return res.status(500).json({
      message: "Erro interno do servidor",
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
        roleId: true,
        clinicId: true,
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
    console.error("ERRO GET USERS:", error);

    return res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
}

export async function getUserById(
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
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        roleId: true,
        clinicId: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "Usuário não encontrado",
      });
    }

    return res.json({
      user,
    });
  } catch (error) {
    console.error("ERRO GET USER BY ID:", error);

    return res.status(500).json({
      message: "Erro interno do servidor",
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
        message: "Nome, email e senha são obrigatórios",
      });
    }

    const selectedRole = role || "professional";

    if (!allowedRoles.includes(selectedRole)) {
      return res.status(400).json({
        message: "Cargo inválido",
      });
    }

    if (selectedRole === "owner" && req.user!.role !== "owner") {
      return res.status(403).json({
        message: "Somente owners podem atribuir o cargo de owner",
      });
    }

    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      return res.status(400).json({
        message: "Email já cadastrado",
      });
    }

    const roleRecord = await prisma.role.findUnique({
      where: {
        name: selectedRole,
      },
    });

    if (!roleRecord) {
      return res.status(400).json({
        message: "Cargo não encontrado",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: selectedRole,
        roleId: roleRecord.id,
        clinicId: req.user!.clinicId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        roleId: true,
        clinicId: true,
        createdAt: true,
      },
    });

    return res.status(201).json({
      message: "Usuário criado com sucesso",
      user,
    });
  } catch (error) {
    console.error("ERRO CREATE USER:", error);

    return res.status(500).json({
      message: "Erro interno do servidor",
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
        message: "Usuário não encontrado",
      });
    }

    if (user.id === req.user!.id && role) {
      return res.status(400).json({
        message: "Você não pode alterar o próprio cargo",
      });
    }

    if (role && !allowedRoles.includes(role)) {
      return res.status(400).json({
        message: "Cargo inválido",
      });
    }

    if (role === "owner" && req.user!.role !== "owner") {
      return res.status(403).json({
        message: "Somente owners podem atribuir o cargo de owner",
      });
    }

    if (user.role === "owner" && role && role !== "owner") {
      const ownerCount = await prisma.user.count({
        where: {
          clinicId: req.user!.clinicId,
          role: "owner",
        },
      });

      if (ownerCount === 1) {
        return res.status(400).json({
          message: "A clínica deve possuir pelo menos um owner",
        });
      }
    }

    if (email && email !== user.email) {
      const emailExists = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (emailExists) {
        return res.status(400).json({
          message: "Email já cadastrado",
        });
      }
    }

    const data: {
      name?: string;
      email?: string;
      password?: string;
      role?: string;
      roleId?: string;
    } = {};

    if (name) {
      data.name = name;
    }

    if (email) {
      data.email = email;
    }

    if (role) {
      const roleRecord = await prisma.role.findUnique({
        where: {
          name: role,
        },
      });

      if (!roleRecord) {
        return res.status(400).json({
          message: "Cargo não encontrado",
        });
      }

      data.role = role;
      data.roleId = roleRecord.id;
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
        password: false,
        role: true,
        roleId: true,
        clinicId: true,
        createdAt: true,
      },
    });

    return res.json({
      message: "Usuário atualizado com sucesso",
      user: updatedUser,
    });
  } catch (error) {
    console.error("ERRO UPDATE USER:", error);

    return res.status(500).json({
      message: "Erro interno do servidor",
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
        message: "Usuário não encontrado",
      });
    }

    if (user.id === req.user!.id) {
      return res.status(400).json({
        message: "Você não pode excluir a própria conta",
      });
    }

    if (user.role === "owner") {
      const ownerCount = await prisma.user.count({
        where: {
          clinicId: req.user!.clinicId,
          role: "owner",
        },
      });

      if (ownerCount === 1) {
        return res.status(400).json({
          message: "A clínica deve possuir pelo menos um owner",
        });
      }
    }

    await prisma.user.delete({
      where: {
        id,
      },
    });

    return res.json({
      message: "Usuário excluído com sucesso",
    });
  } catch (error) {
    console.error("ERRO DELETE USER:", error);

    return res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
}