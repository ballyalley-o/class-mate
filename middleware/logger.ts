import 'colors'
import { Logger } from '@interfaces'

declare module 'colors' {
  interface String {
    yellow: string
    bgCyan: string
    bgRed: string
    red: string
  }
}

const logger: Logger = {
  // @type - custom
  custom: (color: any, ...message: string[]) =>
    console.log(message.join('')[color]),

  // @type - log :Default
  log: (...message: string[]) => console.log(message.join(' ').yellow),

  // @type - info
  info: (...message: string[]) => console.log(message.join(' ').bgCyan),

  // @type - warn
  warn: (...message: string[]) => console.warn(message.join(' ').bgYellow),

  // @type - table -for array and obj
  tbl: (...message: any[]) => console.table(message),

  // @type - error
  error: (...message: string[]) =>
    console.log(new Error(message.join(' ').bgRed)),

  // @type - debug
  debug: (...message: string[]) => console.debug(message.join(' ').red),

  server: (port: any, apiRoot: any, isConnected: boolean) => {
    console.log('SERVER PORT: '.bgYellow, port.yellow)
    console.log('SERVER API: '.bgYellow, apiRoot.yellow)
    if (isConnected) {
      console.log('SERVER STATUS: '.bgYellow, 'CONNECTED'.yellow)
    } else {
      console.log('SERVER STATUS: '.bgRed, 'NOT CONNECTED'.red)
    }
  },

  // @preset - database
  db: (host: any, dbName: any, isConnected: boolean) => {
    const DB_LOG = [
      {
        HOST: host,
        DATABASE: dbName,
        STATUS: isConnected ? 'CONNECTED' : 'NO CONNECTION',
      },
    ]
    console.table(DB_LOG)
  },
}

export default logger
