import mongoose, { Schema, model, connect } from 'mongoose'
import { IRecording } from '@interfaces/models'
import DefaultSchema from '@models/Default'

const RecordingSchema = new Schema<IRecording>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    topics: {
      type: [String],
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
    cohort: {
      type: Schema.Types.ObjectId,
    },
    isRaw: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    collection: 'Recording',
    timestamps: true,
  }
)

RecordingSchema.add(DefaultSchema)
RecordingSchema.index({ title: 1 })
RecordingSchema.index({ content: 1 })
RecordingSchema.index({ topics: 1 })

const Recording = mongoose.model('Recording', RecordingSchema)
export default Recording
