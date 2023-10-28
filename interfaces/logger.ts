interface Logger {
  /**
   * Custom log
   * @param message
   * @param color
   */
  custom(color: any, ...message: string[]): void

  /**
   * log message to console
   * @param message - message to log : default
   */
  log(...message: string[]): void

  /**
   * log message in type info
   * @param message - message to log : type info
   */
  info(...message: string[]): void

  /**
   * log message in type warn
   * @param message - message to log : type warn
   */
  warn(...message: string[]): void

  /**
   * log message in type error
   * @param message - message to log : type error
   */
  error(...message: string[]): void

  /**
   * log message in type debug
   * @param message - message to log : type debug
   */
  debug(...message: string[]): void

  /**
   * Preset log type for connection status update in the console
   * @param db - connection call
   * @param isConnected - send the status of the connection
   */
  db(db: any, isConnected: boolean): void
}

export default Logger
