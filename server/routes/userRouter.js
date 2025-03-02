import express from "express"
import bcrypt from "bcryptjs"

import { User } from "../model/userModel.js"
import { generateAuthToken } from "../controller/generateToken.js"

const userRouter = express.Router()

userRouter.post("/register", async (req, res) => {
  try {
    const doesExist = await User.findOne({ username: req.username })

    if (doesExist) {
      throw new Error("User already exists!")
    }

    const user = new User(req.body)
    user.password = await bcrypt.hash(user.password, 8)
    user.token = generateAuthToken(user)

    user.save()
    res.status(201).send()
  } catch (error) {
    res.status(400).send()
  }
})

export { userRouter }
