function Dashboard() {
  return (
    <div className="w-full h-screen box-border">
      <header className="h-[10%] px-8 flex flex-row items-center justify-between">
        <h1 className="text-3xl font-normal">Hello, Saugat!</h1>
        <div className="flex flex-row items-center"></div>
      </header>
      <section className="h-[25%] bg-neutral-100 grid grid-cols-4 gap-6 p-4">
        <div className="text-gray-700 p-4 bg-white shadow-md rounded-lg cursor-pointer">
          Hello
        </div>
        <div className="text-gray-700 p-4 bg-white shadow-md rounded-lg cursor-pointer">
          Hello
        </div>
        <div className="text-gray-700 p-4 bg-white shadow-md rounded-lg cursor-pointer">
          Hello
        </div>
        <div className="text-gray-700 p-4 bg-white shadow-md rounded-lg cursor-pointer">
          Hello
        </div>
      </section>
      <section className="h-[65%] bg-neutral-100 grid grid-cols-3 gap-6 p-4 pt-0">
        <div className="text-gray-700 p-4 bg-white shadow-md rounded-lg cursor-pointer col-span-2">
          Hello
        </div>
        <div className="text-gray-700 p-4 bg-white shadow-md rounded-lg cursor-pointer">
          Hello
        </div>
      </section>
    </div>
  )
}

export default Dashboard
