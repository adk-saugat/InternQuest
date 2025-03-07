import { GoHome } from "react-icons/go"
import { IoBookOutline } from "react-icons/io5"
import { CgProfile } from "react-icons/cg"
import { IoSettingsOutline } from "react-icons/io5"
import { BiLogOut } from "react-icons/bi"
import { BiHelpCircle } from "react-icons/bi"

function Sidebar({ setActivePage }) {
  return (
    <div className="w-full my-8 flex flex-col items-center">
      <ul className="flex flex-col gap-4 text-lg">
        <li
          onClick={() => setActivePage("dashboard")}
          className="px-8 py-2 hover:bg-gray-600 hover:shadow-2xl flex items-center gap-2 cursor-pointer"
        >
          <GoHome />
          <span>Dashboard</span>
        </li>
        <li
          onClick={() => setActivePage("internships")}
          className="px-8 py-2 hover:bg-gray-600 hover:shadow-2xl flex items-center gap-2 cursor-pointer"
        >
          <IoBookOutline />
          <span>Internships</span>
        </li>
        <li
          onClick={() => setActivePage("settings")}
          className="px-8 py-2 hover:bg-gray-600 hover:shadow-2xl flex items-center gap-2 cursor-pointer"
        >
          <IoSettingsOutline />
          <span>Settings</span>
        </li>
        <li
          onClick={() => setActivePage("help")}
          className="px-8 py-2 hover:bg-gray-600 hover:shadow-2xl flex items-center gap-2 cursor-pointer"
        >
          <BiHelpCircle />
          <span>Help</span>
        </li>
        <li className="px-8 py-2 mt-80 hover:bg-gray-600 hover:shadow-2xl flex items-center gap-2 cursor-pointer">
          <BiLogOut />
          <span>Log Out</span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
