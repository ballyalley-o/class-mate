import { Student } from '@models'
import { asyncHandler, logger } from '@middleware'

// @desc Student /set token
// @route GET /api/v0.1/students
// @access Public
const authStudent = asyncHandler(async (req, res) => {
  //   const { email, userName, password } = req.body

  //   const student = await Student.findOne({ email, userName })
  //   const matchPassword = await student?.matchPassword(password)

  try {
    res.send('Hellow')
  } catch (error: any) {
    logger.error(error.message)
    res.status(500).json('Error in Login')
  }
})

const studentController = { authStudent }

export default studentController
