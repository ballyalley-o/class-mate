import cohortRouter from '@routes/cohort'
import PARAM from '@routing/param'

const cohortRoutes = cohortRouter

const mainRoute = (app: any) => {
  app.use(PARAM.cohort, cohortRoutes)
}

export default mainRoute
