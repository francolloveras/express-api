import { generateResponse } from '@/lib/utils'
import { type Request, type Response } from 'express'

export default function auth(request: Request, response: Response) {
  return generateResponse({ response, status: 404, message: 'The request was not found.' })
}
