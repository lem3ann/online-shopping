import mongoose from "mongoose";
export const productSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 3,
    max: 50,
    lowercase: true,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
  stock: {
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
  },
  description: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});
