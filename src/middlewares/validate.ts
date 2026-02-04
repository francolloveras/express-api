import { ValidationError } from '@/errors/validate-error'
import type { NextFunction, Request, Response } from 'express'
import { ZodError, type ZodObject } from 'zod'

type ValidateTarget = 'body' | 'params' | 'query'

export function validateHandler(schema: ZodObject, target: ValidateTarget) {
  return (request: Request, response: Response, next: NextFunction) => {
    try {
      const parsed = schema.parse(request[target])
      request[target] = parsed
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        const issues: Record<string, string> = {}

        for (const issue of error.issues) {
          issues[issue.path.join('.')] = issue.message
        }

        throw new ValidationError(`Invalid request ${target}`, issues)
      }
      next(error)
    }
  }
}
