import express from 'express'
import { exerciseController } from '@controller'

const router = express.Router()

/**
 * @path - baseUrl/api/v0.1/exercise
//  */
router.get('/', exerciseController.getExercises)
router.get('/:id', exerciseController.getExercise)
router.post('/', exerciseController.addExercise)
router.put('/:id', exerciseController.updateExercise)
router.delete('/:id', exerciseController.deleteExercise)

const exerciseRoute = router
export default exerciseRoute
