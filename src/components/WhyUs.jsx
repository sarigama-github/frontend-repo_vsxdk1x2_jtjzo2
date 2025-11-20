import React from 'react'

const points = [
  'Trained technicians with proper tools',
  'Genuine spare parts and refrigerants',
  'On-time service with clear communication',
  'Upfront pricing – no hidden charges',
  'Service across major Indian cities',
]

const WhyUs = () => {
  return (
    <section id="why-us" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Why Choose Us</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            {points.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-green-500 text-white text-sm flex items-center justify-center">✓</div>
                <p className="text-slate-700">{p}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-slate-700">We are your local AC experts. From buying advice to professional installation and emergency repairs, we handle it all with care. Our goal is simple: cool comfort at fair prices.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                <p className="text-2xl font-bold text-blue-700">10+ yrs</p>
                <p className="text-xs text-blue-700/80">Experience</p>
              </div>
              <div className="p-4 rounded-lg bg-green-50 border border-green-100">
                <p className="text-2xl font-bold text-green-700">1L+</p>
                <p className="text-xs text-green-700/80">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs