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
  matchPassword(enteredPassword: string): Promise<boolean>
}

export default IUser
