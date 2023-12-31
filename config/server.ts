import dotenv from 'dotenv'
import express, { Application } from 'express'
import cors from 'cors'
// @routes
import serverRoute from '@routes/server'
import mainRoute from '@routes'
// @middleware
import cookieParser from 'cookie-parser'
import { logger, errorHandler, notFound, setHeaders } from '@middleware'
// @db
import { connectDb } from '@config'
// @globals
import GLOBAL from '@config/global'
dotenv.config()

/**
 * @param app - express app initialize
 * @param express.json - body parser
 * @param express.urlenconded - url encoder
 * @param cookieParser - cookie parser
 */
class App {
  private app: Application

  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(cookieParser())
    this.app.use(setHeaders)
    this.app.use(cors())
    this.registerRoutes()
    this.app.use(errorHandler)
    this.app.use(notFound)
  }

  private registerRoutes(): void {
    serverRoute(this.app)
    mainRoute(this.app)
  }

  public async connectDb(): Promise<void> {
    try {
      await connectDb(true)
    } catch (error: any) {
      logger.error(error.message)
    }
  }

  public start(): void {
    try {
      this.app.listen(GLOBAL.port, () =>
        logger.server(GLOBAL.port, GLOBAL.apiRoot, true)
      )
    } catch (error: any) {
      logger.error(error.message)
      logger.server(GLOBAL.port, GLOBAL.apiRoot, false)
    }
  }
}

export default App
