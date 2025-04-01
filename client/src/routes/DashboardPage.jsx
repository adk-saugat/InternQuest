import { useNavigate, Outlet } from "react-router"
import Sidebar from "../components/Sidebar"
import { useContext, useEffect } from "react"
import { UserContext } from "../contexts/userContext"

function DashboardPage() {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)

  useEffect(() => {
    const token = localStorage.getItem("auth-token")
    if (!user || !token) {
      navigate("/")
    }
  })

  return (
    <div className="w-screen h-screen flex">
      <div className="w-[15%] h-full bg-[#212529] text-white min-w-[200px]">
        <h1 className="font-advent text-3xl pt-6 text-center">
          Intern<span className="underline underline-offset-6">Quest</span>
        </h1>
        <Sidebar />
      </div>
      <Outlet />
    </div>
  )
}

export default DashboardPage
