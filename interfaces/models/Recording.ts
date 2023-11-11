import { Schema } from 'mongoose'

interface IRecording {
  title: string
  content: string
  topics: string[]
  link: string
  date: Schema.Types.ObjectId
  cohort: Schema.Types.ObjectId
  passcode: string
  isRaw: boolean
}

export default IRecording
