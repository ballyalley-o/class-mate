import express from 'express'

const router = express.Router()

/**
 * @path - baseUrl/api/v0.1/student/:id/exercises
 */
router.get('/', (req, res) => {})
router.get('/:id', (req, res) => {})
router.post('/', (req, res) => {})
router.put('/:id', (req, res) => {})
router.delete('/:id', (req, res) => {})

const studentMiniProjectsRoute = router
export default studentMiniProjectsRoute
