// src/app.ts
import Fastify from 'fastify'
import { env } from '@sennit/env/server'

// Plugins
// import dbPlugin from './plugins/db'
// import authPlugin from './plugins/auth'
// import telemetryPlugin from './plugins/telemetry'

// Routes
import userRoutes from './modules/users/users.routes'
import { clerkWebhookRoutes } from './modules/webhooks/clerk/clerk.routes'
import { webhookPlugin } from './plugins/webhooks/clerk/clerk.plugin'
//import walletRoutes from './modules/wallets/wallets.routes'

export function buildApp() {
  const app = Fastify({
    logger: {
      level: env.NODE_ENV === 'development' ? 'debug' : 'info'
    }
  })


app.register(
  async (webhookScope) => {
    await webhookScope.register(webhookPlugin)
    await webhookScope.register(clerkWebhookRoutes)
  },
  { prefix: '/webhooks/clerk' }
)

  // ---- Routes ----
  app.register(userRoutes, { prefix: '/users' })
  //app.register(walletRoutes, { prefix: '/wallets' })

  // ---- Health ----
  app.get('/health', async () => ({
    status: 'ok'
  }))

  return app
}