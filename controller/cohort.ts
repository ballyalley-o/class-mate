import { Cohort, User } from '@models'
import { asyncHandler, logger } from '@middleware'
import { RESPONSE } from '@constants'

const TAG = 'Cohort'

// @desc All Cohort
// @route GET /api/v0.1/cohort
// @access Private
const getCohorts = asyncHandler(async (req, res, next) => {
  try {
    const cohorts = await Cohort.find({})

    res.status(200).json({
      message: RESPONSE.success[200],
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
    }
  } catch (error: any) {
    logger.error(error.message)
    throw new Error(RESPONSE.error[404])
  }
})

// @desc  Add a Cohort
// @route POST /api/v0.1/cohort
// @access Private
const AddCohort = asyncHandler(async (req, res, next) => {
  let { name, students, trainers } = req.body

  //   const createdCohort = await
})

const cohortController = { getCohorts, getCohort }
export default cohortController
