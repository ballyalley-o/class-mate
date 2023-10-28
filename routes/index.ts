import cohortRouter from '@routes/cohort/cohort'
import studentRouter from '@routes/cohort/students'
import PARAM from '@routing/param'

const cohortRoutes = cohortRouter

const mainRoute = (app: any) => {
  app.use(PARAM.cohort, cohortRoutes)
  app.use(PARAM.student)
}

export default mainRoute
