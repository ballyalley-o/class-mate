import mongoose, { Schema } from 'mongoose'
import DefaultSchema from '@models/Default'
import { IExercise } from '@interfaces/models'

const ExerciseSchema = new Schema<IExercise>(
  {
    module: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    page: {
      type: Number,
    },
    repo: {
      type: String,
    },
    cohort: {
      type: Schema.Types.ObjectId,
      ref: 'Cohort',
      // required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    gist: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    collection: 'Exercise',
    timestamps: true,
  }
)

ExerciseSchema.add(DefaultSchema)
ExerciseSchema.index({ module: 1 })
ExerciseSchema.index({ title: 1 })

const Exercise = mongoose.model('Exercise', ExerciseSchema)
export default Exercise
