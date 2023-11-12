import mongoose, { Schema, model } from 'mongoose'
import DefaultSchema from '@models/Default'

const TAG = 'Laboratory'

interface ILaboratory {
  modules: Schema.Types.ObjectId[]
  status: string
}

const LaboratorySchema = new Schema<ILaboratory>(
  {
    modules: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Module',
      },
    ],
    status: {
      type: String,
      required: true,
      enum: ['Completed', 'On Going', 'Submitted'],
    },
  },
  { toJSON: { virtuals: true }, collection: 'Laboratory' }
)

LaboratorySchema.add(DefaultSchema)
