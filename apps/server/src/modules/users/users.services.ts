// modules/users/users.service.ts
import type { NewUser, User } from '@sennit/db'
import { usersRepo } from './users.repository'

export const userService = {
  async getById(id: string) {
    const user = await usersRepo.findById(id)
    if (!user) throw new Error('User not found')
    return user
  },

  async create(data: NewUser) {
    const result = await usersRepo.create(data)
    if (!result) throw new Error('Failed to create user')
    return result[0]
  },

  async update(id: string, data: Partial<User>) {
    return usersRepo.update(id, data)
  },

  async delete(id: string) {
    return usersRepo.delete(id)
  }
}