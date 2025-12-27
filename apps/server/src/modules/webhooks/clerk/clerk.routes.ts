import type { FastifyInstance, FastifyRequest } from "fastify"
import { verifyClerkWebhook } from "./clerk.verify"

export async function clerkWebhookRoutes(app: FastifyInstance) {
  app.post('/', async (req: FastifyRequest<{ Body: { event: string } }>) => {
    console.log('clerk webhook', req.body)

    await verifyClerkWebhook(req)

    if (req.body.event === 'user.created') {
      console.log('user created')
    }
    if (req.body.event === 'user.updated') {
      console.log('user updated')
    }
    if (req.body.event === 'user.deleted') {
      console.log('user deleted')
    }

    console.log('clerk webhook verified')

    return { success: true }
  })
}