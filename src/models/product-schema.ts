import mongoose from "mongoose";
export const productSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 50,
    lowercase: true,
    trim: true,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
  stock: {
    type: Number,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  description: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});
