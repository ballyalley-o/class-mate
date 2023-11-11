import mongoose, { Schema, Types } from 'mongoose'
import { ICohort } from '@interfaces/models'
import { roleValidate } from '@middleware'
import DefaultSchema from '@models/Default'

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

    module: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Module',
      },
    ],
  },
  {
    collection: COHORT,
    timestamps: true,
  }
)

CohortSchema.add(DefaultSchema)
CohortSchema.index({ name: 1 })

const Cohort = mongoose.model(COHORT, CohortSchema)
export default Cohort
