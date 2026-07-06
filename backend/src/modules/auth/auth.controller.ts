import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../../prisma";


export async function register(req: Request, res: Response) {
  try {
    const { name, email, password, clinicName } = req.body;

    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      return res.status(400).json({
        message: "Usuário já existe",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const clinic = await prisma.clinic.create({
      data: {
        name: clinicName,
        users: {
          create: {
            name,
            email,
            password: hashedPassword,
            role: "owner",
          },
        },
      },
    });

    const createdUser = await prisma.user.findUnique({
      where: { email },
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
      message: "Conta criada com sucesso",
      user: createdUser,
      clinicId: clinic.id,
    });

  } catch (error) {
    console.error("ERRO REGISTER:", error);

    return res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
}


export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;


    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });


    if (!user) {
      return res.status(404).json({
        message: "Usuário não encontrado",
      });
    }


    const passwordIsValid = await bcrypt.compare(
      password,
      user.password
    );


    if (!passwordIsValid) {
      return res.status(401).json({
        message: "Senha incorreta",
      });
    }


    const secret = process.env.JWT_SECRET;


    if (!secret) {
      return res.status(500).json({
        message: "JWT_SECRET não configurado",
      });
    }


    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
        clinicId: user.clinicId,
      },
      secret,
      {
        expiresIn: "7d",
      }
    );


    console.log("LOGIN NOVO COM JWT");


    return res.status(200).json({
      message: "Login realizado com sucesso",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        clinicId: user.clinicId,
      },
    });


  } catch (error) {
    console.error("ERRO LOGIN:", error);

    return res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
}