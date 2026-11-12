"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = errorMiddleware;
function errorMiddleware(error, req, res, next) {
    console.error(error);
    return res.status(500).json({
        message: "Erro interno do servidor",
    });
}
//# sourceMappingURL=error.middleware.js.map