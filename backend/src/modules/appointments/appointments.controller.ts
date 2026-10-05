import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware";
import prisma from "../../prisma";

const allowedStatuses = [
  "scheduled",
  "confirmed",
  "completed",
  "cancelled",
];

export async function createAppointment(
  req: AuthRequest,
  res: Response
) {
  try {
    const {
      patientId,
      professionalId,
      date,
      time,
      service,
    } = req.body;

    if (
      typeof patientId !== "string" ||
      !patientId.trim() ||
      typeof professionalId !== "string" ||
      !professionalId.trim() ||
      typeof date !== "string" ||
      !date.trim() ||
      typeof time !== "string" ||
      !time.trim() ||
      typeof service !== "string" ||
      !service.trim()
    ) {
      return res.status(400).json({
        message: "Todos os campos são obrigatórios",
      });
    }

    const appointmentDate = new Date(date);

    if (Number.isNaN(appointmentDate.getTime())) {
      return res.status(400).json({
        message: "Data do agendamento inválida",
      });
    }

    const patient = await prisma.patient.findFirst({
      where: {
        id: patientId.trim(),
        clinicId: req.user!.clinicId,
      },
    });

    if (!patient) {
      return res.status(404).json({
        message: "Paciente não encontrado",
      });
    }

    const professional = await prisma.user.findFirst({
      where: {
        id: professionalId.trim(),
        clinicId: req.user!.clinicId,
      },
    });

    if (!professional) {
      return res.status(404).json({
        message: "Profissional não encontrado",
      });
    }

    const appointmentExists =
      await prisma.appointment.findFirst({
        where: {
          clinicId: req.user!.clinicId,
          date: appointmentDate,
          time: time.trim(),
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
          patientId: patientId.trim(),
          professionalId: professionalId.trim(),
          clinicId: req.user!.clinicId,
          date: appointmentDate,
          time: time.trim(),
          service: service.trim(),
        },
      });

    return res.status(201).json({
      message: "Agendamento criado com sucesso",
      appointment,
    });
  } catch (error) {
    console.error("ERRO CREATE APPOINTMENT:", error);

    return res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
}

export async function getAppointments(
  req: AuthRequest,
  res: Response
) {
  try {
    const appointments =
      await prisma.appointment.findMany({
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
          professional: {
            select: {
              id: true,
              name: true,
              email: true,
              role: true,
            },
          },
        },
      });

    return res.json({
      appointments,
    });
  } catch (error) {
    console.error("ERRO GET APPOINTMENTS:", error);

    return res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
}

export async function getAppointmentById(
  req: AuthRequest,
  res: Response
) {
  try {
    const id = req.params.id as string;

    const appointment =
      await prisma.appointment.findFirst({
        where: {
          id,
          clinicId: req.user!.clinicId,
        },
        include: {
          patient: {
            select: {
              id: true,
              name: true,
              phone: true,
            },
          },
          professional: {
            select: {
              id: true,
              name: true,
              email: true,
              role: true,
            },
          },
        },
      });

    if (!appointment) {
      return res.status(404).json({
        message: "Agendamento não encontrado",
      });
    }

    return res.json({
      appointment,
    });
  } catch (error) {
    console.error(
      "ERRO GET APPOINTMENT BY ID:",
      error
    );

    return res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
}

export async function updateAppointment(
  req: AuthRequest,
  res: Response
) {
  try {
    const id = req.params.id as string;

    const {
      patientId,
      professionalId,
      date,
      time,
      service,
    } = req.body;

    if (
      typeof patientId !== "string" ||
      !patientId.trim() ||
      typeof professionalId !== "string" ||
      !professionalId.trim() ||
      typeof date !== "string" ||
      !date.trim() ||
      typeof time !== "string" ||
      !time.trim() ||
      typeof service !== "string" ||
      !service.trim()
    ) {
      return res.status(400).json({
        message: "Todos os campos são obrigatórios",
      });
    }

    const appointmentDate = new Date(date);

    if (Number.isNaN(appointmentDate.getTime())) {
      return res.status(400).json({
        message: "Data do agendamento inválida",
      });
    }

    const appointment =
      await prisma.appointment.findFirst({
        where: {
          id,
          clinicId: req.user!.clinicId,
        },
      });

    if (!appointment) {
      return res.status(404).json({
        message: "Agendamento não encontrado",
      });
    }

    const patient =
      await prisma.patient.findFirst({
        where: {
          id: patientId.trim(),
          clinicId: req.user!.clinicId,
        },
      });

    if (!patient) {
      return res.status(404).json({
        message: "Paciente não encontrado",
      });
    }

    const professional =
      await prisma.user.findFirst({
        where: {
          id: professionalId.trim(),
          clinicId: req.user!.clinicId,
        },
      });

    if (!professional) {
      return res.status(404).json({
        message: "Profissional não encontrado",
      });
    }

    const appointmentExists =
      await prisma.appointment.findFirst({
        where: {
          clinicId: req.user!.clinicId,
          date: appointmentDate,
          time: time.trim(),
          NOT: {
            id,
          },
        },
      });

    if (appointmentExists) {
      return res.status(400).json({
        message: "Já existe um agendamento nesse horário",
      });
    }

    const updatedAppointment =
      await prisma.appointment.update({
        where: {
          id,
        },
        data: {
          patientId: patientId.trim(),
          professionalId: professionalId.trim(),
          date: appointmentDate,
          time: time.trim(),
          service: service.trim(),
        },
      });

    return res.json({
      message: "Agendamento atualizado com sucesso",
      appointment: updatedAppointment,
    });
  } catch (error) {
    console.error(
      "ERRO UPDATE APPOINTMENT:",
      error
    );

    return res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
}

export async function updateAppointmentStatus(
  req: AuthRequest,
  res: Response
) {
  try {
    const id = req.params.id as string;
    const { status } = req.body;

    if (
      typeof status !== "string" ||
      !allowedStatuses.includes(status)
    ) {
      return res.status(400).json({
        message: "Status inválido",
      });
    }

    const appointment =
      await prisma.appointment.findFirst({
        where: {
          id,
          clinicId: req.user!.clinicId,
        },
      });

    if (!appointment) {
      return res.status(404).json({
        message: "Agendamento não encontrado",
      });
    }

    const updatedAppointment =
      await prisma.appointment.update({
        where: {
          id,
        },
        data: {
          status,
        },
      });

    return res.json({
      message: "Status atualizado com sucesso",
      appointment: updatedAppointment,
    });
  } catch (error) {
    console.error(
      "ERRO UPDATE APPOINTMENT STATUS:",
      error
    );

    return res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
}

export async function deleteAppointment(
  req: AuthRequest,
  res: Response
) {
  try {
    const id = req.params.id as string;

    const appointment =
      await prisma.appointment.findFirst({
        where: {
          id,
          clinicId: req.user!.clinicId,
        },
      });

    if (!appointment) {
      return res.status(404).json({
        message: "Agendamento não encontrado",
      });
    }

    await prisma.appointment.delete({
      where: {
        id,
      },
    });

    return res.json({
      message: "Agendamento removido com sucesso",
    });
  } catch (error) {
    console.error(
      "ERRO DELETE APPOINTMENT:",
      error
    );

    return res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
}