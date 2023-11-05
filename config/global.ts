import dotenv from 'dotenv'
dotenv.config()

const GLOBAL = {
  baseUrl: process.env.BASE_URL,
  apiRoot: process.env.API_ROOT,
  port: process.env.PORT,
  env: process.env.ENV,
  // jwt
  jwt_secret: process.env.JWT_SECRET,
  jwt_exp: process.env.JWT_EXP,
  // @db
  db_uri: process.env.DB_URI,
  db_host: process.env.DB_HOST,
  db_name: (db: any) => db.connection.name,
  // @def
  cookie: 'cookie',
}

export default GLOBAL
