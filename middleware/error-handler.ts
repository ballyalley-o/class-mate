import { Request, Response, NextFunction } from 'express'
import { RESPONSE } from '@constants'
import { GLOBAL } from '@config'

class ExtError extends Error {
  kind: string

  constructor(message: string, kind: string) {
    super(message)
    this.kind = kind
    this.name = 'ExtError'
  }
}

/**
 *
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

  res.status(statusCode).json({
    message,
    stack: GLOBAL.env === PROD_ENV ? null : err.stack,
  })
}

export default errorHandler
