import mongoose, { Schema, model, connect } from 'mongoose'

interface IRole {
  name: string
  description: string
  roleType: string
  admin: boolean
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
    roleType: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'Role',
  }
)

const Role = mongoose.model('Role', RoleSchema)
export default Role
