// modules/users/users.controller.ts
import type { FastifyReply, FastifyRequest } from 'fastify'
import { userService } from './users.services'

export async function getUser(
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const user = await userService.getById(req.params.id)
  return reply.send(user)
}

export async function createUser(
  req: FastifyRequest<{ Body: { externalId: string, firstName: string, lastName: string, email: string } }>,
  reply: FastifyReply
) {
  const user = await userService.create({
    externalId: req.body.externalId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  })
  return reply.code(201).send(user)
}

export async function updateUser(
  req: FastifyRequest<{ Params: { id: string }, Body: { email: string } }>,
  reply: FastifyReply
) {
  const user = await userService.update(req.params.id, req.body)
  return reply.send(user)
}

export async function deleteUser(
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  await userService.delete(req.params.id)
  return reply.code(204).send()
}