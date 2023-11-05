import mongoose, { Schema, model, connect } from 'mongoose'
import bcrypt from 'bcryptjs'
import { ITrainer } from '@interfaces/models'

const TrainerSchema = new Schema<ITrainer>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    userName: {
      type: String,
      required: true,
    },
    info: {
      type: String,
    },
    location: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    cohort: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Cohort',
      },
    ],
  },
  { timestamps: true }
)

TrainerSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

TrainerSchema.methods.matchPassword = async function (enteredPassword: any) {
  return await bcrypt.compare(enteredPassword, this.password)
}

const Trainer = mongoose.model('Trainer', TrainerSchema)
export default Trainer
