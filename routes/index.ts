import linkStudentRoutes from '@routes/student'
import linkAuthRoutes from '@routes/auth'
import linkCohortRoutes from '@routes/cohort'
import linkTrainerRoutes from '@routes/trainer'
import linkRoleRoutes from '@routes/role'
import linkModuleRoutes from '@routes/module'
import linkProgressRoutes from '@routes/progress'
import linkExerciseRoutes from '@routes/exercise'

const mainRoute = (app: any) => {
  linkStudentRoutes(app)
  linkAuthRoutes(app)
  linkCohortRoutes(app)
  linkTrainerRoutes(app)
  linkRoleRoutes(app)
  linkModuleRoutes(app)
  linkProgressRoutes(app)
  linkExerciseRoutes(app)
}

export default mainRoute
