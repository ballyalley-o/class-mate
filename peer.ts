import 'colors'
import dotenv from 'dotenv'
import App from '@config/server'
// @datas
import { users, roles, cohort } from '@migration'
// @models
import { User, Role } from '@models'
import { logger } from '@middleware'
dotenv.config()

const app = new App()
app.connectDb()

const peerData = async () => {
  try {
    await Role.deleteMany()
    await User.deleteMany()

    const createdRoles = await Role.insertMany(roles)
    const createdUsers = await User.insertMany(users)

    logger.info('DATA migrated')
    process.exit()
  } catch (error: any) {
    logger.error(error.message)
    throw new Error('FAILED in migration')
  }
}

const destroyData = async () => {
  try {
    await Role.deleteMany()
    await User.deleteMany()

    logger.custom('bgRed', 'DATA DESTROYED')
    process.exit(1)
  } catch (error: any) {
    logger.error(error.message)
    throw new Error('FAILED in DESRUCTION of DATA')
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else if (process.argv[2] === '-i') {
  peerData()
}
