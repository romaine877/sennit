import type { FastifyInstance, FastifyRequest } from 'fastify'

type WithdrawalBody = {
  walletId: string
  bankAccountId: string
  amount: number
}

export async function withdrawalRoutes(app: FastifyInstance) {
  app.get('/', async () => ({
    status: 'not-implemented'
  }))

  app.post(
    '/',
    async (request: FastifyRequest<{ Body: WithdrawalBody }>) => ({
      status: 'not-implemented',
      walletId: request.body.walletId,
      bankAccountId: request.body.bankAccountId,
      amount: request.body.amount
    })
  )
}
