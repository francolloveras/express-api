import { generateResponse } from '@/lib/utils'
import { Router, type NextFunction, type Request, type Response } from 'express'

const router = Router()

function GET(request: Request, response: Response, next: NextFunction) {
  try {
    return generateResponse({ response, status: 200, data: 'Hello World!' })
  } catch (error) {
    next(error)
  }
}

router.get('/', GET)

export default router
