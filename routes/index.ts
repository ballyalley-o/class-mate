import cohortRouter from '@routes/cohort/cohort'
import studentRouter from '@routes/'
import PATH from '@routing/redir'

const cohortRoutes = cohortRouter
const studentRoutes = studentRouter

const mainRoute = (app: any) => {
  app.use(PATH.cohort, cohortRoutes)
  app.use(PATH.student, studentRoutes)
}

export default mainRoute
