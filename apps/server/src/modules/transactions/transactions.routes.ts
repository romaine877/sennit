import type { FastifyInstance, FastifyRequest } from 'fastify'

type TransactionQuery = {
  walletId?: string
}

export async function transactionRoutes(app: FastifyInstance) {
  app.get(
    '/',
    async (request: FastifyRequest<{ Querystring: TransactionQuery }>) => ({
      status: 'not-implemented',
      walletId: request.query.walletId
    })
  )
}
