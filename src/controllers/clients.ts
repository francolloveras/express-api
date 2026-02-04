import * as clientsService from '@/services/clients'
import type { NextFunction, Request, Response } from 'express'

export async function list(request: Request, response: Response, next: NextFunction) {
  try {
    const result = await clientsService.list(request.query)
    response.json(result)
  } catch (err) {
    next(err)
  }
}

export async function getById(request: Request, response: Response, next: NextFunction) {
  try {
    const client = await clientsService.getById(Number(request.params.id))
    response.json(client)
  } catch (err) {
    next(err)
  }
}

export async function create(request: Request, response: Response, next: NextFunction) {
  try {
    const client = await clientsService.create(request.body)
    response.status(201).json(client)
  } catch (err) {
    next(err)
  }
}

export async function update(request: Request, response: Response, next: NextFunction) {
  try {
    const client = await clientsService.update(Number(request.params.id), request.body)
    response.json(client)
  } catch (err) {
    next(err)
  }
}

export async function remove(request: Request, response: Response, next: NextFunction) {
  try {
    await clientsService.remove(Number(request.params.id))
    response.status(204).send()
  } catch (err) {
    next(err)
  }
}
