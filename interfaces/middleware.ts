import { Request, Response, NextFunction } from 'express'

export interface expressController {
  req: Request
  res: Response
  next: NextFunction
}
