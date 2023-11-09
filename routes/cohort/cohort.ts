import express from 'express'
import { cohortController } from '@controller'

const router = express.Router()

/**
 * @path - baseUrl/api/v0.1/cohort
 */
router.get('/', cohortController.getCohorts)
router.get('/:id', cohortController.getCohort)
router.post('/', cohortController.AddCohort)
router.put('/:id', (req, res) => {})
router.delete('/:id', (req, res) => {})

const cohortRoute = router
export default cohortRoute
