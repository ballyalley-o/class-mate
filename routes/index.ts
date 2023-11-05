import cohortRouter from '@routes/cohort/cohort'
import linkStudentRoutes from '@routes/student'
import PATH from '@routing/redir'
import studentRoute from './student/student'

// const studentRoutes = studentRoute

const mainRoute = (app: any) => {
  linkStudentRoutes(app)
}

export default mainRoute
