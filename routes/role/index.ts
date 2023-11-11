import roleRoute from '@routes/role/role'
import { PATH } from '@routing'

/**
 * @path domain/api/v0.1/role
 */
const linkRoleRoutes = (app: any) => {
  app.use(PATH.role, roleRoute)
}

export default linkRoleRoutes
