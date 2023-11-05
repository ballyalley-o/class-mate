import express from 'express'

const router = express.Router()

/**
 * @path - baseUrl/api/v0.1/cohort/:id/student
 */
router.get('/', (req, res) => {})
router.get('/:id', (req, res) => {})
router.post('/', (req, res) => {})
router.put('/:id', (req, res) => {})
router.delete('/:id', (req, res) => {})

const cohortStudentRoute = router
export default cohortStudentRoute
