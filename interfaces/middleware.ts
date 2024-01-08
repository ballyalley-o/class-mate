import { Request, Response, NextFunction } from 'express'

export interface IExpressController {
  req: Request
  res: Response
  next: NextFunction
}
