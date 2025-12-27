// webhooks/clerk/clerk.verify.ts
import { Webhook } from 'svix'
import type { FastifyRequest } from 'fastify'
import { env } from '@sennit/env/server'

export async function verifyClerkWebhook(req: FastifyRequest) {
  const payload = req.body as Buffer

  const headers = {
    'svix-id': req.headers['svix-id'],
    'svix-timestamp': req.headers['svix-timestamp'],
    'svix-signature': req.headers['svix-signature']
  }

  if (!headers['svix-id']) {
    throw new Error('Missing Clerk webhook headers')
  }

  const wh = new Webhook(env.CLERK_WEBHOOK_SECRET)

  // Throws if invalid
  wh.verify(payload.toString(), headers as any)
}