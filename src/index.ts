import express from 'express'
import { PORT, ROOT_PATH, ENDPOINTS } from '@/lib/const'
import logMiddleware from '@/middleware/log'
import errorMiddleware from '@/middleware/error'
import notFoundMiddleware from '@/middleware/not-found'
import { log } from '@/lib/utils'

const app = express()

app.disable('x-powered-by')
app.use(logMiddleware)

Object.values(ENDPOINTS).forEach(({ path, version, auth, router }) => {
  const parsedPath = `${ROOT_PATH}/${version}${path}`

  if (auth) {
    app.use(parsedPath, auth, router)
  } else {
    app.use(parsedPath, router)
  }
})

app.use(notFoundMiddleware)
app.use(errorMiddleware)

app.listen(PORT, () => {
  log.info(`Server started in http://localhost:${PORT}${ROOT_PATH}.`)
})
