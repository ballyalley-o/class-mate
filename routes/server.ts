import path from 'path'
import express, { Request, Response } from 'express'
// @constants
import { RESPONSE } from '@constants'
import { GLOBAL, __dirname } from '@config'
import { PATH, PARAM } from '@routing/index'

const PROD_ENV = 'production'

const serverRoute = (app: any) => {
  if (GLOBAL.env === PROD_ENV) {
    app.use(express.static(path.join(__dirname, PARAM.buildLoc)))
    app.get('*', (req: Request, res: Response) => res.sendFile(PARAM.buildView))
  } else {
    app.get(PATH.root, RESPONSE.server)
  }
}

export default serverRoute
