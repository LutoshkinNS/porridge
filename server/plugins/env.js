import * as dotenv from "dotenv";
import * as process from 'node:process';
import fastifyPlugin from "fastify-plugin";

export default fastifyPlugin(function configPlugin(server, options, done) {
  try {
    const envConfig = dotenv.config({path: `.env.${process.env.NODE_ENV}`});

    server.decorate("config", envConfig.parsed);

    done();
  } catch (err) {
    done(err);
  }
})