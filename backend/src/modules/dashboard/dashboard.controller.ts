import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware";
import prisma from "../../prisma";

export async function getDashboard(
  req: AuthRequest,
  res: Response
) {
  try {
    const clinicId = req.user!.clinicId;

    const [
      patientsCount,
      appointmentsCount,
      usersCount,
    ] = await Promise.all([
      prisma.patient.count({
        where: {
          clinicId,
        },
      }),

      prisma.appointment.count({
        where: {
          clinicId,
        },
      }),

      prisma.user.count({
        where: {
          clinicId,
        },
      }),
    ]);

    return res.json({
      dashboard: {
        patients: patientsCount,
        appointments: appointmentsCount,
        users: usersCount,
      },
    });
  } catch (error) {
    console.error("ERRO GET DASHBOARD:", error);

    return res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
}
