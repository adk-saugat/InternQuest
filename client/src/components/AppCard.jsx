import { useContext, useEffect, useState } from "react"
import { FaTrashAlt } from "react-icons/fa"
import { AppContext } from "../contexts/appContext"
import { useNavigate } from "react-router-dom"

function AppCard({ application }) {
  const [color, setColor] = useState("bg-blue-200")
  const { companyName, position, status, link, notes, _id } = application

  const navigate = useNavigate()
  const { deleteApplication } = useContext(AppContext)

  useEffect(() => {
    if (status === "Rejected") {
      setColor("bg-red-200")
    } else if (status === "Accepted") {
      setColor("bg-green-200")
    }
  }, [])

  const handleAppDelete = (e) => {
    e.preventDefault()
    deleteApplication(_id)
  }

  return (
    <div className="flex flex-col justify-between text-gray-700 p-4 h-[280px] bg-white shadow-md rounded-md hover:shadow-2xl hover:scale-105 transition duration-100">
      <div>
        <div className="flex justify-between mb-4 items-center">
          <h1 className="text-lg">{companyName}</h1>
          <div
            className={`${color} px-3 py-1.5 rounded-2xl font-semibold flex items-center`}
          >
            <span className="text-sm">{status}</span>
          </div>
        </div>
        <div className="text-xl font-semibold mb-2">{position}</div>
        <div>
          <span className="text-sm">{notes}</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          {link && (
            <a
              href={link}
              target="_blank"
              className="text-blue-500 hover:underline underline-offset-5"
            >
              <span className="text-sm"> Visit the Job Page!</span>
            </a>
          )}
        </div>
        <FaTrashAlt
          color="red"
          className="cursor-pointer"
          onClick={handleAppDelete}
        />
      </div>
    </div>
  )
}

export default AppCard
