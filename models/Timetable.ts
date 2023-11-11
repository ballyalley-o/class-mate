import mongoose, { Schema, model, connect } from 'mongoose'
import { ITimetable } from '@interfaces/models'
import DefaultSchema from '@models/Default'

const TimetableSchema = new Schema<ITimetable>(
  {
    week: {
      type: Number,
      required: true,
    },
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
    cohort: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    collection: 'Timetable',
    timestamps: true,
  }
)

TimetableSchema.add(DefaultSchema)
TimetableSchema.index({ time: 1 })

const Timetable = mongoose.model('Timetable', TimetableSchema)
export default Timetable
