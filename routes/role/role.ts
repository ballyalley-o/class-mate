import express from 'express'
import { roleController } from '@controller'

const router = express.Router()

/**
 * @path - baseUrl/api/v0.1/role
 */
router.get('/', roleController.getRoles)
router.get('/:id', roleController.getRole)

const roleRoute = router
export default roleRoute
