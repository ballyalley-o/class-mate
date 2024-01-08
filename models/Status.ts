import { IStatus } from '@interfaces/models'
import mongoose, { Schema } from 'mongoose'
import DefaultSchema from '@models/Default'

const TAG = 'Status'

const StatusSchema = new Schema<IStatus>(
  {
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    collection: TAG,
    timestamps: true,
  }
)

StatusSchema.add(DefaultSchema)
StatusSchema.index({ status: 1 })

const Status = mongoose.model(TAG, StatusSchema)
export default Status
