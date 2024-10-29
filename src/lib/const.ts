import { env } from 'bun'

import helloWorldRouter from '@/routes/helloworld'

export const PORT = env.PORT || (3000 as const)

export const ENDPOINTS = {
  HELLO_WORLD: {
    path: '/hello-world',
    auth: null,
    router: helloWorldRouter
  }
} as const
