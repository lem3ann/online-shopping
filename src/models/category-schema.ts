import mongoose from "mongoose";
export const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    min: 3,
    max: 50,
    required: true,
    trim: true,
    lowercase: true,
  },
  description: {
    type: String,
    max: 500,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});
