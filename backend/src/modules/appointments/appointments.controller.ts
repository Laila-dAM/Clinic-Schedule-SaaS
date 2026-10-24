
import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware";
import prisma from "../../prisma";

const allowedStatuses = [
  "scheduled",
  "confirmed",
  "completed",
  "cancelled",
];

const activeStatuses = ["scheduled", "confirmed"];
const DEFAULT_DURATION_MINUTES = 30;
const MAX_DURATION_MINUTES = 480;

function isValidTime(time: string): boolean {
  return /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(time);
}

function parseAppointmentDate(value: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return null;
  }

  const parsedDate = new Date(`${value}T00:00:00.000Z`);

  if (
    Number.isNaN(parsedDate.getTime()) ||
    parsedDate.toISOString().slice(0, 10) !== value
  ) {
    return null;
  }

  return parsedDate;
}

function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function isValidDuration(value: unknown): value is number {
  return (
    typeof value === "number" &&
    Number.isInteger(value) &&
    value > 0 &&
    value <= MAX_DURATION_MINUTES
  );
}

function exceedsDay(time: string, durationMinutes: number): boolean {
  return timeToMinutes(time) + durationMinutes > 24 * 60;
}

function intervalsOverlap(
  firstStart: number,
  firstDuration: number,
  secondStart: number,
  secondDuration: number
): boolean {
  const firstEnd = firstStart + firstDuration;
  const secondEnd = secondStart + secondDuration;

  return firstStart < secondEnd && secondStart < firstEnd;
}

async function hasOverlappingAppointment(params: {
  clinicId: string;
  professionalId: string;
  date: Date;
  time: string;
  durationMinutes: number;
  excludeAppointmentId?: string;
}): Promise<boolean> {
  const appointments = await prisma.appointment.findMany({
    where: {
      clinicId: params.clinicId,
      professionalId: params.professionalId,
      date: params.date,
      status: {
        in: activeStatuses,
      },
      ...(params.excludeAppointmentId
        ? {
            NOT: {
              id: params.excludeAppointmentId,
            },
          }
        : {}),
    },
    select: {
      id: true,
      time: true,
      durationMinutes: true,
    },
  });

  const candidateStart = timeToMinutes(params.time);

  return appointments.some((appointment) => {
    if (!isValidTime(appointment.time)) {
      return false;
    }

    const existingDuration = appointment.durationMinutes;
    if (!isValidDuration(existingDuration)) {
      return false;
    }

    return intervalsOverlap(
      candidateStart,
      params.durationMinutes,
      timeToMinutes(appointment.time),
      existingDuration
    );
  });
}

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
      durationMinutes,
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
        message: "Todos os campos obrigatórios devem ser informados",
      });
    }

    const normalizedTime = time.trim();
    if (!isValidTime(normalizedTime)) {
      return res.status(400).json({
        message: "Horário inválido. Use o formato HH:mm",
      });
    }

    const normalizedDuration =
      durationMinutes === undefined
        ? DEFAULT_DURATION_MINUTES
        : durationMinutes;

    if (!isValidDuration(normalizedDuration)) {
      return res.status(400).json({
        message: `A duração deve ser um número inteiro entre 1 e ${MAX_DURATION_MINUTES} minutos`,
      });
    }

    if (exceedsDay(normalizedTime, normalizedDuration)) {
      return res.status(400).json({
        message: "O agendamento não pode ultrapassar a meia-noite",
      });
    }

    const appointmentDate = parseAppointmentDate(date.trim());
    if (!appointmentDate) {
      return res.status(400).json({
        message: "Data do agendamento inválida",
      });
    }

    const clinicId = req.user!.clinicId;
    const normalizedPatientId = patientId.trim();
    const normalizedProfessionalId = professionalId.trim();

    const patient = await prisma.patient.findFirst({
      where: {
        id: normalizedPatientId,
        clinicId,
      },
    });

    if (!patient) {
      return res.status(404).json({
        message: "Paciente não encontrado",
      });
    }

    const professional = await prisma.user.findFirst({
      where: {
        id: normalizedProfessionalId,
        clinicId,
      },
    });

    if (!professional) {
      return res.status(404).json({
        message: "Profissional não encontrado",
      });
    }

    const overlaps = await hasOverlappingAppointment({
      clinicId,
      professionalId: normalizedProfessionalId,
      date: appointmentDate,
      time: normalizedTime,
      durationMinutes: normalizedDuration,
    });

    if (overlaps) {
      return res.status(400).json({
        message:
          "O profissional já possui um agendamento que se sobrepõe a esse horário",
      });
    }

    const appointment = await prisma.appointment.create({
      data: {
        patientId: normalizedPatientId,
        professionalId: normalizedProfessionalId,
        clinicId,
        date: appointmentDate,
        time: normalizedTime,
        service: service.trim(),
        durationMinutes: normalizedDuration,
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

    return res.json({ appointments });
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

    const appointment = await prisma.appointment.findFirst({
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

    return res.json({ appointment });
  } catch (error) {
    console.error("ERRO GET APPOINTMENT BY ID:", error);

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
      durationMinutes,
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
        message: "Todos os campos obrigatórios devem ser informados",
      });
    }

    const normalizedTime = time.trim();
    if (!isValidTime(normalizedTime)) {
      return res.status(400).json({
        message: "Horário inválido. Use o formato HH:mm",
      });
    }

    const clinicId = req.user!.clinicId;

    const appointment = await prisma.appointment.findFirst({
      where: {
        id,
        clinicId,
      },
    });

    if (!appointment) {
      return res.status(404).json({
        message: "Agendamento não encontrado",
      });
    }

    const normalizedDuration =
      durationMinutes === undefined
        ? appointment.durationMinutes
        : durationMinutes;

    if (!isValidDuration(normalizedDuration)) {
      return res.status(400).json({
        message: `A duração deve ser um número inteiro entre 1 e ${MAX_DURATION_MINUTES} minutos`,
      });
    }

    if (exceedsDay(normalizedTime, normalizedDuration)) {
      return res.status(400).json({
        message: "O agendamento não pode ultrapassar a meia-noite",
      });
    }

    const appointmentDate = parseAppointmentDate(date.trim());
    if (!appointmentDate) {
      return res.status(400).json({
        message: "Data do agendamento inválida",
      });
    }

    const normalizedPatientId = patientId.trim();
    const normalizedProfessionalId = professionalId.trim();

    const patient = await prisma.patient.findFirst({
      where: {
        id: normalizedPatientId,
        clinicId,
      },
    });

    if (!patient) {
      return res.status(404).json({
        message: "Paciente não encontrado",
      });
    }

    const professional = await prisma.user.findFirst({
      where: {
        id: normalizedProfessionalId,
        clinicId,
      },
    });

    if (!professional) {
      return res.status(404).json({
        message: "Profissional não encontrado",
      });
    }

    const overlaps = await hasOverlappingAppointment({
      clinicId,
      professionalId: normalizedProfessionalId,
      date: appointmentDate,
      time: normalizedTime,
      durationMinutes: normalizedDuration,
      excludeAppointmentId: id,
    });

    if (overlaps) {
      return res.status(400).json({
        message:
          "O profissional já possui um agendamento que se sobrepõe a esse horário",
      });
    }

    const updateResult = await prisma.appointment.updateMany({
      where: {
        id,
        clinicId,
      },
      data: {
        patientId: normalizedPatientId,
        professionalId: normalizedProfessionalId,
        date: appointmentDate,
        time: normalizedTime,
        service: service.trim(),
        durationMinutes: normalizedDuration,
      },
    });

    if (updateResult.count !== 1) {
      return res.status(404).json({
        message: "Agendamento não encontrado",
      });
    }

    const updatedAppointment = {
      ...appointment,
      patientId: normalizedPatientId,
      professionalId: normalizedProfessionalId,
      date: appointmentDate,
      time: normalizedTime,
      service: service.trim(),
      durationMinutes: normalizedDuration,
    };

    return res.json({
      message: "Agendamento atualizado com sucesso",
      appointment: updatedAppointment,
    });
  } catch (error) {
    console.error("ERRO UPDATE APPOINTMENT:", error);

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

    const appointment = await prisma.appointment.findFirst({
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

    if (
      appointment.status === "completed" ||
      appointment.status === "cancelled"
    ) {
      return res.status(400).json({
        message:
          "Não é possível alterar o status de um agendamento concluído ou cancelado",
      });
    }

    if (status === "completed") {
      if (!isValidTime(appointment.time)) {
        return res.status(400).json({
          message:
            "Não foi possível validar a data e o horário do agendamento",
        });
      }

      const appointmentDate =
        appointment.date.toISOString().slice(0, 10);

      const appointmentDateTime = new Date(
        `${appointmentDate}T${appointment.time}:00-03:00`
      );

      if (Number.isNaN(appointmentDateTime.getTime())) {
        return res.status(400).json({
          message:
            "Não foi possível validar a data e o horário do agendamento",
        });
      }

      if (appointmentDateTime.getTime() > Date.now()) {
        return res.status(400).json({
          message:
            "Não é possível concluir um agendamento antes da data e hora previstas",
        });
      }
    }

    const updateResult = await prisma.appointment.updateMany({
      where: {
        id,
        clinicId: req.user!.clinicId,
      },
      data: {
        status,
      },
    });

    if (updateResult.count !== 1) {
      return res.status(404).json({
        message: "Agendamento não encontrado",
      });
    }

    const updatedAppointment = {
      ...appointment,
      status,
    };

    return res.json({
      message: "Status atualizado com sucesso",
      appointment: updatedAppointment,
    });
  } catch (error) {
    console.error("ERRO UPDATE APPOINTMENT STATUS:", error);

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

    const appointment = await prisma.appointment.findFirst({
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

    const deleteResult = await prisma.appointment.deleteMany({
      where: {
        id,
        clinicId: req.user!.clinicId,
      },
    });

    if (deleteResult.count !== 1) {
      return res.status(404).json({
        message: "Agendamento não encontrado",
      });
    }

    return res.json({
      message: "Agendamento removido com sucesso",
    });
  } catch (error) {
    console.error("ERRO DELETE APPOINTMENT:", error);

    return res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
}