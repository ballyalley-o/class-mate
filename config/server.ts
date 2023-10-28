import dotenv from 'dotenv'
import express, { Application } from 'express'
// @routes
import serverRoute from '@routes/server'
import mainRoute from '@routes'
// @middleware
import cookieParser = require('cookie-parser')
import { logger } from '@middleware'
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
    this.registerRoutes()
  }

  private registerRoutes(): void {
    serverRoute(this.app)
    mainRoute(this.app)
  }

  public start(): void {
    try {
      this.app.listen(GLOBAL.port, () => logger.server(GLOBAL.port, true))
    } catch (error: any) {
      logger.error(error.message)
      logger.server(GLOBAL.port, false)
    }
  }
}

export default App
