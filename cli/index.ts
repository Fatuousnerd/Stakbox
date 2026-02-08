import path from "path";
import fs from "fs";
import { startServer } from "../app/server";

const DATA_DIR =
  process.env.STAKBOX_DATA || path.join(process.cwd(), "stakbox");

function ensureDir(p: string) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

ensureDir(DATA_DIR);
ensureDir(path.join(DATA_DIR, "db"));
ensureDir(path.join(DATA_DIR, "storage"));

startServer({ dataDir: DATA_DIR, port: 300 });
