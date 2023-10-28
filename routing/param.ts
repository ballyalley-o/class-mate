import path from 'path'

const PARAM = {
  home: '/',
  cohort: '/cohort',
  student: '/student',
  // @production
  buildLoc: 'client/dist',
  buildView: path.resolve(__dirname, 'client', 'dist', 'index.html'),
}

export default PARAM
