import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-white" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            City Airconditioner
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Trusted AC Sales & Service in India. We provide installation, repair, gas refilling, AMC and genuine AC units from leading brands.
          </p>
          <ul className="mt-6 space-y-2 text-slate-700">
            <li>• Same-day service in most areas</li>
            <li>• Experienced technicians</li>
            <li>• Transparent pricing</li>
            <li>• 100% satisfaction guarantee</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+916366211464" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition">Call: 63662 11464</a>
            <a href="tel:+917829721166" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-slate-900 text-white font-medium shadow hover:bg-slate-800 transition">Alt: 78297 21166</a>
          </div>
          <p className="mt-2 text-sm text-slate-500">We speak English, Hindi, and regional languages.</p>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-blue-200 via-sky-200 to-white shadow-xl border border-blue-100 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="mx-auto w-20 h-20 rounded-full bg-blue-600/10 flex items-center justify-center">
                <span className="text-3xl">❄️</span>
              </div>
              <p className="mt-4 font-semibold text-slate-800">Cooling comfort delivered</p>
              <p className="text-slate-600">Sales • Service • Installation • AMC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero