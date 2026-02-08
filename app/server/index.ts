import Fastify from "fastify";
import staticPlugin from "@fastify/static";
import path from "path";
import { createDB } from "./db";

export async function startServer(opts: { dataDir: string; port: string }) {
  const app = Fastify();
  const db = createDB(path.join(opts.dataDir, "db", "stakbox.db"));

  app.get("/health", async () => ({ ok: true }));
  app.register(staticPlugin, { root: path.join(__dirname, "../../web/out") });

  await app.listen({ port: opts.port, host: "0.0.0.0" });
}
