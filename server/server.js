import * as process from 'node:process';

import fastify from 'fastify'

import envPlugin from "./plugins/env.js";
import indexRoutes from "./routes/index.js";
import dbConnector from './db/dbConnector.js';

// Run the server!
const server = fastify({ logger: true });

server.register(envPlugin);
server.register(dbConnector);
server.register(indexRoutes);

async function initAppServer() {
  await server.ready();

  try {
    await server.listen({ port: server.config.PORT || 5000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

initAppServer();
