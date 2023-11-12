import express from 'express'
import { moduleController } from '@controller'

const router = express.Router()

/**
 * @path - baseUrl/api/v0.1/module
 */
router.get('/', moduleController.getModules)
router.get('/:id', moduleController.getModule)
router.post('/', moduleController.addModule)
router.put('/:id', moduleController.updateModule)
router.delete('/:id', moduleController.deleteModule)

const moduleRoute = router
export default moduleRoute
