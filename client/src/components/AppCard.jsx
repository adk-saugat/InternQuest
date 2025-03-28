function AppCard({ application }) {
  const { companyName, position, status, link, notes } = application
  return (
    <div className="p-4 h-[260px] bg-[#e9ecef] shadow-lg rounded-md">
      <div>{companyName}</div>
      <div>{position}</div>
      <div>{status}</div>
      <a>{link}</a>
      <div>{notes}</div>
    </div>
  )
}

export default AppCard
