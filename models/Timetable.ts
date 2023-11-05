import mongoose, { Schema, model, connect } from 'mongoose'
import { ITimetable } from '@interfaces/models'

const TimetableSchema = new Schema<ITimetable>(
  {
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Timetable = mongoose.model('Timetable', TimetableSchema)
export default Timetable
