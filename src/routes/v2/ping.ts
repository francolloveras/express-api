import { type NextFunction, type Request, type Response, Router } from 'express'

import { generateResponse } from '@/lib/utils'

const router = Router()

function GET(request: Request, response: Response, next: NextFunction) {
  try {
    return generateResponse({ response, status: 200, data: 'Pong from v2!' })
  } catch (error) {
    next(error)
  }
}

router.get('/', GET)

export default router
