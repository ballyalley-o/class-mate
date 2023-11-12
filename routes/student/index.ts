import { PATH } from '@routing'
import studentRoute from '@routes/student/student'
import studentMiniProject from '@routes/student/student'
import studentMiniProjectsRoute from '@routes/student/student-mini-projects'
import studentCapstoneRoute from '@routes/student/student-capstone'
import studentExercisesRoute from '@routes/student/student-exercises'

const linkStudentRoutes = (app: any) => {
  app.use(PATH.student, studentRoute)
}

export default linkStudentRoutes
