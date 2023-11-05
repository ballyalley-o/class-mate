import { Schema } from 'mongoose'

interface ITrainer {
  firstName: string
  lastName: string
  userName: string
  info: string
  location: string
  email: string
  password: string
  cohort: Schema.Types.ObjectId
}

export default ITrainer
