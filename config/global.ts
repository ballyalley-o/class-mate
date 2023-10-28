import dotenv from 'dotenv'
dotenv.config()

const GLOBAL = {
  baseUrl: process.env.BASE_URL,
  apiRoot: process.env.API_ROOT,
  port: process.env.PORT,
  env: process.env.ENV,
}

export default GLOBAL
