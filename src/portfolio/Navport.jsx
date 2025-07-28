import React from 'react'
import { Link } from 'react-router-dom'




function Navport() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex justify-between items-center px-6 sm:px-10 py-5 backdrop-blur-md bg-gradient-to-r from-[#0f172a]/70 to-[#1e293b]/70  border-white/10">
    
      {/* Logo */}
      <Link to="/">
      <div className="text-3xl font-cursive text-white select-none">
        Krish Patidar
      </div>
      </Link>

      {/* Icons */}
      <div className="flex gap-5 bg-white/5 px-6 py-2.5 rounded-full border border-white/10 shadow-md">

        <Link to="/">
          <button className="text-white text-xl hover:text-blue-400 transition" title="Home">🏠</button>
        </Link>
        <Link to="/skills" >
          <button className="text-white text-xl hover:text-yellow-400 transition" title="Projects">💡</button>
        </Link>
        <Link to="/about">
          <button className="text-white text-xl hover:text-purple-400 transition" title="About Me">👤</button>
        </Link>

      </div>
    </nav>
  )
}

export default Navport