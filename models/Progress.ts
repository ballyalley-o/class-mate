import mongoose, { Schema, model } from 'mongoose'
import { IProgress } from '@interfaces/models'
import DefaultSchema from '@models/Default'

const TAG = 'Progress'

const ProgressSchema = new Schema<IProgress>(
  {
    exercise: {
      type: Schema.Types.ObjectId,
      ref: 'Exercise',
      required: true,
    },
    status: {
      type: Schema.Types.ObjectId,
      ref: 'Status',
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    collection: TAG,
    timestamps: true,
  }
)

ProgressSchema.add(DefaultSchema)
ProgressSchema.index({ exercise: 1 })

const Progress = mongoose.model(TAG, ProgressSchema)
export default Progress
