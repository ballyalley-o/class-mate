import mongoose, { Schema, model, connect } from 'mongoose'
import { IRole } from '@interfaces/models'
import DefaultSchema from '@models/Default'

const TAG = 'Role'

const RoleSchema = new Schema<IRole>(
  {
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    isLead: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    collection: TAG,
  }
)

RoleSchema.add(DefaultSchema)
RoleSchema.index({ type: 1 })

const Role = mongoose.model(TAG, RoleSchema)
export default Role
