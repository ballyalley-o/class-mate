import path from 'path'
import { __dirname } from '@config'

const PARAM = {
  home: '/',
  auth: {
    def: '/auth',
    signIn: '/sign-in',
    signUp: '/sign-up',
    users: '/users',
  },
  // cohort
  cohort: {
    def: '/cohort',
    cohortId: `/cohort/:id`,
  },
  // student
  student: {
    def: '/student',
    studentId: `/student/:id`,
  },
  // @production
  buildLoc: 'client/dist',
  buildView: path.resolve(__dirname, 'client', 'dist', 'index.html'),
}

export default PARAM
