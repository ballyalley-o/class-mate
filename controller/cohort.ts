import { Cohort, User } from '@models'
import { asyncHandler, logger } from '@middleware'
import { RESPONSE } from '@constants'
import ObjectID from 'bson-objectid'

const TAG = 'Cohort'

// @desc All Cohort
// @route GET /api/v0.1/cohort
// @access Private
const getCohorts = asyncHandler(async (req, res, next) => {
  try {
    const cohorts = await Cohort.find({})

    res.status(200).json({
      message: RESPONSE.success[200],
      total: cohorts.length,
      cohorts,
    })
  } catch (error) {
    logger.error(RESPONSE.error[404])
    throw new Error(RESPONSE.error[404])
  }
})

// @desc  Get a Cohort
// @route GET /api/v0.1/cohort/:id
// @access Public
const getCohort = asyncHandler(async (req, res, next) => {
  try {
    const cohort = await User.findById(req.params.id)
    if (cohort) {
      res.status(200).json({
        message: RESPONSE.success[200],
        cohort,
      })
    } else {
      res.status(404)
      throw new Error(RESPONSE.error[404])
    }
  } catch (error: any) {
    logger.error(error.message)
    throw new Error(RESPONSE.error[404])
  }
})

// @desc  Add a Cohort
// @route POST /api/v0.1/cohort
// @access Private
const addCohort = asyncHandler(async (req, res, next) => {
  let { name, students, trainers, module } = req.body

  const cohortExists = await Cohort.findOne({ name })

  if (cohortExists) {
    res.status(400)
    throw new Error(RESPONSE.error[400](name))
  }
  // check if the student already is a member of other cohort
  const studentsWithCohort: any[] = []
  const studentCohort = await Cohort.findOne({ students })
  if (students.length > 1) {
    for (const student of students) {
      if (studentCohort) {
        studentsWithCohort.push(student)
      }
    }
  }

  if (studentsWithCohort.length > 0) {
    res.status(400)
    throw new Error(RESPONSE.error.studentWithCohort(studentCohort?.name))
  }

  const newCohort = new Cohort({
    name,
    students: ObjectID(students) || [],
    trainers: ObjectID(trainers) || [],
  })

  try {
    await newCohort.validate()
    const cohort = await newCohort.save()

    res.status(201).json({
      message: RESPONSE.success[201](name || TAG),
      id: cohort._id,
      body: cohort,
    })
  } catch (error: any) {
    if (error.errors) {
      const errors = Object.values(error.errors).map((err: any) => err.message)
      res.status(400).json({ error: errors })
    } else {
      res.status(400).json({ error })
    }
  }
})

// @desc  Update a Cohort
// @route PUT /api/v0.1/cohort/:id
// @access Private
const updateCohort = asyncHandler(async (req, res, next) => {
  const { students, trainers, name } = req.body
  const cohort = await Cohort.findById(req.params.id)

  if (cohort) {
    cohort.name = req.body.name || cohort.name

    const studentExists = cohort.students.includes(students)
    if (studentExists) {
      res.status(400)
      throw new Error(RESPONSE.error[400]('Student'))
    }
    cohort.students = [...cohort.students, req.body.students] || cohort.students

    const trainerExists = cohort.trainers.includes(trainers)
    if (trainerExists) {
      res.status(400)
      throw new Error(RESPONSE.error[400]('Trainer'))
    }
    cohort.trainers = [...cohort.trainers, req.body.trainers] || cohort.trainers

    const updatedCohort = await cohort.save()

    res.status(200).json({
      message: RESPONSE.success.updated(updatedCohort.name),
      id: updatedCohort._id,
      updated: req.body,
    })
  } else {
    res.status(404)
    throw new Error(RESPONSE.error[404])
  }
})

// @desc  Delete a Cohort
// @route DELETE /api/v0.1/cohort/:id
// @access Private
const deleteCohort = asyncHandler(async (req, res, next) => {
  const cohort = await Cohort.findById(req.params.id)

  if (cohort) {
    await cohort.deleteOne({ _id: cohort._id })
    res.status(200).json({
      message: RESPONSE.success.deleted(cohort.name),
      cohort: {},
    })
  } else {
    res.status(404)
    throw new Error(RESPONSE.error[404])
  }
})

const cohortController = {
  getCohorts,
  getCohort,
  addCohort,
  updateCohort,
  deleteCohort,
}
export default cohortController
