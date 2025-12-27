import type { FastifyInstance, FastifyRequest } from 'fastify'

type CreateWalletBody = {
  userId: string
  currency: string
}

export async function walletRoutes(app: FastifyInstance) {
  app.get('/', async () => ({
    status: 'not-implemented'
  }))

  app.post(
    '/',
    async (request: FastifyRequest<{ Body: CreateWalletBody }>) => ({
      status: 'not-implemented',
      userId: request.body.userId,
      currency: request.body.currency
    })
  )
}
