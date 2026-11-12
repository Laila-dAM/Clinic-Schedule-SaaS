"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("../prisma"));
async function authMiddleware(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({
                message: "Token não enviado",
            });
        }
        const [scheme, token] = authHeader.split(" ");
        if (scheme !== "Bearer" || !token) {
            return res.status(401).json({
                message: "Token inválido",
            });
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const decodedUser = decoded;
        if (!decodedUser?.id) {
            return res.status(401).json({
                message: "Token inválido",
            });
        }
        const user = await prisma_1.default.user.findUnique({
            where: {
                id: decodedUser.id,
            },
        });
        if (!user) {
            return res.status(401).json({
                message: "Usuário não encontrado",
            });
        }
        req.user = {
            id: user.id,
            email: user.email,
            role: user.role,
            clinicId: user.clinicId,
        };
        next();
    }
    catch (error) {
        return res.status(401).json({
            message: "Token expirado ou inválido",
        });
    }
}
//# sourceMappingURL=auth.middleware.js.map