import { IoIosAdd } from "react-icons/io"
import { CiSearch } from "react-icons/ci"
import { useState } from "react"
import AddApplication from "./AddApplication"

function Internships() {
  const [showAdd, setShowAdd] = useState(false)

  return (
    <div className="w-full h-full py-6">
      <header className="h-[10%] px-4 flex flex-row items-center justify-between">
        <h1 className="text-3xl font-normal">Internships</h1>
        <div className="flex flex-row items-center">
          <CiSearch size="20" className="mr-[-30px]" />
          <input
            type="text"
            className="border border-gray-600 rounded-2xl pl-10 py-2 w-[450px]"
            placeholder="Search"
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
      <section></section>
    </div>
  )
}

export default Internships
