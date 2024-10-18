import express from 'express'
import { PORT, ENDPOINTS } from '@/lib/const'

const app = express()

app.disable('x-powered-by')

Object.values(ENDPOINTS).forEach(({ path, auth, router }) => {
  app.use(path, auth, router)
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${PORT}!`)
})
