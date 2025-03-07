import { createContext, useReducer } from "react"
import axios from "axios"

export const UserContext = createContext()

const userReducer = (user, action) => {
  const { type, payload } = action

  switch (type) {
    case "REGISTER_USER": {
      registerUser(payload)
      return user
    }

    case "LOGIN_USER": {
      loginUser(payload)
      return user
    }

    default:
      return user
  }
}

const UserProvider = ({ children }) => {
  const [user, dispatchUser] = useReducer(userReducer)

  const value = { user, dispatchUser }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider

// Registering User
const registerUser = async (userCredential) => {
  try {
    const user = await axios.post(
      "http://localhost:3000/users/register",
      userCredential
    )
    localStorage.setItem("auth_token", user.data.token)
  } catch (error) {
    console.log(error.response.data)
  }
}

// Login User
const loginUser = async (userCredential) => {
  console.log("login User")
  try {
    const user = await axios.post(
      "http://localhost:3000/users/login",
      userCredential
    )
    localStorage.setItem("auth_token", user.data.token)
  } catch (error) {
    console.log(error.response.data)
  }
}
