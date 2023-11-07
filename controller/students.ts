import mongoose from 'mongoose'
import { User, Role } from '@models'
import { asyncHandler, logger } from '@middleware'
import { RESPONSE } from '@constants'
import ObjectID from 'bson-objectid'

const TAG = 'Student'

// @desc All Students
// @route GET /api/v0.1/student
// @access Public
const getStudents = asyncHandler(async (req, res, next) => {
  try {
    const role = await Role.findOne({ name: TAG })
    if (role) {
      const students = await User.find({
        role: role._id,
      })

      res.status(200).json({
        message: RESPONSE.success[200],
        total: students.length,
        students: students,
      })
    }
  } catch (error: any) {
    logger.error(error.message)
    res.status(401)
    throw new Error(RESPONSE.error[401])
  }
})

// @desc Student
// @route GET /api/v0.1/student
// @access Public
const getStudent = asyncHandler(async (req, res, next) => {
  const student = await User.findById(req.params.id).select('-password')

  try {
    const role = await Role.findOne({ name: TAG })
    res.status(200).json({
      message: RESPONSE.success[200],
      student,
    })
  } catch (error: any) {
    logger.error(error.message)
    res.status(404)
    throw new Error(RESPONSE.error[404])
  }
})

const studentController = { getStudents, getStudent }
export default studentController
