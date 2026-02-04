import { HttpError } from '@/errors/http-error'

export class ValidationError extends HttpError {
  issues: Record<string, string>

  constructor(message = 'Validation error', issues: Record<string, string>) {
    super(message, 400)
    this.name = 'ValidationError'
    this.issues = issues
  }
}
