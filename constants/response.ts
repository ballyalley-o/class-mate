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
  success: {
    200: 'OK: Successful Request',
  },
  error: {
    500: 'Internal Server Error: An unexpected server error occurred.',
    404: 'Not Found: The requested resource could not be found.',
    403: 'Forbidden: Access to the requested resource is forbidden',
    401: 'Unauthorized: Authentication is required or credentials are invalid',
    400: 'Bad Request: The request is malformed or invalid',
  },
}

export default RESPONSE
