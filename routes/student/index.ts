import { PATH } from '@routing'
import express from 'express'
import studentRoute from '@routes/student/student'
import studentMiniProject from '@routes/student/student'
import studentMiniProjectsRoute from '@routes/student/student-mini-projects'
import studentCapstoneRoute from '@routes/student/student-capstone'
import studentExercisesRoute from '@routes/student/student-exercises'

const router = express.Router()

const linkStudentRoutes = (app: any) => {
  app.use(studentRoute)
}

export default linkStudentRoutes