import { Schema } from 'mongoose'
interface ITimetable {
  week: number
  date: string
  time: TimeRanges
  location: string
  cohort: Schema.Types.ObjectId
}

export default ITimetable
