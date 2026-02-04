import prisma from '@/config/prisma'

export async function list({ page, limit }: { page: number; limit: number }) {
  const skip = (page - 1) * limit

  const [items, total] = await Promise.all([
    prisma.client.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' }
    }),
    prisma.client.count()
  ])

  return {
    items,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  }
}

export async function getById(id: number) {
  return prisma.client.findUnique({ where: { id } })
}

export async function create(data: { name: string; email: string }) {
  return prisma.client.create({ data })
}

export async function update(id: number, data: { name: string; email: string }) {
  return prisma.client.update({
    where: { id },
    data
  })
}

export async function remove(id: number) {
  return prisma.client.delete({ where: { id } })
}
