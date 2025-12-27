import type { FastifyInstance, FastifyRequest } from 'fastify'

export async function unitWebhookRoutes(app: FastifyInstance) {
  app.post(
    '/',
    async (
      request: FastifyRequest<{ Body: Record<string, unknown> }>
    ) => ({
      status: 'not-implemented',
      received: request.body
    })
  )
}
