import { IoIosAdd } from "react-icons/io"
import { CiSearch } from "react-icons/ci"
import { useContext, useEffect, useState } from "react"
import AddApplication from "./AddApplication"
import { AppContext } from "../contexts/appContext"
import AppCard from "./AppCard"

function Internships() {
  const [showAdd, setShowAdd] = useState(false)
  const { applications } = useContext(AppContext)
  const [filteredApplications, setFilteredApplications] = useState(applications)

  const handleAppSearch = (e) => {
    const searchValue = e.target.value.toLowerCase()
    setFilteredApplications(
      applications.filter(
        (application) =>
          application.companyName.toLowerCase().includes(searchValue) ||
          application.position.toLowerCase().includes(searchValue)
      )
    )
  }

  useEffect(() => setFilteredApplications(applications), [applications])

  return (
    <div className="w-full h-screen box-border">
      <header className="h-[10%] px-8 flex flex-row items-center justify-between">
        <h1 className="text-3xl font-normal">Internships</h1>
        <div className="flex flex-row items-center">
          <CiSearch size="20" className="mr-[-30px]" />
          <input
            type="text"
            className="border border-gray-600 rounded-2xl pl-10 py-2 w-[450px]"
            placeholder="Search"
            onChange={handleAppSearch}
          />
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="flex flex-row items-center gap-1 bg-[#212529] px-3 py-2 rounded-2xl text-white cursor-pointer hover:shadow-lg hover:bg-[#353535]"
        >
          <IoIosAdd size="20" />
          <span>Add new Application</span>
        </button>
      </header>
      {showAdd && <AddApplication setShowAdd={setShowAdd} />}
      <section className="px-8 py-6 pb-0 grid gap-6 grid-cols-4 overflow-scroll h-[90%] bg-neutral-100">
        {filteredApplications &&
          filteredApplications.map((application) => {
            return <AppCard key={application._id} application={application} />
          })}
      </section>
    </div>
  )
}

export default Internships
