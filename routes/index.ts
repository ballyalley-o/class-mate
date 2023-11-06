import linkStudentRoutes from '@routes/student'
import linkAuthRoutes from '@routes/auth'

const mainRoute = (app: any) => {
  linkStudentRoutes(app)
  linkAuthRoutes(app)
}

export default mainRoute
