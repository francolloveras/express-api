import { type Response } from 'express'

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
    message,
    data
  })
}
