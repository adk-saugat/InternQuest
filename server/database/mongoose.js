import mongoose from "mongoose"

try {
  mongoose.connect(process.env.MONGO_URI)
  console.log("Database Connected!")
} catch (error) {
  console.log(error)
}
