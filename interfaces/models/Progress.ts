import { Schema } from 'mongoose'

interface IProgress {
  moduleExercises: Schema.Types.ObjectId[]
  miniProjects: Schema.Types.ObjectId[]
  capstone: Schema.Types.ObjectId
  exercise: Schema.Types.ObjectId
  status: Schema.Types.ObjectId
}

export default IProgress
