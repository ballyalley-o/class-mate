import mongoose, { Schema } from 'mongoose'

// TODO: add fields for role based schemas
interface ITrainer {
  isChecked: boolean
}

interface IStudent {
  submissions: string[]
  labs: string[]
}
