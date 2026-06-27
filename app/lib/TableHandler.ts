import { db } from "../config/stakbox.config";

export class TableHandler {
  constructor() {}

  async create(table: any) {
    db.run(`CREATE TABLE IF NOT EXISTS ${table.name} (
            
            )`);
  }
}
