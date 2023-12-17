import mongoose, { Schema } from 'mongoose'
import { IModule } from '@interfaces/models'
import DefaultSchema from '@models/Default'
import slugify from 'slugify'

const ModuleSchema = new Schema<IModule>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    file: {
      type: String,
      //   required: true
    },
    link: {
      type: String,
    },
    snippets: {
      type: String,
    },
    exercises: {
      type: Number,
      required: true,
    },
    laboratories: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Laboratory',
      },
    ],
    agenda: {
      type: [String],
      required: true,
    },
    slug: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    collection: 'Module',
    timestamps: true,
  }
)

ModuleSchema.pre('save', function (next) {
  this.slug = slugify(this.content, { lower: true })
  next()
})

ModuleSchema.add(DefaultSchema)

ModuleSchema.index({ title: 1 })
ModuleSchema.index({ content: 1 })
ModuleSchema.index({ slug: 1 })

const Module = mongoose.model('Module', ModuleSchema)
export default Module
