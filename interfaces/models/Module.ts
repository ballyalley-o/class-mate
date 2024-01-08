import { Schema } from 'mongoose'

interface IModule {
  moduleNo: number
  title: string
  content: string
  agenda: string[]
  pages: number
  file: string
  snippets: string
  exercises: Schema.Types.ObjectId[]
  slug: string
}

export default IModule
