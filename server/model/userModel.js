import mongoose from "mongoose"
import validator from "validator"

const userSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Should be a valid email!")
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Should not contain the word 'password'!")
      }
    },
  },
  token: {
    type: String,
  },
})

const User = mongoose.model("User", userSchema)

export { User }
