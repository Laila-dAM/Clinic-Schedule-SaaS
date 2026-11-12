"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboard = getDashboard;
const prisma_1 = __importDefault(require("../../prisma"));
async function getDashboard(req, res) {
    try {
        const clinicId = req.user.clinicId;
        const [patientsCount, appointmentsCount, usersCount,] = await Promise.all([
            prisma_1.default.patient.count({
                where: {
                    clinicId,
                },
            }),
            prisma_1.default.appointment.count({
                where: {
                    clinicId,
                },
            }),
            prisma_1.default.user.count({
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
    }
    catch (error) {
        console.error("ERRO GET DASHBOARD:", error);
        return res.status(500).json({
            message: "Erro interno do servidor",
        });
    }
}
//# sourceMappingURL=dashboard.controller.js.map