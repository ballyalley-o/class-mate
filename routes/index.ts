import cohortRouter from '@routes/cohort/cohort'
import linkStudentRoutes from '@routes/student'
import PATH from '@routing/redir'
import studentRoute from './student/student'

const cohortRoutes = cohortRouter
// const studentRoutes = studentRoute

const mainRoute = (app: any) => {
  app.use(PATH.cohort, cohortRoutes)
  app.use(PATH.student, studentRoute)
}

export default mainRoute
