import 'colors'

declare module 'colors' {
  interface String {
    yellow: string
  }
}

interface Logger {
  (...message: any[]): void
}

const logger: Logger = (message) => {
  console.log(message.join(' ').yellow)
}

export default logger
