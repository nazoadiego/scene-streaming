import React from 'react'

interface Props {}

const Sidebar: React.FC<Props> = () => {
  return (
    <>
      <div className="bg-slate-700">Search</div>
      <div className="bg-slate-500">Navbar</div>
    </>
  )
}

export default Sidebar
