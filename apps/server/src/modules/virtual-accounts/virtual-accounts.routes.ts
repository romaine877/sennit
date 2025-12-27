import type { FastifyInstance, FastifyRequest } from 'fastify'

type VirtualAccountBody = {
  userId: string
  currency: string
}

export async function virtualAccountRoutes(app: FastifyInstance) {
  app.get('/', async () => ({
    status: 'not-implemented'
  }))

  app.post(
    '/',
    async (request: FastifyRequest<{ Body: VirtualAccountBody }>) => ({
      status: 'not-implemented',
      userId: request.body.userId,
      currency: request.body.currency
    })
  )
}
