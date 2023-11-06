import authRoute from '@routes/auth/auth'
import { PATH } from '@routing'

const linkAuthRoutes = (app: any) => {
  app.use(PATH.auth, authRoute)
}

export default linkAuthRoutes
