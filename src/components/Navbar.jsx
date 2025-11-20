import React from 'react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-sm">AC</div>
          <div className="leading-tight">
            <p className="font-bold text-slate-800">City Airconditioner</p>
            <p className="text-[11px] text-slate-500">Sales • Service • Installation</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="text-slate-700 hover:text-blue-700 transition">Services</a>
          <a href="#why-us" className="text-slate-700 hover:text-blue-700 transition">Why Us</a>
          <a href="#contact" className="text-slate-700 hover:text-blue-700 transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+916366211464" className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md bg-blue-600 text-white text-sm font-medium shadow hover:bg-blue-700 transition">
            <span>Call Now</span>
          </a>
          <a href="https://wa.me/917829721166" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-300 text-slate-700 text-sm font-medium hover:border-blue-400 hover:text-blue-700 transition">
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar