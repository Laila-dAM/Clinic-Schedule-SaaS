import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware";
import prisma from "../../prisma";


// ===============================
// CREATE PATIENT
// ===============================
export async function createPatient(
  req: AuthRequest,
  res: Response
) {
  try {

    const { name, phone } = req.body;


    if (!name) {
      return res.status(400).json({
        message: "Nome do paciente é obrigatório",
      });
    }


    const patient = await prisma.patient.create({
      data: {
        name,
        phone: phone || null,
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



// ===============================
// GET ALL PATIENTS
// ===============================
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



// ===============================
// GET PATIENT BY ID
// ===============================
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



// ===============================
// UPDATE PATIENT
// ===============================
export async function updatePatient(
  req: AuthRequest,
  res: Response
) {

  try {


    const id = req.params.id as string;


    const {
      name,
      phone,
    } = req.body;



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

        name,

        phone,

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



// ===============================
// DELETE PATIENT
// ===============================
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