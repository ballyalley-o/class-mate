import dotenv from 'dotenv'
import express, { Application, Request, Response } from 'express'
// @routes
import mainRoute from '@routes'
dotenv.config()

class App {
  private app: Application

  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.registerRoutes()
  }

  private registerRoutes(): void {
    mainRoute(this.app)
  }

  public start(port: number): void {}
}
