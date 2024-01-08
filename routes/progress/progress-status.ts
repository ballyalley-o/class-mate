import express from 'express'
import { statusController } from '@controller'

const router = express.Router()

/**
 * @path - baseUrl/api/v0.1/progress/status
 */
router.get('/', statusController.getStatuses)
router.get('/:id', statusController.getStatus)
router.post('/', statusController.addStatus)
router.put('/:id', statusController.updateStatus)
router.delete('/:id', statusController.deleteStatus)

const statusRoute = router
export default statusRoute
