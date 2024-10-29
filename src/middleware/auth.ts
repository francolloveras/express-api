import { env } from 'bun'
import { type NextFunction, type Request, type Response } from 'express'

import { generateResponse } from '@/lib/utils'

export default function auth(request: Request, response: Response, next: NextFunction) {
  const headersKey = request.headers.authorization
  const queryKey = request.query.key?.toString()
  const bodyKey = request.body?.key as string | undefined

  const key = headersKey ?? queryKey ?? bodyKey

  if (!key || env.API_KEY !== key) {
    return generateResponse({ response, status: 401, message: 'Unauthorized' })
  }

  next()
}
