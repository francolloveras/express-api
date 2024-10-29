import { env } from 'bun'

import pingRoute from '@/routes/ping'

export const PORT = env.PORT || (3000 as const)

export const ENDPOINTS = {
  PING: {
    path: '/ping',
    auth: null,
    router: pingRoute
  }
} as const
