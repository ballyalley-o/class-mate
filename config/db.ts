import mongoose from 'mongoose'
import GLOBAL from '@config/global'
import { logger } from '@middleware'

const connectDb = async (isConnected: boolean) => {
  try {
    const dbConnect = await mongoose.connect(String(GLOBAL.db_uri))
    logger.db(GLOBAL.db_host, dbConnect.connection.name, isConnected)
  } catch (error: any) {
    logger.error(error.message)
    process.exit()
  }
}

export default connectDb
