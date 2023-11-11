import mongoose, { Types, Schema } from 'mongoose'
import { Role } from '@models'
import { IUser } from '@interfaces/models'

type UserId = Types.ObjectId | IUser

const TAG = 'User'

/**
 * middleware to secure the schema fields for only their respective roles
 * @param role - roles to validate in the schema
 * @returns bool
 */

async function roleValidate(userId: UserId, role: string): Promise<boolean> {
  const user = await mongoose.model(TAG).findById(userId)
  const roleType = await Role.findById(user.role)

  return user && roleType?.type === role
}

export default roleValidate
