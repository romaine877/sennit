import type { FastifyInstance, FastifyRequest } from 'fastify'

import { verifyClerkWebhook } from '../modules/webhooks/clerk/clerk.verify'

export async function clerkWebhookRoutes(app: FastifyInstance) {
  app.post(
    '/',
    async (req: FastifyRequest<{ Body: { event: string } }>) => {
      await verifyClerkWebhook(req)

      if (req.body.event === 'user.created') {
        // TODO: handle user created
      }
      if (req.body.event === 'user.updated') {
        // TODO: handle user updated
      }
      if (req.body.event === 'user.deleted') {
        // TODO: handle user deleted
      }

      return { success: true }
    }
  )
}
