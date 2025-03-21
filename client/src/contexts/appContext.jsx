import { createContext, useReducer } from "react"
import axios from "axios"

axios.defaults.baseURL = "http://localhost:8000"

export const AppContext = createContext({
  applications: null,
  dispatchApp: () => {},
})

const appReducer = (applications, action) => {
  const { type, payload } = action

  switch (type) {
    case "CREATE_APPLICATION": {
      createApplication(payload)
      return applications
    }
    default:
      return applications
  }
}

const AppProvider = ({ children }) => {
  const [applications, dispatchApp] = useReducer(appReducer)

  const value = { applications, dispatchApp }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider

const createApplication = async (appData) => {
  try {
    const token = localStorage.getItem("auth-token")
    const application = await axios.post("/applications/create", appData, {
      headers: {
        "auth-token": token,
      },
    })
    console.log("Created!")
  } catch (error) {
    console.log(error)
  }
}
