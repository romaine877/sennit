import type { FastifyInstance, FastifyRequest } from 'fastify'

type TransferRequestBody = {
  fromWalletId: string
  toWalletId: string
  amount: number
  currency: string
}

export async function transferRoutes(app: FastifyInstance) {
  app.get('/', async () => ({
    status: 'not-implemented'
  }))

  app.post(
    '/',
    async (request: FastifyRequest<{ Body: TransferRequestBody }>) => ({
      status: 'not-implemented',
      amount: request.body.amount,
      currency: request.body.currency
    })
  )
}
