import trainerRoute from '@routes/trainer/trainer'
import { PATH } from '@routing'

const linkTrainerRoutes = (app: any) => {
  app.use(PATH.trainer, trainerRoute)
}

export default linkTrainerRoutes
