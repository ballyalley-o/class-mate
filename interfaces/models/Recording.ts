import { Schema } from 'mongoose'

interface IRecording {
  title: string
  date: Schema.Types.ObjectId
  link: string
  passcode: string
}

export default IRecording
