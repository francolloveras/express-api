import { generateResponse, log } from '@/lib/utils'
import { type NextFunction, type Request, type Response } from 'express'

export default function errorMiddleware(
  error: unknown,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  log.error('Unhandled error')

  return generateResponse({ response, status: 500, message: 'An internal error occurred.' })
}
