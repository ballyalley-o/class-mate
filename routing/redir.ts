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
  cohort: redir(GLOBAL.apiRoot, PARAM.cohort),
  student: redir(GLOBAL.apiRoot, PARAM.student),
}

export default PATH
