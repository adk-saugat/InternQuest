import { createContext, useReducer } from "react"
import axios from "axios"

axios.defaults.baseURL = "http://localhost:8000"

export const UserContext = createContext({
  user: null,
  dispatchUser: () => {},
})

const userReducer = (user, action) => {
  const { type, payload } = action

  switch (type) {
    case "REGISTER_USER": {
      user = registerUser(payload)
      return user
    }

    case "LOGIN_USER": {
      user = loginUser(payload)
      return user
    }

    case "LOGOUT_USER": {
      logoutUser()
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
    const user = await axios.post("/users/register", userCredential)
    localStorage.setItem("auth-token", user.data.token)
    return user
  } catch (error) {
    console.log(error.response.data)
  }
}

// Login User
const loginUser = async (userCredential) => {
  console.log("login User")
  try {
    const user = await axios.post("/users/login", userCredential)
    localStorage.setItem("auth-token", user.data.token)
    return user
  } catch (error) {
    console.log(error.response.data)
  }
}

const logoutUser = async () => {
  try {
    const token = localStorage.getItem("auth-token")
    const user = await axios.post(
      "/users/logout",
      {},
      {
        headers: {
          "auth-token": token,
        },
      }
    )
    localStorage.removeItem("auth-token")
  } catch (error) {
    console.log(error)
  }
}
