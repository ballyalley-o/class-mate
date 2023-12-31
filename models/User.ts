import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcryptjs'
import { SNACKS } from '@constants'
import { IUser } from '@interfaces/models'
import DefaultSchema from '@models/Default'

const TAG = 'User'

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
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email',
      ],
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    location: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: '',
    },
    cohort: {
      type: Schema.Types.ObjectId,
      ref: 'Cohort',
      // required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    collection: TAG,
    timestamps: true,
  }
)

UserSchema.add(DefaultSchema)

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

UserSchema.index({ username: 1 })
UserSchema.index({ firstname: 1 })

const User = mongoose.model(TAG, UserSchema)

export default User
