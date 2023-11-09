import express from 'express'
import { trainerController } from '@controller'
import { PARAM } from '@routing'

const router = express.Router()

/**
 * @path - baseUrl/api/v0.1/trainer
 */
router.get('/', trainerController.getTrainers)
router.get('/:id', trainerController.getTrainer)
router.put('/:id', trainerController.updateTrainer)
router.delete('/:id', trainerController.deleteTrainer)

const trainerRoute = router
export default trainerRoute
