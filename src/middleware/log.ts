import { type NextFunction, type Request, type Response } from 'express'

import { log } from '@/lib/utils'

export default function logMiddleware(request: Request, response: Response, next: NextFunction) {
  const start = Date.now()
  const { method, url } = request

  response.on('finish', () => {
    const duration = Date.now() - start

    log.info(`Incoming ${method} request on ${url}`, {
      status: response.statusCode,
      duration: `${duration}ms`
    })
  })

  next()
}
