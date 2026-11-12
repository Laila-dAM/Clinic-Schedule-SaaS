"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireRole = requireRole;
function requireRole(...allowedRoles) {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                message: "Usuário não autenticado",
            });
        }
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                message: "Acesso não autorizado",
            });
        }
        next();
    };
}
//# sourceMappingURL=role.middleware.js.map