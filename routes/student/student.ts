import express from 'express'

const router = express.Router()

/**
 * @path - baseUrl/api/v0.1/student
 */
router.get('/', (req, res) => {
  res.send('hello')
})
router.get('/:id', (req, res) => {})
router.post('/', (req, res) => {})
router.put('/:id', (req, res) => {})
router.delete('/:id', (req, res) => {})

const studentRoute = router
export default studentRoute
