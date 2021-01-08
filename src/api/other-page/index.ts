const api: { [index: string]: any } = {}

const apiModule = require.context('/', false, /\.api\.ts$/)

apiModule.keys().map(_ => {
  Object.assign(api, apiModule(_))
})

export default api