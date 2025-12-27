import type { FastifyInstance, FastifyRequest } from 'fastify'

type StatementQuery = {
  walletId?: string
  period?: string
}

export async function statementRoutes(app: FastifyInstance) {
  app.get(
    '/',
    async (request: FastifyRequest<{ Querystring: StatementQuery }>) => ({
      status: 'not-implemented',
      walletId: request.query.walletId,
      period: request.query.period
    })
  )
}
