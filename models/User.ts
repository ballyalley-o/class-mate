import mongoose, { Schema, model, connect } from 'mongoose'
import bcrypt from 'bcryptjs'
import { IUser } from '@interfaces/models'

const UserSchema = new Schema<IUser>(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
    role: {
      type: Schema.Types.ObjectId,
      // required: true,
      ref: 'Role',
      // default: 'Student',
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
)

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model('User', UserSchema)

export default User
