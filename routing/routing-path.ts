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
  auth: redir(GLOBAL.apiRoot, PARAM.auth.def),
  cohort: redir(GLOBAL.apiRoot, PARAM.cohort.def),
  student: redir(GLOBAL.apiRoot, PARAM.student.def),
  trainer: redir(GLOBAL.apiRoot, PARAM.trainer.def),
}

console.log(PATH.trainer)

export default PATH
