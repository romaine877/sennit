import type { FastifyInstance } from 'fastify'

export async function webhookRawBodyPlugin(app: FastifyInstance) {
  app.addContentTypeParser('*', { parseAs: 'buffer' }, (_req, body, done) => {
    done(null, body)
  })
}
