import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware";
import prisma from "../../prisma";


export async function createAppointment(
  req: AuthRequest,
  res: Response
) {
  try {
    const {
      patientId,
      date,
      time,
      service,
    } = req.body;


    if (!patientId || !date || !time || !service) {
      return res.status(400).json({
        message: "Todos os campos são obrigatórios",
      });
    }


    const patient = await prisma.patient.findFirst({
      where: {
        id: patientId,
        clinicId: req.user!.clinicId,
      },
    });


    if (!patient) {
      return res.status(404).json({
        message: "Paciente não encontrado",
      });
    }


    const appointmentExists =
      await prisma.appointment.findFirst({
        where: {
          clinicId: req.user!.clinicId,
          date: new Date(date),
          time,
        },
      });


    if (appointmentExists) {
      return res.status(400).json({
        message: "Já existe um agendamento nesse horário",
      });
    }


    const appointment =
      await prisma.appointment.create({
        data: {
          patientId,
          clinicId: req.user!.clinicId,
          date: new Date(date),
          time,
          service,
        },
      });


    return res.status(201).json({
      message: "Agendamento criado com sucesso",
      appointment,
    });


  } catch (error) {

    console.error(
      "ERRO CREATE APPOINTMENT:",
      error
    );


    return res.status(500).json({
      message: "Erro interno do servidor",
    });

  }
}
// ===============================
// GET ALL APPOINTMENTS
// ===============================
export async function getAppointments(
  req: AuthRequest,
  res: Response
) {
  try {

    const appointments = await prisma.appointment.findMany({
      where: {
        clinicId: req.user!.clinicId,
      },
      orderBy: {
        date: "asc",
      },
      include: {
        patient: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
      },
    });


    return res.json({
      appointments,
    });


  } catch (error) {

    console.error(
      "ERRO GET APPOINTMENTS:",
      error
    );


    return res.status(500).json({
      message: "Erro interno do servidor",
    });

  }
}