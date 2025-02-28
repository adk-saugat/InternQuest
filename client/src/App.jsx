import { Route, Routes } from "react-router"
import "./App.css"

import LoginPage from "./routes/LoginPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  )
}

export default App
