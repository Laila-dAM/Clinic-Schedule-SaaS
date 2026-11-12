"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("../../prisma"));
async function register(req, res) {
    try {
        const { name, email, password, clinicName } = req.body;
        const userExists = await prisma_1.default.user.findUnique({
            where: { email },
        });
        if (userExists) {
            return res.status(400).json({
                message: "Usuário já existe",
            });
        }
        const ownerRole = await prisma_1.default.role.findUnique({
            where: { name: "owner" },
        });
        if (!ownerRole) {
            return res.status(500).json({
                message: "Role owner não encontrada",
            });
        }
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const clinic = await prisma_1.default.clinic.create({
            data: {
                name: clinicName,
                users: {
                    create: {
                        name,
                        email,
                        password: hashedPassword,
                        role: "owner",
                        roleId: ownerRole.id,
                    },
                },
            },
        });
        const createdUser = await prisma_1.default.user.findUnique({
            where: { email },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                roleId: true,
                clinicId: true,
                createdAt: true,
            },
        });
        return res.status(201).json({
            message: "Conta criada com sucesso",
            user: createdUser,
            clinicId: clinic.id,
        });
    }
    catch (error) {
        console.error("ERRO REGISTER:", error);
        return res.status(500).json({
            message: "Erro interno do servidor",
        });
    }
}
async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await prisma_1.default.user.findUnique({
            where: {
                email,
            },
            include: {
                roleRef: true,
            },
        });
        if (!user) {
            return res.status(404).json({
                message: "Usuário não encontrado",
            });
        }
        const passwordIsValid = await bcryptjs_1.default.compare(password, user.password);
        if (!passwordIsValid) {
            return res.status(401).json({
                message: "Senha incorreta",
            });
        }
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            return res.status(500).json({
                message: "JWT_SECRET não configurado",
            });
        }
        const token = jsonwebtoken_1.default.sign({
            id: user.id,
            email: user.email,
            role: user.roleRef?.name ?? user.role,
            clinicId: user.clinicId,
        }, secret, {
            expiresIn: "7d",
        });
        console.log("LOGIN NOVO COM JWT");
        return res.status(200).json({
            message: "Login realizado com sucesso",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.roleRef?.name ?? user.role,
                roleId: user.roleId,
                clinicId: user.clinicId,
            },
        });
    }
    catch (error) {
        console.error("ERRO LOGIN:", error);
        return res.status(500).json({
            message: "Erro interno do servidor",
        });
    }
}
//# sourceMappingURL=auth.controller.js.map