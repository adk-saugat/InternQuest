import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../contexts/userContext"

import { GoHome } from "react-icons/go"
import { IoBookOutline } from "react-icons/io5"
import { IoSettingsOutline } from "react-icons/io5"
import { BiLogOut } from "react-icons/bi"
import { BiHelpCircle } from "react-icons/bi"

function Sidebar({ setActivePage }) {
  const { dispatchUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogOut = (e) => {
    e.preventDefault()
    dispatchUser({ type: "LOGOUT_USER" })
    navigate("/")
  }
  return (
    <div className="w-full my-8 flex flex-col items-center">
      <ul className="flex flex-col gap-4 text-lg">
        <li
          onClick={() => setActivePage("dashboard")}
          className="px-8 py-2 hover:bg-gray-600 hover:shadow-2xl flex items-center gap-2 cursor-pointer"
        >
          <GoHome size="25" />
          <span>Dashboard</span>
        </li>
        <li
          onClick={() => setActivePage("internships")}
          className="px-8 py-2 hover:bg-gray-600 hover:shadow-2xl flex items-center gap-2 cursor-pointer"
        >
          <IoBookOutline size="25" />
          <span>Internships</span>
        </li>
        <li
          onClick={() => setActivePage("settings")}
          className="px-8 py-2 hover:bg-gray-600 hover:shadow-2xl flex items-center gap-2 cursor-pointer"
        >
          <IoSettingsOutline size="25" />
          <span>Settings</span>
        </li>
        <li
          onClick={() => setActivePage("help")}
          className="px-8 py-2 hover:bg-gray-600 hover:shadow-2xl flex items-center gap-2 cursor-pointer"
        >
          <BiHelpCircle size="25" />
          <span>Help</span>
        </li>
        <li
          onClick={handleLogOut}
          className="px-8 py-2 mt-80 hover:bg-gray-600 hover:shadow-2xl flex items-center gap-2 cursor-pointer"
        >
          <BiLogOut size="25" />
          <span>Log Out</span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
