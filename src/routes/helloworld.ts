import { Router, type Request, type Response } from 'express'

const router = Router()

function GET(request: Request, response: Response) {
  response.json({
    message: 'Hello World!'
  })
}

router.get('/', GET)

export default router
