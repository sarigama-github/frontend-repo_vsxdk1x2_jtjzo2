import React from 'react'

const services = [
  { title: 'AC Installation', desc: 'Window, Split & Inverter AC installation with neat piping and proper vacuuming.' },
  { title: 'AC Repair', desc: 'All brand repairs: cooling issues, water leakage, noise, capacitor, PCB & more.' },
  { title: 'Gas Refilling', desc: 'R32, R410A, R22 refrigerant charging with leak check and performance test.' },
  { title: 'Annual Maintenance (AMC)', desc: 'Yearly maintenance plans to keep your AC running efficiently.' },
  { title: 'General & Deep Cleaning', desc: 'Coil cleaning, jet wash, chemical wash for better cooling and lower bills.' },
  { title: 'Buy New AC', desc: 'Genuine AC units from top brands with proper installation & warranty support.' },
]

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Our Services</h2>
        <p className="mt-2 text-slate-600 text-center">Fast, reliable and budget-friendly AC solutions</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition bg-gradient-to-b from-white to-slate-50">
              <div className="w-10 h-10 rounded-md bg-blue-600/10 text-blue-700 flex items-center justify-center mb-4">❄️</div>
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services