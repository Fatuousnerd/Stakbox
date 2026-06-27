import { FileHandler } from "./lib/FileHandler";

export const server = Bun.serve({
  idleTimeout: 100,
  routes: {
    "/api/status": {
      GET: async (req, server) => {
        return Response.json({ server: server.pendingRequests, req });
      },
    },
    '/api/tables':{},
    "/api/files": {
      GET: async (req) => {
        const upload = await new FileHandler().upload();
        return Response.json({ created: true, upload });
      },
    },
  },
  fetch(req, server) {
    return new Response(`Active Reqs ${server}`);
  },
});

console.log(`Server is running at ${server.url}`);
