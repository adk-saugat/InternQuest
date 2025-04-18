import { createRoot } from "react-dom/client"

import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import UserProvider from "./contexts/userContext"
import AppProvider from "./contexts/appContext.jsx"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </UserProvider>
  </BrowserRouter>
)
