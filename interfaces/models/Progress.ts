import { Schema } from 'mongoose'

interface IProgress {
  exercise: Schema.Types.ObjectId
  status: Schema.Types.ObjectId
}

export default IProgress
