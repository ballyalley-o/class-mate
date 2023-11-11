import linkStudentRoutes from '@routes/student'
import linkAuthRoutes from '@routes/auth'
import linkCohortRoutes from '@routes/cohort'
import linkTrainerRoutes from '@routes/trainer'
import linkRoleRoutes from '@routes/role'

const mainRoute = (app: any) => {
  linkStudentRoutes(app)
  linkAuthRoutes(app)
  linkCohortRoutes(app)
  linkTrainerRoutes(app)
  linkRoleRoutes(app)
}

export default mainRoute
