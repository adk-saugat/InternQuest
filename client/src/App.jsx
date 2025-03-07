import { Route, Routes } from "react-router"
import "./App.css"

import LoginPage from "./routes/LoginPage"
import SignupPage from "./routes/SignupPage"
import DashboardPage from "./routes/DashboardPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  )
}

export default App
