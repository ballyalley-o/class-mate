import { Progress, User } from '@models'
import { asyncHandler, logger } from '@middleware'
import { RESPONSE } from '@constants'

const TAG = 'Progress'

// @desc All Modules
// @route GET /api/v0.1/module
// @access Private
const getProgresses = asyncHandler(async (req, res, next) => {
  try {
    const modules = await Progress.find({}).populate([
      { path: 'exercises', select: 'title' },
    ])
    if (modules) {
      res.status(200).json({
        message: RESPONSE.success[200],
        total: modules.length,
        modules,
      })
    } else {
      res.status(404)
      throw new Error(RESPONSE.error[404])
    }
  } catch (error: any) {}
})