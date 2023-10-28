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
  custom: (color: any, ...message: string[]) => console.log(...message[color]),

  // @type - log :Default
  log: (...message: string[]) => console.log(...message.join(' ').yellow),

  // @type - info
  info: (...message: string[]) => console.log(...message.join(' ').bgCyan),

  // @type - warn
  warn: (...message: string[]) => console.warn(...message.join(' ').yellow),

  // @type - error
  error: (...message: string[]) =>
    console.log(new Error(message.join(' ').bgRed)),

  // @type - debug
  debug: (...message: string[]) => console.debug(...message.join(' ').red),

  server: (port: any, isConnected: boolean) => {
    console.log('SERVER PORT: '.bgYellow, port.yellow)
    if (isConnected) {
      console.log('SERVER STATUS: '.bgYellow, 'CONNECTED'.yellow)
    } else {
      console.log('SERVER STATUS: '.bgRed, 'NOT CONNECTED'.red)
    }
  },

  // @preset - database
  db: (db: any, isConnected: boolean) => {
    console.log('DB HOST: '.bgGreen, db.connection.host.yellow)
    console.log('DB NAME: '.bgGreen, db.connection.name.yellow)
    if (isConnected) {
      console.log('DB STATUS: '.bgGreen, 'CONNECTED'.green)
    } else {
      console.log('DB STATUS: '.bgRed, 'NO CONNECTION'.red)
    }
  },
}

export default logger
