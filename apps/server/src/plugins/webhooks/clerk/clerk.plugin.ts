// webhooks/clerk/clerk.plugin.ts
import type { FastifyInstance } from 'fastify'

export async function webhookPlugin(app: FastifyInstance) {
  app.addContentTypeParser(
    '*',
    { parseAs: 'buffer' },
    (_req, body, done) => {
      done(null, body)
    }
  )
}