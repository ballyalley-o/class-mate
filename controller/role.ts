import { RESPONSE } from '@constants'
import { asyncHandler, logger } from '@middleware'
import { Role } from '@models'

const TAG = 'Role'

// @desc All Roles
// @route GET /api/v0.1/role
// @access Private
const getRoles = asyncHandler(async (req, res, next) => {
  const roles = await Role.find({})
  try {
    res.status(200).json({
      message: RESPONSE.success[200],
      roles,
    })
  } catch (error: any) {
    logger.error(RESPONSE.error[404])
    throw new Error(error.message)
  }
})

// @desc Get Role
// @route GET /api/v0.1/role/:id
// @access Private
const getRole = asyncHandler(async (req, res, next) => {
  try {
    const role = await Role.findById(req.params.id)
    if (role) {
      res.status(200).json({
        message: RESPONSE.success[200],
        role,
      })
    } else {
      res.status(404)
      throw new Error(RESPONSE.error[404])
    }
  } catch (error: any) {
    logger.error(RESPONSE.error[404])
    throw new Error(error.message)
  }
})

const roleController = { getRoles, getRole }
export default roleController
