import { Exercise } from '@models'
import { asyncHandler, logger } from '@middleware'
import { RESPONSE } from '@constants'

const TAG = 'Exercise'

// @desc All Exercise
// @route GET /api/v0.1/exercise
// @access Private
const getExercises = asyncHandler(async (req, res, next) => {
  try {
    const exercises = await Exercise.find({})
    if (exercises) {
      res.status(200).json({
        message: RESPONSE.success[200],
        total: exercises.length,
        exercises,
      })
    } else {
      res.status(404)
      throw new Error(RESPONSE.error[404])
    }
  } catch (error: any) {}
})

// @desc Get Exercise
// @route GET /api/v0.1/exercise/:id
// @access Private
const getExercise = asyncHandler(async (req, res, next) => {
  try {
    const exercise = await Exercise.findById(req.params.id)
    if (exercise) {
      res.status(200).json({
        message: RESPONSE.success[200],
        exercise,
      })
    } else {
      logger.error(RESPONSE.error[404])
      res.status(404)
      throw new Error(RESPONSE.error[404])
    }
  } catch (error: any) {
    logger.error(error.message)
    res.status(400)
    throw new Error(RESPONSE.error.failedFetch(TAG))
  }
})

// @desc Add Exercise
// @route GET /api/v0.1/exercise
// @access Private
const addExercise = asyncHandler(async (req, res, next) => {
  const { title } = req.body

  const exerciseExists = await Exercise.findOne({ title })
  if (exerciseExists) {
    res.status(400)
    throw new Error(RESPONSE.error[400](req.body.title))
  }

  try {
    const newExercise = await Exercise.create(req.body)

    res.status(201).json({
      message: RESPONSE.success[201],
      exercise: newExercise,
    })
  } catch (error: any) {
    logger.error(error.message)
    res.status(400)
    throw new Error(RESPONSE.error[400](req.body.title))
  }
})

// @desc Update Exercise
// @route GET /api/v0.1/exercise/:id
// @access Private
const updateExercise = asyncHandler(async (req, res, next) => {
  let exercise = await Exercise.findById(req.params.id)

  if (exercise) {
    exercise.module = req.body.module || exercise.module
    exercise.title = req.body.title || exercise.title
    exercise.page = req.body.page || exercise.page
    exercise.repo = req.body.repo || exercise.repo
    exercise.instructions = req.body.instructions || exercise.instructions
    exercise.gist = req.body.gist || exercise.gist
    exercise.answers = req.body.answers || exercise.answers

    const updatedExercise = await exercise.save()

    res.status(200).json({
      message: RESPONSE.success[200],
      module: updatedExercise,
    })
  } else {
    logger.error(RESPONSE.error[404])
    res.status(404)
    throw new Error(RESPONSE.error[404])
  }
})

// @desc Delete Exercise
// @route GET /api/v0.1/exercise/:id
// @access Private
const deleteExercise = asyncHandler(async (req, res, next) => {
  let exercise = await Exercise.findById(req.params.id)

  if (!exercise) {
    res.status(404)
    throw new Error(RESPONSE.error[404])
  }

  try {
    await exercise.deleteOne({ _id: exercise._id })

    res.status(200).json({
      message: RESPONSE.success[200],
      exercise: {},
    })
  } catch (error: any) {
    logger.error(error.message)
    res.status(400)
    throw new Error(RESPONSE.error[400](exercise.title))
  }
})

const exerciseController = {
  getExercises,
  getExercise,
  addExercise,
  updateExercise,
  deleteExercise,
}

export default exerciseController
