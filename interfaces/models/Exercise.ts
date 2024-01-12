import { Schema } from 'mongoose'

interface IExercise {
  module: Schema.Types.ObjectId
  title: string
  page: string
  repo: string
  instructions: string
  gist: string
  answers: string
  status: Schema.Types.ObjectId // only show when added to module exercises schema
}

export default IExercise
