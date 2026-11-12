"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPatient = createPatient;
exports.getPatients = getPatients;
exports.getPatientById = getPatientById;
exports.updatePatient = updatePatient;
exports.deletePatient = deletePatient;
const prisma_1 = __importDefault(require("../../prisma"));
async function createPatient(req, res) {
    try {
        const { name, phone } = req.body;
        if (typeof name !== "string" || !name.trim()) {
            return res.status(400).json({
                message: "Nome do paciente é obrigatório",
            });
        }
        const patient = await prisma_1.default.patient.create({
            data: {
                name: name.trim(),
                phone: typeof phone === "string" && phone.trim()
                    ? phone.trim()
                    : null,
                clinicId: req.user.clinicId,
            },
        });
        return res.status(201).json({
            message: "Paciente criado com sucesso",
            patient,
        });
    }
    catch (error) {
        console.error("ERRO CREATE PATIENT:", error);
        return res.status(500).json({
            message: "Erro interno do servidor",
        });
    }
}
async function getPatients(req, res) {
    try {
        const patients = await prisma_1.default.patient.findMany({
            where: {
                clinicId: req.user.clinicId,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        return res.json({
            patients,
        });
    }
    catch (error) {
        console.error("ERRO GET PATIENTS:", error);
        return res.status(500).json({
            message: "Erro interno do servidor",
        });
    }
}
async function getPatientById(req, res) {
    try {
        const id = req.params.id;
        const patient = await prisma_1.default.patient.findFirst({
            where: {
                id,
                clinicId: req.user.clinicId,
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
    }
    catch (error) {
        console.error("ERRO GET PATIENT:", error);
        return res.status(500).json({
            message: "Erro interno do servidor",
        });
    }
}
async function updatePatient(req, res) {
    try {
        const id = req.params.id;
        const { name, phone } = req.body;
        if (name !== undefined && (typeof name !== "string" ||
            !name.trim())) {
            return res.status(400).json({
                message: "Nome do paciente inválido",
            });
        }
        if (phone !== undefined && phone !== null && typeof phone !== "string") {
            return res.status(400).json({
                message: "Telefone inválido",
            });
        }
        const patientExists = await prisma_1.default.patient.findFirst({
            where: {
                id,
                clinicId: req.user.clinicId,
            },
        });
        if (!patientExists) {
            return res.status(404).json({
                message: "Paciente não encontrado",
            });
        }
        const patient = await prisma_1.default.patient.update({
            where: {
                id,
            },
            data: {
                ...(name !== undefined && {
                    name: name.trim(),
                }),
                ...(phone !== undefined && {
                    phone: typeof phone === "string" && phone.trim()
                        ? phone.trim()
                        : null,
                }),
            },
        });
        return res.json({
            message: "Paciente atualizado com sucesso",
            patient,
        });
    }
    catch (error) {
        console.error("ERRO UPDATE PATIENT:", error);
        return res.status(500).json({
            message: "Erro interno do servidor",
        });
    }
}
async function deletePatient(req, res) {
    try {
        const id = req.params.id;
        const patientExists = await prisma_1.default.patient.findFirst({
            where: {
                id,
                clinicId: req.user.clinicId,
            },
        });
        if (!patientExists) {
            return res.status(404).json({
                message: "Paciente não encontrado",
            });
        }
        await prisma_1.default.patient.delete({
            where: {
                id,
            },
        });
        return res.json({
            message: "Paciente removido com sucesso",
        });
    }
    catch (error) {
        console.error("ERRO DELETE PATIENT:", error);
        return res.status(500).json({
            message: "Erro interno do servidor",
        });
    }
}
//# sourceMappingURL=patients.controller.js.map