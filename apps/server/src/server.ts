// src/server.ts
import { buildApp } from './app'
import { env } from '@sennit/env/server'

export async function startServer() {
  const app = buildApp()

  await app.listen({
    port: env.PORT,
    host: '0.0.0.0'
  })

  console.log(`🚀 API running on port ${env.PORT}`)
}