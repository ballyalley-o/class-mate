import { Schema } from 'mongoose'

interface IModule {
  content: string
  pages: number
  file: string
  link: string
  title: string
  snippets: string
  exercises: number
  laboratories: Schema.Types.ObjectId[]
  agenda: string[]
  slug: string
}

export default IModule
