import { Schema } from 'mongoose'

interface ICohort {
  name: string
  students: Schema.Types.ObjectId[]
  trainers: Schema.Types.ObjectId[]
  module: Schema.Types.ObjectId[]
}

export default ICohort
