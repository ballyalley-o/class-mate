import { Response } from 'express'
import { GLOBAL } from '@config'
import jwt from 'jsonwebtoken'
import { thirtyDays } from '@constants'

const ENV = 'development'
const SECRET = GLOBAL.jwt_secret

const genToken = (res: Response, userId: any) => {
  const token = jwt.sign({ userId }, String(SECRET), {
    expiresIn: GLOBAL.jwt_exp,
  })
  res.cookie(GLOBAL.cookie, token, {
    httpOnly: true,
    secure: GLOBAL.env !== ENV,
    sameSite: 'strict',
    maxAge: thirtyDays,
  })
}

export default genToken
