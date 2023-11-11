import mongoose, { Schema, model, connect, Types } from 'mongoose'
import { roleValidate } from '@middleware'

interface ICohort {
  name: string
  students: Schema.Types.ObjectId[]
  trainers: Schema.Types.ObjectId[]
}

type UserId = Types.ObjectId

const COHORT = 'Cohort'
const STUDENT = 'Student'
const TRAINER = 'Trainer'
const USER = 'User'

const CohortSchema = new Schema<ICohort>(
  {
    name: {
      type: String,
      required: true,
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: USER,
        validate: {
          validator: async function (userId: UserId) {
            return roleValidate(userId, STUDENT)
          },
          message: 'Invalid Role',
        },
      },
    ],

    trainers: [
      {
        type: Schema.Types.ObjectId,
        ref: USER,
        validate: {
          validator: async function (userId: UserId) {
            return roleValidate(userId, TRAINER)
          },
          message: 'Invalid Role',
        },
      },
    ],
  },
  {
    collection: COHORT,
    timestamps: true,
  }
)

const Cohort = mongoose.model(COHORT, CohortSchema)
export default Cohort
