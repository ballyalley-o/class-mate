import mongoose, { Schema } from 'mongoose'
import { IDefault } from '@interfaces/models'

const DefaultSchema = new Schema<IDefault>({
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  updatedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isArchived: {
    type: Boolean,
    default: false,
  },
})

// const Default = mongoose.model('Default', DefaultSchema)
export default DefaultSchema
