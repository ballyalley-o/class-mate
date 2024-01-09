import exerciseRoute from '@routes/exercise/exercise'
import { PATH } from '@routing'

/**
 * @path domain/api/v0.1/exercise
 */
const linkExerciseRoutes = (app: any) => {
  app.use(PATH.exercise, exerciseRoute)
//   app.use(PATH.status, statusRoute)
}

export default linkExerciseRoutes
