import mongoose, { Schema, model, connect } from 'mongoose'

interface IRole {
  name: string
  description: string
  // roleType: string
  isLead: boolean
}

const RoleSchema = new Schema<IRole>(
  {
    name: {
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
    collection: 'Role',
  }
)

const Role = mongoose.model('Role', RoleSchema)
export default Role
