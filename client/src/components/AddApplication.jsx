import { useContext, useState } from "react"
import { IoCloseSharp } from "react-icons/io5"
import { AppContext } from "../contexts/appContext"

const defaultAddForm = {
  companyName: "",
  position: "",
  status: "Applied",
  link: "",
  notes: "",
}

function AddApplication({ setShowAdd }) {
  const [addForm, setAddForm] = useState(defaultAddForm)
  const { companyName, position, status, link, notes } = addForm

  const { createApplication } = useContext(AppContext)

  const handleAddApplication = (e) => {
    e.preventDefault()
    createApplication(addForm)
    setShowAdd(false)
  }

  return (
    <div className="bg-[rgba(0,0,0,0.4)] w-screen h-screen absolute top-0 left-0 flex justify-center items-center">
      <div className="w-[600px] h-fit bg-white rounded-2xl p-6">
        <header className="w-full flex justify-between">
          <div>
            <h1 className="text-3xl font-normal">Add Application</h1>
            <p className="text-gray-500 text-md">
              Fill in the data below to add an application
            </p>
          </div>

          <IoCloseSharp
            className="p-1 cursor-pointer hover:shadow-2xl hover:bg-gray-200 hover:rounded-2xl"
            onClick={() => setShowAdd(false)}
            size={30}
          />
        </header>
        <form onSubmit={handleAddApplication} className="mt-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700">Company Name</label>
            <input
              className="border border-gray-400 p-2 rounded-lg text-md"
              onChange={(e) =>
                setAddForm({ ...addForm, companyName: e.target.value })
              }
              name="companyName"
              value={companyName}
              type="text"
              placeholder="e.g. Google"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700 mt-2">Position</label>
            <input
              className="border border-gray-400 p-2 rounded-lg text-md"
              onChange={(e) =>
                setAddForm({ ...addForm, position: e.target.value })
              }
              name="position"
              value={position}
              type="text"
              placeholder="e.g. Software Engineer Intern"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700 mt-2">Status</label>
              <select
                onChange={(e) =>
                  setAddForm({ ...addForm, status: e.target.value })
                }
                name="status"
                value={status}
                className="w-fit text-center p-2 border border-gray-400 rounded-lg text-md text-gray-500"
              >
                <option value="Applied">Applied</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm text-gray-700 mt-2">Link</label>
              <input
                type="url"
                onChange={(e) =>
                  setAddForm({ ...addForm, link: e.target.value })
                }
                name="link"
                value={link}
                className="border border-gray-400 p-2 rounded-lg text-md w-cover"
                placeholder="e.g. www.linkedin.com/jobs/chime"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700 mt-2">Notes</label>
            <textarea
              onChange={(e) =>
                setAddForm({ ...addForm, notes: e.target.value })
              }
              name="notes"
              value={notes}
              className="border border-gray-400 p-2 rounded-lg text-md w-cover h-30"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-cover mt-4 text-lg bg-[#212529] px-10 py-2 rounded-2xl text-white cursor-pointer hover:shadow-lg hover:bg-[#353535]"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddApplication
