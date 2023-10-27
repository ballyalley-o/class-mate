import express, { Application, Request, Response } from 'express'

class App {
  private app: Application

  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.registerRoutes()
  }

  private registerRoutes() {
    mainRoute(this.app)
  }

  public start() {}
}
