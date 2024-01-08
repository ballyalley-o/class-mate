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
    201: (data: any) => ` ${data} is Created`,
    updated: (data: any) => `Successful Request: ${data} was UPDATED`,
    deleted: (data: any) => `Successful Request: ${data} was DELETED`,
    signIn: (data: any) => `${data} Signed In`,
    signOut: (data: any) => `${data} Signed Out`,
  },
  error: {
    500: 'Internal Server Error: An unexpected server error occurred',
    404: 'Not Found: The requested resource could not be found',
    403: 'Forbidden: Access to the requested resource is forbidden',
    401: 'Unauthorized: Authentication is required or credentials are invalid',
    400: (data: any) => `400: ${data} already exists`,
    invalid: 'Bad Request: The request is malformed or invalid',
    notFound: (data: any) => `${data} is not found`,
    invalidRole: async (role: any) =>
      `Only datas enrolled as ${role} can be added to the ${role}s list.`,
    studentWithCohort: (cohort: any) =>
      `The student already belongs to a cohort. ${cohort}`,
    failedCreate: (data: any) => `Failed to create ${data}`,
    failedFetch: (data: any) => `Failed to fetch the ${data}`,
    failedUpdate: (data: any) => `Failed to update the ${data}`,
    failedDelete: (data: any) => `Failed to delete the ${data}`,
  },
}

export default RESPONSE
