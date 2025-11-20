import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Contact />
      <footer className="bg-slate-900 text-slate-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} City Airconditioner — All rights reserved.</p>
          <div className="text-sm text-slate-300">
            Made in India 🇮🇳
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App