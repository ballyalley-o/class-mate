import mongoose, { Schema, model, connect, Types } from 'mongoose'
import { RESPONSE } from '@constants'
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
          message: RESPONSE.error.invalidRole(STUDENT),
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
          message: RESPONSE.error.invalidRole(TRAINER),
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
