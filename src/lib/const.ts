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

export const STATUS_MESSAGES = {
  200: 'The request has processed successfully.',
  201: 'The request has processed successfully and a new resource has created.',
  400: 'The request has malformed.',
  401: 'The request has unauthorized.',
  403: 'The request has forbidden.',
  404: 'The requested resource has not found.',
  500: 'An error occurred while processing the request.'
} as const
