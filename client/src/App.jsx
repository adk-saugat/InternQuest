import { Route, Routes } from "react-router"
import "./App.css"

import LoginPage from "./routes/LoginPage"
import SignupPage from "./routes/SignupPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  )
}

export default App
