import fastify from 'fastify'
import cors from '@fastify/cors'

import * as process from 'node:process';
import * as dotenv from "dotenv";

import dbConnector from './db/dbConnector.js';
import addRoutes from './routes/index.js';

// Run the server!
const app = fastify({ logger: true });

const env = dotenv.config({path: `.env.${process.env.NODE_ENV}`}).parsed;

app.register(dbConnector);
app.register(cors, {
  origin: env.CORS_ORIGIN,
})

app.after(() => addRoutes(app))

async function initApp() {
  await app.ready();

  try {
    await app.listen({ port: env.PORT || 5000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

initApp();
