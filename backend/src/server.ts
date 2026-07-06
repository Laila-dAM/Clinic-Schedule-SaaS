import app from "./app";

const PORT = 3000;

const server = app.listen(PORT, "127.0.0.1", () => {
  console.log(`🚀 Server running on http://127.0.0.1:${PORT}`);
});

server.on("error", (error) => {
  console.error("Erro ao iniciar servidor:", error);
});