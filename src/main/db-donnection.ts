import mongoose from "mongoose";

export async function connectToDatabase() {
  if (!process.env.MONGO_URL) {
    throw new Error("Not found ...");
  }
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connected ...");
  } catch (err) {
    console.log(err);
  }
}
