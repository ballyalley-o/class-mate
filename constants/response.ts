import { Request, Response } from 'express'
import { GLOBAL } from '@config'

const RESPONSE = {
  server: (req: Request, res: Response) => {
    const response = {
      name: 'ClassMate',
      status: 'Running',
      API: 'classmate-server',
      url: GLOBAL.baseUrl,
      port: GLOBAL.port,
      environment: GLOBAL.env,
    }
    res.send(response)
  },
}

export default RESPONSE
