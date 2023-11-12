import path from 'path'
import { __dirname } from '@config'

const PARAM = {
  home: '/',
  auth: {
    def: '/auth',
    signIn: '/sign-in',
    signOut: '/sign-out',
    signUp: '/sign-up',
    users: '/users',
  },
  //role
  role: {
    def: '/role',
    roleId: `/role/:id`,
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
  // trainer
  trainer: {
    def: '/trainer',
    trainerId: `/trainer/:id`,
  },
  // module
  module: {
    def: '/module',
    moduleId: '/module/:id',
  },
  // @production
  buildLoc: 'client/dist',
  buildView: path.resolve(__dirname, 'client', 'dist', 'index.html'),
}

export default PARAM
