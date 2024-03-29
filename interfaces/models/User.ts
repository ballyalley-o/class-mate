import { Schema } from 'mongoose'

interface IUser {
  firstname: string
  lastname: string
  role: Schema.Types.ObjectId
  email: string
  password: string
  location: string
  username: string
  avatar: string
  cohort: Schema.Types.ObjectId
  progress: Schema.Types.ObjectId
  matchPassword(enteredPassword: string): Promise<boolean>
}

export default IUser
