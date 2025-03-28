import { Route, Routes } from "react-router"
import "./App.css"

import LoginPage from "./routes/LoginPage"
import SignupPage from "./routes/SignupPage"
import DashboardPage from "./routes/DashboardPage"
import Dashboard from "./components/Dashboard"
import Internships from "./components/Internships"

function App() {
  return (
    <div className="font-libre">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<Dashboard />} />
          <Route path="internships" element={<Internships />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
