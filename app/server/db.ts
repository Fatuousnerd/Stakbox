import { PrismaClient } from "@prisma/client";

export function createDB(dbPath: string) {
  return new PrismaClient({ datasources: { db: { url: `file:${dbPath}` } } });
}
