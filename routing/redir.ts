import GLOBAL from '@config/global'
import PARAM from '@routing/param'

interface Params {
  (...params: any[]): void
}

const redir: Params = (...params) => {
  return params.join('')
}

const PATH = {
  root: redir(GLOBAL.apiRoot, PARAM.home),
  cohort: redir(GLOBAL.apiRoot, PARAM.cohort.def),
  student: redir(GLOBAL.apiRoot, PARAM.student.def),
  auth: redir(GLOBAL.apiRoot, PARAM.auth.def),
}

export default PATH
