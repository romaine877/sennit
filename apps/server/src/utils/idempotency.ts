import { randomUUID } from 'crypto'

export function idempotencyKey() {
  return randomUUID()
}
