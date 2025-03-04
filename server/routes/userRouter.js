import express from "express"
import bcrypt from "bcryptjs"

import { User } from "../model/userModel.js"
import { generateAuthToken } from "../controller/generateToken.js"

const userRouter = express.Router()

// SignUp
userRouter.post("/register", async (req, res) => {
  try {
    const doesExist = await User.findOne({ username: req.body.username })

    if (doesExist) {
      throw new Error("User already exists!")
    }

    const user = new User(req.body)
    user.password = await bcrypt.hash(user.password, 8)
    user.token = generateAuthToken(user)

    await user.save()
    res.status(201).send({ token: user.token })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
})

// Login
userRouter.post("/login", async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await User.findOne({ username })

    if (!user) {
      throw new Error("User does not exists!")
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      throw new Error("Wrong User Credentials!")
    }

    const token = generateAuthToken(user)
    user.token = token
    await user.save()

    res.send({ token })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
})
export { userRouter }
