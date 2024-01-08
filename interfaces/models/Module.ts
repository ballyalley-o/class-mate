import { Schema } from 'mongoose'

interface IModule {
  title: string
  agenda: string
  pages: number
  file: string
  snippets: string
  exercises: Schema.Types.ObjectId[]
  slug: string
}

export default IModule
