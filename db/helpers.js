import mongoose from "mongoose";

export function connectDB() {
  return mongoose.connect(process.env.DATABASE_URI)
}