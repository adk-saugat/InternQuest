import jwt from "jsonwebtoken"
import { User } from "../model/userModel.js"

const auth = async (req, res, next) => {
  try {
    const token = req.header("auth-token")
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    const user = await User.findOne({ _id: decoded._id, token })

    if (!user) {
      throw new Error()
    }

    req.user = user
    next()
  } catch (error) {
    res.status(400).send({ error: "Please Authenticate!" })
  }
}

export { auth }
