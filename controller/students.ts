import { User, Role } from '@models'
import { asyncHandler, logger } from '@middleware'
import { RESPONSE } from '@constants'

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
// @route GET /api/v0.1/student/:id
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

// @desc Update Student
// @route PUT /api/v0.1/student/:id
// @access Public
const updateStudent = asyncHandler(async (req, res, next) => {
  const student = await User.findById(req.params.id)

  if (student) {
    student.firstname = req.body.firstname || student.firstname
    student.lastname = req.body.lastname || student.lastname
    student.username = req.body.username || student.username
    student.email = req.body.email || student.email
    student.location = req.body.location || student.location
    student.role = req.body.role || student.role
    student.avatar = req.body.avatar || student.avatar

    if (req.body.password) {
      student.password = req.body.password
    }

    const updatedStudent = await student.save()

    const updated = {
      _id: updatedStudent._id,
      firstname: updatedStudent.firstname,
      lastname: updatedStudent.lastname,
      username: updatedStudent.username,
      email: updatedStudent.email,
      location: updatedStudent.location,
      role: updatedStudent.role,
      avatar: updatedStudent.avatar,
    }

    res.status(200).json({
      message: RESPONSE.success.updated(updatedStudent.firstname),
      updated: req.body,
    })
  } else {
    res.status(404)
    throw new Error(RESPONSE.error[404])
  }
})

// @desc Delete Student
// @route DELETE /api/v0.1/student/:id
// @access Public
const deleteStudent = asyncHandler(async (req, res, next) => {
  const student = await User.findById(req.params.id)
  const role = await Role.findOne({ name: TAG })

  if (student) {
    if (role) {
      const userRole = await User.find({ role: role._id })
      if (!userRole) {
        res.status(400)
        throw new Error(RESPONSE.error[400](student.firstname))
      }
      await student.deleteOne({ _id: student._id })
      res.status(200).json({
        message: RESPONSE.success.deleted(student.firstname),
        student: {},
      })
    }
  }
})

const studentController = {
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
}
export default studentController
