import mongoose, { Schema, model } from 'mongoose'
import { IProgress } from '@interfaces/models'
import DefaultSchema from '@models/Default'
import Status from '@models/Status'

const TAG = 'Progress'

let unacceptedStatusId

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
      default: unacceptedStatusId,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    collection: TAG,
    timestamps: true,
  }
)

async function getUnacceptedStatusId() {
  const unacceptedStatus = await Status.findOne({ type: 'unaccepted' })
  if (unacceptedStatus) {
    unacceptedStatusId = unacceptedStatus._id
  }
}

getUnacceptedStatusId()

ProgressSchema.add(DefaultSchema)
ProgressSchema.index({ exercise: 1 })

const Progress = mongoose.model(TAG, ProgressSchema)
export default Progress
