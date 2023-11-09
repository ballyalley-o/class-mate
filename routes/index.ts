import linkStudentRoutes from '@routes/student'
import linkAuthRoutes from '@routes/auth'
import linkCohortRoutes from '@routes/cohort'

const mainRoute = (app: any) => {
  linkStudentRoutes(app)
  linkAuthRoutes(app)
  linkCohortRoutes(app)
}

export default mainRoute
