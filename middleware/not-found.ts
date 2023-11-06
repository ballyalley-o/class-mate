import 'colors'
import { Request, Response, NextFunction } from 'express'

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`[NOT FOUND] - ${req.originalUrl}`.bgRed)
  res.status(404)
  next(error)
}

export default notFound
