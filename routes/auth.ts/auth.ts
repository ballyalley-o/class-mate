import express from 'express'
import { authController } from '@controller'
import { PARAM } from '@routing'

const router = express.Router()

router.post(PARAM.auth.signIn, authController.signIn)
router.post('/sign-up', authController.signUp)

const authRoute = router
export default authRoute
