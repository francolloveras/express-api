import { generateResponse } from '@/lib/utils'
import { Router, type Request, type Response } from 'express'

const router = Router()

function GET(request: Request, response: Response) {
  return generateResponse({ response, status: 200, data: 'Hello World!' })
}

router.get('/', GET)

export default router
