import { User } from '@models'
import { asyncHandler, logger } from '@middleware'
import { genToken } from '@utils'
import { RESPONSE } from '@constants'

const TAG = 'User'

// @desc User /set token
// @route POST /api/v0.1/auth/signIn
// @access Public
const signIn = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body

  const user = await User.findOne({ email, username })
  const matchPassword = await user?.matchPassword(password)

  if (user && matchPassword) {
    const token = genToken(res, user._id)
    res.status(200).json({
      message: RESPONSE.success[200],
    })
  } else {
    res.status(401)
    throw new Error(RESPONSE.error[401])
  }
})

// @desc Sign Up user
// @route POST /api/v0.1/auth/signUp
// @access Public
const signUp = asyncHandler(async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    username,
    password,
    role,
    location,
    avatar,
  } = req.body

  const userExists = await User.findOne({ email, username })

  if (userExists) {
    res.status(400)
    throw new Error(RESPONSE.error[400](username || email))
  }

  const userBody = {
    firstname,
    lastname,
    email,
    username,
    password,
    role,
    location,
    avatar,
  }

  const user = await User.create(userBody)

  if (user) {
    genToken(res, user._id)
    res.status(201).json({
      message: RESPONSE.success[201](username || TAG),
      id: user._id,
      body: userBody,
    })
  } else {
    res.status(400)
    throw new Error(RESPONSE.error.invalid)
  }
})

const authController = { signIn, signUp }
export default authController
