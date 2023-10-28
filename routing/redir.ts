interface Params {
  (...params: string[]): void
}

const redir: Params = (...params) => {
  return params.join('')
}
