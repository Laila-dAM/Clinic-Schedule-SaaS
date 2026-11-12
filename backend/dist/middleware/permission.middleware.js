"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requirePermission = requirePermission;
const prisma_1 = __importDefault(require("../prisma"));
function requirePermission(permissionName) {
    return async (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                message: "Usuário não autenticado",
            });
        }
        try {
            const user = await prisma_1.default.user.findFirst({
                where: {
                    id: req.user.id,
                    clinicId: req.user.clinicId,
                },
                include: {
                    roleRef: {
                        include: {
                            permissions: true,
                        },
                    },
                },
            });
            if (!user || !user.roleRef) {
                return res.status(403).json({
                    message: "Acesso não autorizado",
                });
            }
            const hasPermission = user.roleRef.permissions.some((permission) => permission.name === permissionName);
            if (!hasPermission) {
                return res.status(403).json({
                    message: "Permissão insuficiente",
                });
            }
            return next();
        }
        catch (error) {
            console.error("ERRO AO VERIFICAR PERMISSÃO:", error);
            return res.status(500).json({
                message: "Erro interno do servidor",
            });
        }
    };
}
//# sourceMappingURL=permission.middleware.js.map