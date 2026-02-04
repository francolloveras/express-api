import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import routes from '@/routes/index'
import { errorHandler } from '@/middlewares/error'
import { notFoundHandler } from '@/middlewares/not-found'

export function createApp() {
  const app = express()

  app.use(helmet())
  app.use(cors())
  app.use(express.json())

  app.get('/health', (req, res) => res.json({ ok: true }))

  app.use('/api', routes)

  app.use(notFoundHandler)
  app.use(errorHandler)

  return app
}
