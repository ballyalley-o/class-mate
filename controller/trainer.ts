import { User, Role } from '@models'
import { asyncHandler, logger } from '@middleware'
import { RESPONSE } from '@constants'

const TAG = 'Trainer'

// @desc Get All Trainers
// @route GET /api/v0.1/trainer
// @access Private
const getTrainers = asyncHandler(async (req, res, next) => {
  try {
    const trainerRole = await Role.findOne({ name: TAG })

    if (trainerRole) {
      const trainers = await User.find({
        role: trainerRole._id,
      })
      // TODO: get both trainer ids

      res.status(200).json({
        message: RESPONSE.success[200],
        total: trainers.length,
        trainers,
      })
    } else {
      res.status(404)
      throw new Error(RESPONSE.error[404])
    }
  } catch (error: any) {
    logger.error(error.message)
    res.status(401)
    throw new Error(RESPONSE.error[401])
  }
})

// @desc Get Trainer
// @route GET /api/v0.1/trainer/:id
// @access Private
const getTrainer = asyncHandler(async (req, res, next) => {
  const trainer = await User.findById(req.params.id).select('-password')
  try {
    res.status(200).json({
      message: RESPONSE.success[200],
      trainer,
    })
  } catch (error: any) {
    logger.error(error.nessage)
    res.status(404)
    throw new Error(RESPONSE.error[404])
  }
})

// @desc Update Trainer
// @route PUT /api/v0.1/trainer/:id
// @access Private
const updateTrainer = asyncHandler(async (req, res, next) => {
  const trainer = await User.findById(req.params.id)

  if (trainer) {
    trainer.firstname = req.body.firstname || trainer.firstname
    trainer.lastname = req.body.lastname || trainer.lastname
    trainer.username = req.body.username || trainer.username
    trainer.email = req.body.email || trainer.email
    trainer.location = req.body.location || trainer.location
    trainer.role = req.body.role || trainer.role
    trainer.avatar = req.body.avatar || trainer.avatar

    if (req.body.password) {
      trainer.password = req.body.password
    }

    const updatedTrainer = await trainer.save()

    res.status(200).json({
      message: RESPONSE.success.updated(updatedTrainer.firstname),
      id: updatedTrainer._id,
      updated: req.body,
    })
  } else {
    res.status(404)
    throw new Error(RESPONSE.error[404])
  }
})

// @desc Delete Trainer
// @route PUT /api/v0.1/trainer/:id
// @access Private
const deleteTrainer = asyncHandler(async (req, res, next) => {
  const trainer = await User.findById(req.params.id)
  const trainerRole = await Role.findOne({ name: TAG })

  if (trainer) {
    if (trainerRole) {
      const role = User.find({ role: trainerRole._id })
      if (!role) {
        res.status(404)
        throw new Error(RESPONSE.error.notFound(role))
      }
      await trainer.deleteOne({ _id: trainer._id })
      res.status(200).json({
        message: RESPONSE.success.deleted(trainer.firstname),
        trainer: {},
      })
    }
  }
})

const trainerController = {
  getTrainers,
  getTrainer,
  updateTrainer,
  deleteTrainer,
}
export default trainerController
