import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import Dashboard from "../components/Dashboard"
import Sidebar from "../components/Sidebar"
import Internships from "../components/Internships"

function DashboardPage() {
  const [activePage, setActivePage] = useState("dashboard")
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.length == 0) {
      //navigate("/")
    }
  }, [])
  return (
    <div className="w-screen h-screen flex">
      <div className="w-[15%] h-full bg-[#212529] text-white min-w-[200px]">
        <h1 className="font-advent text-4xl pt-6 text-center">
          Intern<span className="underline underline-offset-6">Quest</span>
        </h1>
        <Sidebar setActivePage={setActivePage} />
      </div>
      {activePage === "dashboard" && <Dashboard />}
      {activePage === "internships" && <Internships />}
    </div>
  )
}

export default DashboardPage
