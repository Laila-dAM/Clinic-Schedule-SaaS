"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMe = getMe;
exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma_1 = __importDefault(require("../../prisma"));
const allowedRoles = [
    "owner",
    "admin",
    "manager",
    "professional",
    "receptionist",
    "financial",
];
async function getMe(req, res) {
    try {
        const user = await prisma_1.default.user.findFirst({
            where: {
                id: req.user.id,
                clinicId: req.user.clinicId,
            },
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
        if (!user) {
            return res.status(404).json({
                message: "Usuário não encontrado",
            });
        }
        return res.json({
            user,
        });
    }
    catch (error) {
        console.error("ERRO GET ME:", error);
        return res.status(500).json({
            message: "Erro interno do servidor",
        });
    }
}
async function getUsers(req, res) {
    try {
        const users = await prisma_1.default.user.findMany({
            where: {
                clinicId: req.user.clinicId,
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                roleId: true,
                clinicId: true,
                createdAt: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        return res.json({
            users,
        });
    }
    catch (error) {
        console.error("ERRO GET USERS:", error);
        return res.status(500).json({
            message: "Erro interno do servidor",
        });
    }
}
async function getUserById(req, res) {
    try {
        const id = String(req.params.id);
        const user = await prisma_1.default.user.findFirst({
            where: {
                id,
                clinicId: req.user.clinicId,
            },
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
        if (!user) {
            return res.status(404).json({
                message: "Usuário não encontrado",
            });
        }
        return res.json({
            user,
        });
    }
    catch (error) {
        console.error("ERRO GET USER BY ID:", error);
        return res.status(500).json({
            message: "Erro interno do servidor",
        });
    }
}
async function createUser(req, res) {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Nome, email e senha são obrigatórios",
            });
        }
        const selectedRole = role || "professional";
        if (!allowedRoles.includes(selectedRole)) {
            return res.status(400).json({
                message: "Cargo inválido",
            });
        }
        if (selectedRole === "owner" && req.user.role !== "owner") {
            return res.status(403).json({
                message: "Somente owners podem atribuir o cargo de owner",
            });
        }
        const userExists = await prisma_1.default.user.findUnique({
            where: {
                email,
            },
        });
        if (userExists) {
            return res.status(400).json({
                message: "Email já cadastrado",
            });
        }
        const roleRecord = await prisma_1.default.role.findUnique({
            where: {
                name: selectedRole,
            },
        });
        if (!roleRecord) {
            return res.status(400).json({
                message: "Cargo não encontrado",
            });
        }
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const user = await prisma_1.default.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: selectedRole,
                roleId: roleRecord.id,
                clinicId: req.user.clinicId,
            },
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
            message: "Usuário criado com sucesso",
            user,
        });
    }
    catch (error) {
        console.error("ERRO CREATE USER:", error);
        return res.status(500).json({
            message: "Erro interno do servidor",
        });
    }
}
async function updateUser(req, res) {
    try {
        const id = String(req.params.id);
        const { name, email, password, role } = req.body;
        const user = await prisma_1.default.user.findFirst({
            where: {
                id,
                clinicId: req.user.clinicId,
            },
        });
        if (!user) {
            return res.status(404).json({
                message: "Usuário não encontrado",
            });
        }
        if (user.id === req.user.id && role) {
            return res.status(400).json({
                message: "Você não pode alterar o próprio cargo",
            });
        }
        if (role && !allowedRoles.includes(role)) {
            return res.status(400).json({
                message: "Cargo inválido",
            });
        }
        if (role === "owner" && req.user.role !== "owner") {
            return res.status(403).json({
                message: "Somente owners podem atribuir o cargo de owner",
            });
        }
        if (user.role === "owner" && role && role !== "owner") {
            const ownerCount = await prisma_1.default.user.count({
                where: {
                    clinicId: req.user.clinicId,
                    role: "owner",
                },
            });
            if (ownerCount === 1) {
                return res.status(400).json({
                    message: "A clínica deve possuir pelo menos um owner",
                });
            }
        }
        if (email && email !== user.email) {
            const emailExists = await prisma_1.default.user.findUnique({
                where: {
                    email,
                },
            });
            if (emailExists) {
                return res.status(400).json({
                    message: "Email já cadastrado",
                });
            }
        }
        const data = {};
        if (name) {
            data.name = name;
        }
        if (email) {
            data.email = email;
        }
        if (role) {
            const roleRecord = await prisma_1.default.role.findUnique({
                where: {
                    name: role,
                },
            });
            if (!roleRecord) {
                return res.status(400).json({
                    message: "Cargo não encontrado",
                });
            }
            data.role = role;
            data.roleId = roleRecord.id;
        }
        if (password) {
            data.password = await bcryptjs_1.default.hash(password, 10);
        }
        const updatedUser = await prisma_1.default.user.update({
            where: {
                id,
            },
            data,
            select: {
                id: true,
                name: true,
                email: true,
                password: false,
                role: true,
                roleId: true,
                clinicId: true,
                createdAt: true,
            },
        });
        return res.json({
            message: "Usuário atualizado com sucesso",
            user: updatedUser,
        });
    }
    catch (error) {
        console.error("ERRO UPDATE USER:", error);
        return res.status(500).json({
            message: "Erro interno do servidor",
        });
    }
}
async function deleteUser(req, res) {
    try {
        const id = String(req.params.id);
        const user = await prisma_1.default.user.findFirst({
            where: {
                id,
                clinicId: req.user.clinicId,
            },
        });
        if (!user) {
            return res.status(404).json({
                message: "Usuário não encontrado",
            });
        }
        if (user.id === req.user.id) {
            return res.status(400).json({
                message: "Você não pode excluir a própria conta",
            });
        }
        if (user.role === "owner") {
            const ownerCount = await prisma_1.default.user.count({
                where: {
                    clinicId: req.user.clinicId,
                    role: "owner",
                },
            });
            if (ownerCount === 1) {
                return res.status(400).json({
                    message: "A clínica deve possuir pelo menos um owner",
                });
            }
        }
        await prisma_1.default.user.delete({
            where: {
                id,
            },
        });
        return res.json({
            message: "Usuário excluído com sucesso",
        });
    }
    catch (error) {
        console.error("ERRO DELETE USER:", error);
        return res.status(500).json({
            message: "Erro interno do servidor",
        });
    }
}
//# sourceMappingURL=users.controller.js.map