import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)

  const sendWhatsApp = (e) => {
    e.preventDefault()
    const text = `Hello City Airconditioner,%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`
    const url = `https://wa.me/917829721166?text=${text}`
    window.open(url, '_blank')
  }

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 sm:p-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Get in touch</h3>
              <p className="text-slate-700">Call us for quick booking or send your details and our team will call back shortly.</p>

              <div className="space-y-3 text-slate-700">
                <a href="tel:+916366211464" className="block p-3 rounded-lg border border-slate-200 hover:border-blue-400 hover:text-blue-700 transition">📞 63662 11464</a>
                <a href="tel:+917829721166" className="block p-3 rounded-lg border border-slate-200 hover:border-blue-400 hover:text-blue-700 transition">📞 78297 21166</a>
                <a href="mailto:contact@cityac.in" className="block p-3 rounded-lg border border-slate-200 hover:border-blue-400 hover:text-blue-700 transition">✉️ contact@cityac.in</a>
                <p className="text-sm text-slate-500">Service hours: 9:00 AM – 8:00 PM (Mon–Sun)</p>
              </div>
            </div>

            <form onSubmit={sendWhatsApp} className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input value={name} onChange={(e)=>setName(e.target.value)} required placeholder="Your name" className="p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input value={phone} onChange={(e)=>setPhone(e.target.value)} required placeholder="Phone number" className="p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows="4" placeholder="How can we help you?" className="sm:col-span-2 p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <div className="sm:col-span-2 flex flex-wrap gap-3">
                <button type="submit" className="inline-flex items-center px-5 py-3 rounded-md bg-green-600 text-white font-medium shadow hover:bg-green-700 transition">Send on WhatsApp</button>
                <a href="tel:+916366211464" className="inline-flex items-center px-5 py-3 rounded-md border border-slate-300 text-slate-700 font-medium hover:border-blue-400 hover:text-blue-700 transition">Call Now</a>
              </div>
              {status && <p className="text-sm text-green-700">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact