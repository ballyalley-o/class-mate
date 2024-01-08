// import { studentRoute } from '@routes/cohort/students'
import cohortRoute from '@routes/cohort/cohort'
import { PATH } from '@routing'

/**
 * @path domain/api/v0.1/cohort
 */
// const base = `${PARAM.cohort.def}`
const linkCohortRoutes = (app: any) => {
  app.use(PATH.cohort, cohortRoute)
}

export default linkCohortRoutes
