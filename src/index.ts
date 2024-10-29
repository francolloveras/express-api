import express from 'express'
import { PORT, ENDPOINTS } from '@/lib/const'
import logMiddleware from '@/middleware/log'
import errorMiddleware from '@/middleware/error'
import notFoundMiddleware from '@/middleware/not-found'
import { log } from '@/lib/utils'

const app = express()

app.disable('x-powered-by')
app.use(logMiddleware)

Object.values(ENDPOINTS).forEach(({ path, auth, router }) => {
  if (auth) {
    app.use(path, auth, router)
  } else {
    app.use(path, router)
  }
})

app.use(notFoundMiddleware)
app.use(errorMiddleware)

app.listen(PORT, () => {
  log.info(`Server started in http://localhost:${PORT}.`)
})
