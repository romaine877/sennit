
// src/index.ts
import { startServer } from './server'

async function bootstrap() {
  try {

    await startServer()
  } catch (err) {
    console.error('❌ Failed to start application', err)
    process.exit(1)
  }
}

bootstrap()


