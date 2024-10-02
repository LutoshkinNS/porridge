import fastifyPlugin from 'fastify-plugin'
import fastifyPostgres from '@fastify/postgres'

/**
 * @param {FastifyInstance} fastify
 * @param {Object} options
 */
async function dbConnector (fastify, options) {
  fastify.register(fastifyPostgres, {
    connectionString: 'postgres://postgres:root@localhost:5432/postgres'
  })
}

export default fastifyPlugin(dbConnector)