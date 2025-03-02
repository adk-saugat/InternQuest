import jwt from "jsonwebtoken"
import { User } from "../model/userModel.js"

const auth = (req, res) => {
  try {
    const {} = req.body
  } catch (error) {
    res.status(400).send()
  }
}
