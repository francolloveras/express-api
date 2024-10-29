import express from 'express'
import { PORT, ENDPOINTS } from '@/lib/const'
import logMiddleware from '@/middleware/log'
import { log } from '@/lib/utils'

const app = express()

app.disable('x-powered-by')
app.use(logMiddleware)

Object.values(ENDPOINTS).forEach(({ path, auth, router }) => {
  app.use(path, auth, router)
})

app.listen(PORT, () => {
  log.info(`Server started in http://localhost:${PORT}.`)
})
