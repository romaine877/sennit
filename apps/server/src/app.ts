// src/app.ts
import Fastify from 'fastify'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'

import { env } from './env'
import { authRoutes } from './modules/auth/auth.routes'
import { bankAccountRoutes } from './modules/bank-accounts/bank-accounts.routes'
import healthRoutes from './modules/health/health.routes'
import { kycRoutes } from './modules/kyc/kyc.routes'
import { statementRoutes } from './modules/statements/statements.routes'
import { transactionRoutes } from './modules/transactions/transactions.routes'
import { transferRoutes } from './modules/transfers/transfers.routes'
import userRoutes from './modules/users/users.routes'
import { virtualAccountRoutes } from './modules/virtual-accounts/virtual-accounts.routes'
import { walletRoutes } from './modules/wallets/wallets.routes'
import { withdrawalRoutes } from './modules/withdrawals/withdrawals.routes'
import adminRoutes from './admin/admin.routes'
import { webhookRawBodyPlugin } from './plugins/clerk'
import { clerkWebhookRoutes } from './webhooks/clerk.webhook'
import { kycWebhookRoutes } from './webhooks/kyc.webhook'
import { unitWebhookRoutes } from './webhooks/unit.webhook'

export function buildApp() {
  const app = Fastify({
    logger: {
      level: env.NODE_ENV === 'development' ? 'debug' : 'info'
    }
  })

  app.register(swagger, {
    openapi: {
      info: {
        title: 'Sennit API',
        description: 'API documentation for Sennit services',
        version: '1.0.0'
      }
    }
  })

  app.register(swaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false
    },
    staticCSP: true
  })

  app.register(async (v1) => {
    v1.register(healthRoutes, { prefix: '/health' })
    v1.register(authRoutes, { prefix: '/auth' })
    v1.register(userRoutes, { prefix: '/users' })
    v1.register(kycRoutes, { prefix: '/kyc' })
    v1.register(walletRoutes, { prefix: '/wallets' })
    v1.register(virtualAccountRoutes, { prefix: '/virtual-accounts' })
    v1.register(transferRoutes, { prefix: '/transfers' })
    v1.register(bankAccountRoutes, { prefix: '/bank-accounts' })
    v1.register(withdrawalRoutes, { prefix: '/withdrawals' })
    v1.register(transactionRoutes, { prefix: '/transactions' })
    v1.register(statementRoutes, { prefix: '/statements' })
  }, { prefix: '/v1' })

  app.register(async (webhookScope) => {
    await webhookScope.register(webhookRawBodyPlugin)
    await webhookScope.register(clerkWebhookRoutes, { prefix: '/clerk' })
    await webhookScope.register(unitWebhookRoutes, { prefix: '/unit' })
    await webhookScope.register(kycWebhookRoutes, { prefix: '/kyc' })
  }, { prefix: '/webhooks' })

  app.register(adminRoutes, { prefix: '/admin' })

  return app
}
