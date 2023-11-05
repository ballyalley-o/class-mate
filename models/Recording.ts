import mongoose, { Schema, model, connect } from 'mongoose'
import { IRecording } from '@interfaces/models'

const RecordingSchema = new Schema<IRecording>(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Schema.Types.ObjectId,
      ref: 'Timetable',
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    passcode: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Recording = mongoose.model('Recording', RecordingSchema)
export default Recording
