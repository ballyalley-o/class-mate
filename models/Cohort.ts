import mongoose, { Schema, model, connect } from 'mongoose'
import bcrypt from 'bcryptjs'

interface ICohort {
  name: string
  students: Schema.Types.ObjectId
  trainers: Schema.Types.ObjectId
}

const CohortSchema = new Schema<ICohort>(
  {
    name: {
      type: String,
      required: true,
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    ],
    trainers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    ],
  },
  {
    collection: 'Cohort',
    timestamps: true,
  }
)

const Cohort = mongoose.model('Cohort', CohortSchema)
export default Cohort
