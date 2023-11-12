import moduleRoute from '@routes/module/module'
import { PATH } from '@routing'

const linkModuleRoutes = (app: any) => {
  app.use(PATH.module, moduleRoute)
}

export default linkModuleRoutes
