import mongoose from "mongoose";
export const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 50,
    required: true,
    trim: true,
    lowercase: true,
  },
  description: {
    type: String,
    maxLength: 500,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});
