import { type Response } from 'express'

import { STATUS_MESSAGES } from '@/lib/const'

export const generateResponse = ({
  response,
  status,
  message = null,
  data = null
}: {
  response: Response
  status: number
  message?: string | null
  data?: unknown | null
}) => {
  response.status(status).json({
    status,
    message: message ?? STATUS_MESSAGES[status as keyof typeof STATUS_MESSAGES],
    data
  })
}

const createLog = ({ level, message, info }: { level: string; message: string; info?: object }) => {
  const timestamp = new Date().toISOString()

  // eslint-disable-next-line no-console
  return console.log(`[${timestamp}] [${level}] ${message}`, info ?? '')
}

export const log = {
  info: (message: string, info?: object) => createLog({ level: 'INFO', message, info }),
  warn: (message: string, info?: object) => createLog({ level: 'WARN', message, info }),
  error: (message: string, info?: object) => createLog({ level: 'ERROR', message, info }),
  done: (message: string, info?: object) => createLog({ level: 'DONE', message, info })
}
