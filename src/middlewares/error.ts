/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpError } from '@/errors/http-error'
import { ValidationError } from '@/errors/validate-error'
import type { NextFunction, Request, Response } from 'express'

export function errorHandler(
  error: HttpError,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (error instanceof ValidationError) {
    return response.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message,
      issues: error.issues
    })
  }

  if (error instanceof HttpError) {
    return response
      .status(error.statusCode)
      .json({ status: error.statusCode, message: error.message })
  }

  console.error(error)
  return response.status(500).json({ status: 500, message: 'Internal server error' })
}
