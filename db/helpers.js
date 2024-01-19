import mongoose from "mongoose";

export function connectDB() {
  return mongoose.connect(process.env.DATABASE_URI)
}

export function truncateDb() {
  if (mongoose.connection.readyState !== 0) {
    const { collections } = mongoose.connection
    const promises = Object.keys(collections).map(collection => {
      return mongoose.connection.collection(collection).deleteMany({})
    })

    return Promise.all(promises)
  }
}

export function disconnectDb() {
  if (mongoose.connection.readyState !== 0) {
    return mongoose.disconnect()
  }
}