import progressRoute from '@routes/progress/progress'
import statusRoute from '@routes/progress/progress-status'
import { PATH } from '@routing'

/**
 * @path domain/api/v0.1/cohort
 */
// const base = `${PARAM.cohort.def}`
const linkProgressRoutes = (app: any) => {
  app.use(PATH.progress, progressRoute)
  app.use(PATH.status, statusRoute)
}

export default linkProgressRoutes
