import { Schema } from 'mongoose'

interface IExercise {
  module: Schema.Types.ObjectId
  title: string
  page: number
  assignment: string
  cohort: Schema.Types.ObjectId
  instructions: string
  gist: string
}

export default IExercise
