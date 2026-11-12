"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = 3000;
const server = app_1.default.listen(PORT, "127.0.0.1", () => {
    console.log(`🚀 Server running on http://127.0.0.1:${PORT}`);
});
server.on("error", (error) => {
    console.error("Erro ao iniciar servidor:", error);
});
//# sourceMappingURL=server.js.map