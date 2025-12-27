import type { FastifyInstance, FastifyRequest } from 'fastify'

type KycSubmissionBody = {
  userId: string
  documentType?: string
}

export async function kycRoutes(app: FastifyInstance) {
  app.get('/', async () => ({
    status: 'not-implemented'
  }))

  app.post(
    '/',
    async (request: FastifyRequest<{ Body: KycSubmissionBody }>) => ({
      status: 'not-implemented',
      userId: request.body.userId
    })
  )
}
