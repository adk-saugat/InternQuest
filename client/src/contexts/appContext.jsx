import { createContext, useReducer, useEffect } from "react"
import axios from "axios"

axios.defaults.baseURL = "http://localhost:8000"

export const AppContext = createContext({
  applications: [],
  dispatchApp: () => {},
  createApplication: () => {},
  deleteApplication: () => {},
})

const appReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case "CREATE_APPLICATION":
      return { ...state, applications: [...state.applications, payload] }

    case "SET_APPLICATIONS":
      return { ...state, applications: payload }

    case "DELETE_APPLICATION":
      return {
        ...state,
        applications: state.applications.filter((app) => app._id !== payload),
      }

    default:
      return state
  }
}

const AppProvider = ({ children }) => {
  const [state, dispatchApp] = useReducer(appReducer, { applications: [] })

  // Fetch applications on mount
  useEffect(() => {
    fetchApplications()
  }, [])

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem("auth-token")
      const { data } = await axios.get("/applications/all", {
        headers: { "auth-token": token },
      })
      dispatchApp({ type: "SET_APPLICATIONS", payload: data })
    } catch (error) {
      console.error("Error fetching applications:", error)
    }
  }

  const createApplication = async (appData) => {
    try {
      const token = localStorage.getItem("auth-token")
      const { data } = await axios.post("/applications/create", appData, {
        headers: { "auth-token": token },
      })
      dispatchApp({ type: "CREATE_APPLICATION", payload: data })
    } catch (error) {
      console.error("Error creating application:", error)
    }
  }

  const deleteApplication = async (appId) => {
    try {
      const token = localStorage.getItem("auth-token")
      await axios.delete(`/applications/${appId}`, {
        headers: { "auth-token": token },
      })
      dispatchApp({ type: "DELETE_APPLICATION", payload: appId })
    } catch (error) {
      console.error("Error deleting application:", error)
    }
  }

  return (
    <AppContext.Provider
      value={{ ...state, dispatchApp, createApplication, deleteApplication }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
