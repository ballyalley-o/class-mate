import linkStudentRoutes from '@routes/student'
import linkAuthRoutes from '@routes/auth'
import linkCohortRoutes from '@routes/cohort'
import linkTrainerRoutes from '@routes/trainer'

const mainRoute = (app: any) => {
  linkStudentRoutes(app)
  linkAuthRoutes(app)
  linkCohortRoutes(app)
  linkTrainerRoutes(app)
}

export default mainRoute
