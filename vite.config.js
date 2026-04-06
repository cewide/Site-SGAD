import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** Em produção, configure o mesmo path no seu backend (ex.: serverless). */
function leadApiMock() {
  return {
    name: "lead-api-mock",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split("?")[0];
        if (url === "/api/lead" && req.method === "POST") {
          const chunks = [];
          req.on("data", (c) => chunks.push(c));
          req.on("end", () => {
            res.setHeader("Content-Type", "application/json");
            res.statusCode = 200;
            res.end(JSON.stringify({ ok: true }));
          });
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), leadApiMock()],
});
