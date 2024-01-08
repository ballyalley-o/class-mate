import { User, Status } from '@models'
import { asyncHandler, logger } from '@middleware'
import { RESPONSE } from '@constants'

const TAG = 'Status'

// @desc All Status
// @route GET /api/v0.1/progress/status
// @access Private: Admin
const getStatuses = asyncHandler(async (req, res, next) => {
  const statuses = await Status.find({})
  try {
    res.status(200).json({
      message: RESPONSE.success[200],
      total: statuses.length,
      statuses,
    })
  } catch (error: any) {
    logger.error(error.message)
    res.status(404)
    throw new Error(RESPONSE.error[404])
  }
})

// @desc Get Status
// @route GET /api/v0.1/progress/status/:id
// @access Private: Admin
const getStatus = asyncHandler(async (req, res, next) => {
  try {
    const status = await Status.findById(req.params.id)
    if (status) {
      res.status(200).json({
        message: RESPONSE.success[200],
        status,
      })
    } else {
      logger.error(RESPONSE.error[404])
      res.status(404)
      throw new Error(RESPONSE.error[404])
    }
  } catch (error: any) {
    logger.error(error.message)
    res.status(404)
    throw new Error(RESPONSE.error.failedFetch(TAG))
  }
})

// @desc Add Status
// @route GET /api/v0.1/progress/status
// @access Private: Admin
const addStatus = asyncHandler(async (req, res, next) => {
  const { type } = req.body

  const statusTypeExists = await Status.findOne({ type })

  if (statusTypeExists) {
    res.status(400)
    throw new Error(RESPONSE.error[400](req.body.type))
  }

  try {
    const newStatus = await Status.create(req.body)

    res.status(201).json({
      message: RESPONSE.success[201](req.body.type),
      status: newStatus,
    })
  } catch (error: any) {
    logger.error(error.message)
    res.status(404)
    throw new Error(RESPONSE.error.failedCreate(TAG))
  }
})

// @desc Update Status
// @route GET /api/v0.1/progress/status/:id
// @access Private: Admin
const updateStatus = asyncHandler(async (req, res, next) => {
  const status = await Status.findById(req.params.id)

  if (status) {
    status.type = req.body.type || status.type
    status.description = req.body.description || status.description

    const updatedStatus = await status.save()

    res.status(200).json({
      message: RESPONSE.success.updated(updatedStatus.type),
      id: updatedStatus._id,
      status: updatedStatus,
    })
  } else {
    res.status(404)
    throw new Error(RESPONSE.error.failedUpdate(TAG))
  }
})

// @desc Delete Status
// @route GET /api/v0.1/progress/status/:id
// @access Private: Admin
const deleteStatus = asyncHandler(async (req, res, next) => {
  const status = await Status.findById(req.params.id)

  if (status) {
    try {
      await status.deleteOne({ _id: status._id })

      res.status(200).json({
        message: RESPONSE.success.deleted(status.type),
        status: {},
      })
    } catch (error: any) {
      logger.error(error.message)
      res.status(500)
      throw new Error(RESPONSE.error.failedDelete(TAG))
    }
  } else {
    res.status(404)
    throw new Error(RESPONSE.error[404])
  }
})

const statusController = {
  getStatuses,
  getStatus,
  addStatus,
  updateStatus,
  deleteStatus,
}
export default statusController
