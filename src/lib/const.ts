import { env } from 'bun'

import pingRoute from '@/routes/v1/ping'
import pingV2Route from '@/routes/v2/ping'

export const PORT = env.PORT || 3000
export const ROOT_PATH = env.ROOT_PATH || '/api'

export const ENDPOINTS = {
  PING: {
    path: '/ping',
    version: 'v1',
    auth: null,
    router: pingRoute
  },
  PING_V2: {
    path: '/ping',
    version: 'v2',
    auth: null,
    router: pingV2Route
  }
} as const
