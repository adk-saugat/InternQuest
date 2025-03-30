import { useEffect, useState } from "react"

function AppCard({ application }) {
  const [color, setColor] = useState("bg-blue-200")
  const { companyName, position, status, link, notes } = application

  useEffect(() => {
    if (status === "Rejected") {
      setColor("bg-red-200")
    } else if (status === "Accepted") {
      setColor("bg-green-200")
    }
  }, [])

  return (
    <div className="flex flex-col justify-between text-gray-700 p-4 h-[280px] bg-white shadow-md rounded-md cursor-pointer hover:shadow-2xl hover:scale-105 transition duration-100">
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
    </div>
  )
}

export default AppCard
