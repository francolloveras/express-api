import { env } from 'bun'

import authMiddleware from '@/middleware/auth'
import helloWorldRouter from '@/routes/helloworld'

export const PORT = env.PORT || 3000

export const ENDPOINTS = {
  HELLO_WORLD: {
    path: '/hello-world',
    auth: authMiddleware,
    router: helloWorldRouter
  }
}
