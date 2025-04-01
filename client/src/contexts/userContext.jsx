import { createContext, useReducer } from "react"
import axios from "axios"

axios.defaults.baseURL = "http://localhost:8000"

export const UserContext = createContext({
  user: null,
  dispatchUser: () => {},
  registerUser: () => {},
  loginUser: () => {},
  logoutUser: () => {},
})

const userReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case "REGISTER_USER": {
      return { ...state, user: payload }
    }

    case "LOGIN_USER": {
      return { ...state, user: payload }
    }

    case "LOGOUT_USER": {
      return { ...state, user: null }
    }

    default:
      return user
  }
}

const UserProvider = ({ children }) => {
  const [user, dispatchUser] = useReducer(userReducer, { user: null })

  // Registering User
  const registerUser = async (userCredential) => {
    try {
      const user = await axios.post("/users/register", userCredential)
      localStorage.setItem("auth-token", user.data.token)
      dispatchUser({ type: "REGISTER_USER", payload: user.data })
    } catch (error) {
      console.log(error.response.data)
    }
  }

  // Login User
  const loginUser = async (userCredential) => {
    try {
      const user = await axios.post("/users/login", userCredential)
      localStorage.setItem("auth-token", user.data.token)
      dispatchUser({ type: "LOGIN_USER", payload: user.data })
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
      dispatchUser({ type: "LOGIN_USER" })
    } catch (error) {
      console.log(error)
    }
  }

  const value = { user, dispatchUser, registerUser, loginUser, logoutUser }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
