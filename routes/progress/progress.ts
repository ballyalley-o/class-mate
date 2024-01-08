import express from 'express'
import { statusController } from '@controller'

const router = express.Router()

/**
 * @path - baseUrl/api/v0.1/progress
//  */
// TODO: controller for progress
router.get('/', statusController.getStatuses)
// router.get('/:id', statusController.getCohort)
// router.post('/', statusController.addCohort)
// router.put('/:id', statusController.updateCohort)
// router.delete('/:id', statusController.deleteCohort)

const cohortRoute = router
export default cohortRoute
