import type { FastifyInstance, FastifyRequest } from 'fastify'

type BankAccountBody = {
  userId: string
  bankName?: string
  accountNumber?: string
}

export async function bankAccountRoutes(app: FastifyInstance) {
  app.get('/', async () => ({
    status: 'not-implemented'
  }))

  app.post(
    '/',
    async (request: FastifyRequest<{ Body: BankAccountBody }>) => ({
      status: 'not-implemented',
      userId: request.body.userId,
      bankName: request.body.bankName
    })
  )
}
