import mongoose, { Schema } from 'mongoose'
import DefaultSchema from '@models/Default'
import { IExercise } from '@interfaces/models'

const TAG = 'Exercise'

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
      type: String,
    },
    repo: {
      type: String,
    },
    instructions: {
      type: String,
    },
    gist: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    collation: { locale: 'en', strength: 2 },
    collection: TAG,
    timestamps: true,
  }
)

ExerciseSchema.add(DefaultSchema)
ExerciseSchema.index({ module: 1 })
ExerciseSchema.index({ title: 1 })

const Exercise = mongoose.model(TAG, ExerciseSchema)
export default Exercise
