import * as clientsRepository from '@/repositories/clients'
import { HttpError } from '@/errors/http-error'

export async function list(query: { page?: number; limit?: number }) {
  const page = Number(query.page || 1)
  const limit = Number(query.limit || 10)

  return clientsRepository.list({ page, limit })
}

export async function getById(id: number) {
  const client = await clientsRepository.getById(Number(id))

  if (!client) {
    throw new HttpError('Client not found', 404)
  }

  return client
}

export async function create(data: { name: string; email: string }) {
  // here you can validate business rules
  return clientsRepository.create(data)
}

export async function update(id: number, data: { name: string; email: string }) {
  await getById(id) // ensures exists
  return clientsRepository.update(Number(id), data)
}

export async function remove(id: number) {
  await getById(id)
  return clientsRepository.remove(Number(id))
}
