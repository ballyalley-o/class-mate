import mongoose, { Schema } from 'mongoose'
import { IModule } from '@interfaces/models'
import DefaultSchema from '@models/Default'
import slugify from 'slugify'

const TAG = 'Module'

const ModuleSchema = new Schema<IModule>(
  {
    moduleNo: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    agenda: [
      {
        type: String,
        required: true,
      },
    ],
    pages: {
      type: Number,
      required: true,
    },
    file: {
      type: String,
    },
    snippets: {
      type: String,
    },
    exercises: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Exercise',
      },
    ],
    slug: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    collection: TAG,
    timestamps: true,
  }
)

ModuleSchema.pre('save', function (next) {
  this.slug = slugify(this.content, { lower: true })
  next()
})

ModuleSchema.add(DefaultSchema)

ModuleSchema.index({ title: 1 })
ModuleSchema.index({ agenda: 1 })
ModuleSchema.index({ slug: 1 })

const Module = mongoose.model(TAG, ModuleSchema)
export default Module
