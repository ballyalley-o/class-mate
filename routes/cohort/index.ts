// import { studentRoute } from '@routes/cohort/students'
import cohortRoute from '@routes/cohort/cohort'
import { GLOBAL } from '@config'
import { PARAM } from '@routing'

/**
 * @path domain/api/v0.1/cohort
 */
const base = `${PARAM.cohort.def}`

const linkCohortRoutes = (app: any) => {}

export default linkCohortRoutes
