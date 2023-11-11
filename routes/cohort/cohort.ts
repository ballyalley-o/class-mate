import express from 'express'
import { cohortController } from '@controller'

const router = express.Router()

/**
 * @path - baseUrl/api/v0.1/cohort
 */
router.get('/', cohortController.getCohorts)
router.get('/:id', cohortController.getCohort)
router.post('/', cohortController.addCohort)
router.put('/:id', cohortController.updateCohort)
router.delete('/:id', cohortController.deleteCohort)

const cohortRoute = router
export default cohortRoute
