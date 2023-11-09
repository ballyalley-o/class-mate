import { users } from '@migration'
import express from 'express'
import { authController } from '@controller'
import { PARAM } from '@routing'

const router = express.Router()

router.get(PARAM.auth.users, authController.getUsers)
router.post(PARAM.auth.signIn, authController.signIn)
router.post(PARAM.auth.signUp, authController.signUp)

const authRoute = router
export default authRoute
