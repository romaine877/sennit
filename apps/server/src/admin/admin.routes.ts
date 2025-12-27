import type { FastifyInstance } from 'fastify'

import { adminController } from './admin.controller'

export default async function adminRoutes(app: FastifyInstance) {
  app.get('/users', async () => adminController.listUsers())
  app.get('/kyc', async () => adminController.listKycReviews())
  app.get('/transactions', async () => adminController.listTransactions())
  app.get('/withdrawals', async () => adminController.listWithdrawals())
  app.get('/webhooks', async () => adminController.listWebhookEvents())
}
