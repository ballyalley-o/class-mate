import { Schema } from 'mongoose'

interface IExercise {
  module: Schema.Types.ObjectId
  title: string
  page: string
  repo: string
  instructions: string
  gist: string
}

export default IExercise
