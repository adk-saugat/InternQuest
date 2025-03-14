import mongoose from "mongoose"

const applicationSchema = new mongoose.Schema({
  companyName: {
    type: String,
    trim: true,
    required: true,
  },
  position: {
    type: String,
    trim: true,
    required: true,
  },
  status: {
    type: String,
    enum: ["Applied", "Accepted", "Rejected", "In Progress"],
    default: "Applied",
    trim: true,
  },
  link: {
    type: String,
    trim: true,
  },
  notes: {
    type: String,
    trim: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
})

const Application = mongoose.model("Application", applicationSchema)

export { Application }
