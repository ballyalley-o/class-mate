import { User } from '@models'
import { asyncHandler, logger } from '@middleware'
import { RESPONSE } from '@constants'

// @desc Student /set token
// @route GET /api/v0.1/students
// @access Public
const getStudents = asyncHandler(async (req, res) => {
  //   const { email, username, password } = req.body

  //   const student = await User.findOne({ email, username })
  //   const matchPassword = await student?.matchPassword(password)

  try {
    res.status(200).json({
      message: RESPONSE.success[200],
    })
  } catch (error: any) {
    logger.error(error.message)
    res.status(401)
    throw new Error(RESPONSE.error[401])
  }
})

const studentController = { getStudents }
export default studentController
