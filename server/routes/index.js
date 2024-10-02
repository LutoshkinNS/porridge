import fastifyPlugin from "fastify-plugin";

export default fastifyPlugin(async function indexRoutes(fastify, options) {
  fastify.get("/", async (request, reply) => {
    const client = await fastify.pg.connect();

    console.log(client);

    return {
      hello: "hello world",
      debugLevel: fastify.config.DEBUG_LEVEL,
    };
  });
})