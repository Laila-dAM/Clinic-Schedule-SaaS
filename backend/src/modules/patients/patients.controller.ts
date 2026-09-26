import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware";
import prisma from "../../prisma";

export async function createPatient(
  req: AuthRequest,
  res: Response
) {
  try {
    const { name, phone } = req.body;

    if (typeof name !== "string" || !name.trim()) {
      return res.status(400).json({
        message: "Nome do paciente é obrigatório",
      });
    }

    const patient = await prisma.patient.create({
      data: {
        name: name.trim(),
        phone:
          typeof phone === "string" && phone.trim()
            ? phone.trim()
            : null,
        clinicId: req.user!.clinicId,
      },
    });

    return res.status(201).json({
      message: "Paciente criado com sucesso",
      patient,
    });
  } catch (error) {
    console.error("ERRO CREATE PATIENT:", error);

    return res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
}

export async function getPatients(
  req: AuthRequest,
  res: Response
) {
  try {
    const patients = await prisma.patient.findMany({
      where: {
        clinicId: req.user!.clinicId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.json({
      patients,
    });
  } catch (error) {
    console.error("ERRO GET PATIENTS:", error);

    return res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
}

export async function getPatientById(
  req: AuthRequest,
  res: Response
) {
  try {
    const id = req.params.id as string;

    const patient = await prisma.patient.findFirst({
      where: {
        id,
        clinicId: req.user!.clinicId,
      },
    });

    if (!patient) {
      return res.status(404).json({
        message: "Paciente não encontrado",
      });
    }

    return res.json({
      patient,
    });
  } catch (error) {
    console.error("ERRO GET PATIENT:", error);

    return res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
}

export async function updatePatient(
  req: AuthRequest,
  res: Response
) {
  try {
    const id = req.params.id as string;
    const { name, phone } = req.body;

    if (name !== undefined && (
      typeof name !== "string" ||
      !name.trim()
    )) {
      return res.status(400).json({
        message: "Nome do paciente inválido",
      });
    }

    if (phone !== undefined && phone !== null && typeof phone !== "string") {
      return res.status(400).json({
        message: "Telefone inválido",
      });
    }

    const patientExists = await prisma.patient.findFirst({
      where: {
        id,
        clinicId: req.user!.clinicId,
      },
    });

    if (!patientExists) {
      return res.status(404).json({
        message: "Paciente não encontrado",
      });
    }

    const patient = await prisma.patient.update({
      where: {
        id,
      },
      data: {
        ...(name !== undefined && {
          name: name.trim(),
        }),
        ...(phone !== undefined && {
          phone:
            typeof phone === "string" && phone.trim()
              ? phone.trim()
              : null,
        }),
      },
    });

    return res.json({
      message: "Paciente atualizado com sucesso",
      patient,
    });
  } catch (error) {
    console.error("ERRO UPDATE PATIENT:", error);

    return res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
}

export async function deletePatient(
  req: AuthRequest,
  res: Response
) {
  try {
    const id = req.params.id as string;

    const patientExists = await prisma.patient.findFirst({
      where: {
        id,
        clinicId: req.user!.clinicId,
      },
    });

    if (!patientExists) {
      return res.status(404).json({
        message: "Paciente não encontrado",
      });
    }

    await prisma.patient.delete({
      where: {
        id,
      },
    });

    return res.json({
      message: "Paciente removido com sucesso",
    });
  } catch (error) {
    console.error("ERRO DELETE PATIENT:", error);

    return res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
}