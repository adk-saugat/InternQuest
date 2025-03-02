import jwt from "jsonwebtoken"

const generateAuthToken = (user) => {
  const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY)

  return token
}

export { generateAuthToken }
