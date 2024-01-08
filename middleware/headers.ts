import { Request, Response, NextFunction } from 'express'
import { IExpressController } from '@interfaces/middleware'

const setHeaders = ({ req, res, next }: IExpressController) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Origin, X-Requested-With, Accept'
  )
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', 'same-origin')
  res.setHeader('Access-Control-Max-Age', 86400)

  next()
}

export default setHeaders
