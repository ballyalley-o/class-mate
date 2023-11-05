import GLOBAL from '@config/global'

interface Params {
  (...params: any[]): void
}

const redir: Params = (...params) => {
  return params.join('')
}

const PATH = {
  root: redir(GLOBAL.apiRoot, '/'),
}

export default PATH
