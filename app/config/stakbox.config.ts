import { Database } from "bun:sqlite";

export const db = new Database(`./db/stakbox.sqlite`);

export const s3 = new Bun.S3Client({
  accessKeyId: "your-access-key",
  secretAccessKey: "your-secret-key",
  bucket: "my-bucket",
  endpoint: "https://s3.us-east-1.amazonaws.com",
  sessionToken: "your-session-token",
});
