import { Request, Response, NextFunction } from 'express'
import { RESPONSE } from '@constants'
import { GLOBAL } from '@config'

class ExtError extends Error {
  kind: string
  errors: any[]

  constructor(message: string, kind: string, errors: any[]) {
    super(message)
    this.kind = kind
    this.errors = errors
    this.name = 'ExtError'
  }
}

/**
 * Error Handler for global
 * @param err
 * @param req
 * @param res
 * @param next
 */
const errorHandler = (
  err: ExtError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode
  let message = err.message
  const PROD_ENV = 'production'

  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    statusCode = 404
    message = RESPONSE.error[404]
  }

  if (err.errors) {
    const errors = Object.values(err.errors).map((err: any) => err.message)
    statusCode = 400
    message: errors
  }

  res.status(statusCode).json({
    message,
    stack: GLOBAL.env === PROD_ENV ? null : err.stack,
  })
}

export default errorHandler
