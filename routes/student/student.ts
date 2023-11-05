import express from 'express'
import { studentController } from '@controller'

const router = express.Router()

/**
 * @path - baseUrl/api/v0.1/student
 */
router.get('/', studentController.authStudent)
router.get('/:id', (req, res) => {})
router.post('/', (req, res) => {})
router.put('/:id', (req, res) => {})
router.delete('/:id', (req, res) => {})

const studentRoute = router
export default studentRoute
