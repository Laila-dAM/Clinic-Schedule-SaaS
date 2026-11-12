"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./modules/auth/auth.routes"));
const patients_routes_1 = __importDefault(require("./modules/patients/patients.routes"));
const appointments_routes_1 = __importDefault(require("./modules/appointments/appointments.routes"));
const users_routes_1 = __importDefault(require("./modules/users/users.routes"));
const dashboard_routes_1 = __importDefault(require("./modules/dashboard/dashboard.routes"));
const auth_middleware_1 = require("./middleware/auth.middleware");
const error_middleware_1 = require("./middleware/error.middleware");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/auth", auth_routes_1.default);
app.use("/patients", patients_routes_1.default);
app.use("/appointments", appointments_routes_1.default);
app.use("/users", users_routes_1.default);
app.use("/dashboard", dashboard_routes_1.default);
app.get("/health", (req, res) => {
    return res.json({
        status: "ok",
        message: "API funcionando",
    });
});
app.get("/me", auth_middleware_1.authMiddleware, (req, res) => {
    return res.json({
        message: "Usuário autenticado",
        user: req.user,
    });
});
app.use((req, res) => {
    return res.status(404).json({
        message: "Rota não encontrada",
    });
});
app.use(error_middleware_1.errorMiddleware);
exports.default = app;
//# sourceMappingURL=app.js.map