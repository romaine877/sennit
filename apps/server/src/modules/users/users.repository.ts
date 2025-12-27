// modules/users/users.repository.ts
import { db, users, type NewUser, type User } from '@sennit/db'
import { eq } from 'drizzle-orm'

export const usersRepo = {
  findById(id: string) {
    return db.query.users.findFirst({
      where: eq(users.id, id)
    })
  },

  create(data: NewUser) {
    return db.insert(users).values(data).returning()
  },

  update(id: string, data: Partial<User>) {
    return db.update(users).set(data).where(eq(users.id, id)).returning()
  },

  delete(id: string) {
    return db.delete(users).where(eq(users.id, id)).returning()
  }
}