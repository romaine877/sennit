import type { FastifyInstance, FastifyRequest } from 'fastify'

type AuthRequestBody = {
  email?: string
  password?: string
  provider?: 'clerk' | 'unit'
}

export async function authRoutes(app: FastifyInstance) {
  app.post(
    '/login',
    async (request: FastifyRequest<{ Body: AuthRequestBody }>) => {
      // Placeholder: integrate authentication provider
      return {
        status: 'not-implemented',
        provider: request.body.provider ?? 'local'
      }
    }
  )

  app.post('/logout', async () => ({
    status: 'not-implemented'
  }))
}
