// Contact.jsx — Contact info + functional form with validation
import React, { useState } from 'react'
import axios from 'axios'

// ── Contact info config ───────────────────────────────────────────────────
const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Visit Us',
    value: '4th Floor, Skyline Towers, Banjara Hills, Hyderabad – 500034',
    sub: 'Open Mon–Sat, 9 AM – 6 PM',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Call Us',
    value: '+91 63044 49153',
    sub: 'Mon–Sat 9 AM to 7 PM',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email Us',
    value: 'startechecommerce786@gmail.com',
    sub: 'Response within 2 business hours',
    color: 'bg-purple-100 text-purple-600',
  },
]

// ── Default form state ────────────────────────────────────────────────────
const INITIAL_FORM = {
  name: '',
  location: '',
  loanType: '',
  accountType: '',
  message: '',
}

export default function Contact() {
  // Form field values
  const [form, setForm] = useState(INITIAL_FORM)
  // Validation errors per field
  const [errors, setErrors] = useState({})
  // Whether the form was submitted successfully
  const [submitted, setSubmitted] = useState(false)
  // Loading state while "submitting"
  const [loading, setLoading] = useState(false)

  // ── Handle any input/select/textarea change ──
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    // Clear error for the field being edited
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  // ── Validate required fields ──
  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Full name is required'
    if (!form.location.trim()) newErrors.location = 'Location is required'
    if (!form.loanType) newErrors.loanType = 'Please select a loan type'
    return newErrors
  }

  // ── Handle form submission ──
  // const handleSubmit = async (e) => {
  //   e.preventDefault()  // prevent page reload

  //   const validationErrors = validate()
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors)
  //     return
  //   }

  //   // Simulate API call with a short delay
  //   setLoading(true)
  //   await new Promise(resolve => setTimeout(resolve, 1200))
  //   setLoading(false)

  //   // Mark as successfully submitted & reset form
  //   setSubmitted(true)
  //   setForm(INITIAL_FORM)
  //   setErrors({})
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)

    try {
      const response = await axios.post('http://localhost:5000/api/contact', form)

      if (response.data.success) {
        setSubmitted(true)
        setForm(INITIAL_FORM)
        setErrors({})
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to submit. Try again.')
    }

    setLoading(false)
  }

  // ── Reset to show form again ──
  const handleReset = () => setSubmitted(false)

  return (
    <div className="pt-16">

      {/* ══════════════════════════════════════════════════════
          PAGE HERO
      ══════════════════════════════════════════════════════ */}
      <section className="hero-mesh py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-tag">Contact Us</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
            We're Here to <span className="gradient-text">Help You</span>
          </h1>
          <p className="section-subtitle mx-auto">
            Have a question or ready to apply? Reach out to our team of expert loan advisors
            today and get personalised guidance.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CONTACT INFO CARDS
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTACT_INFO.map(({ icon, label, value, sub, color }) => (
              <div key={label} className="card flex flex-col items-start gap-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color}`}>
                  {icon}
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                    {label}
                  </div>
                  <div className="font-semibold text-gray-900 text-sm leading-relaxed">{value}</div>
                  <div className="text-xs text-gray-400 mt-1">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CONTACT FORM
      ══════════════════════════════════════════════════════ */}
      <section className="py-8 pb-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

            {/* Left: intro text */}
            <div className="lg:col-span-2 pt-4">
              <p className="section-tag">Get in Touch</p>
              <h2 className="section-title mb-5">Apply or Ask — We'll<br />Respond Promptly</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Fill in the quick form and one of our advisors will connect with you
                within 2 business hours. No spam, no hassle.
              </p>

              {/* Quick contact methods */}
              <div className="space-y-4">
                {[
                  { label: 'WhatsApp', val: '+91 63044 49153', icon: '💬' },
                  { label: 'Email', val: 'startechecommerce786@gmail.com', icon: '✉️' },
                  { label: 'Hours', val: 'Mon–Sat, 9 AM – 7 PM', icon: '🕘' },
                ].map(({ label, val, icon }) => (
                  <div key={label} className="flex items-center gap-3 text-sm">
                    <span className="text-lg">{icon}</span>
                    <div>
                      <div className="text-gray-400 text-xs">{label}</div>
                      <div className="font-medium text-gray-700">{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form card */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">

                {/* ── SUCCESS STATE ── */}
                {submitted ? (
                  <div className="py-10 text-center">
                    {/* Animated checkmark */}
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center 
                                    mx-auto mb-5">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">
                      Application Received!
                    </h3>
                    <p className="text-gray-500 mb-6 max-w-sm mx-auto text-sm leading-relaxed">
                      Thank you for reaching out. Our loan advisor will contact you within
                      2 business hours to discuss your requirements.
                    </p>
                    <button onClick={handleReset} className="btn-outline">
                      Submit Another Query
                    </button>
                  </div>

                ) : (

                  /* ── FORM ── */
                  <form onSubmit={handleSubmit} noValidate>
                    <h3 className="font-display text-xl font-bold text-gray-900 mb-6">
                      Loan Enquiry Form
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                      {/* Name */}
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="e.g. Priya Sharma"
                          className={`input-field ${errors.name ? 'border-red-400 ring-1 ring-red-300' : ''}`}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Location */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Location <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={form.location}
                          onChange={handleChange}
                          placeholder="City, State"
                          className={`input-field ${errors.location ? 'border-red-400 ring-1 ring-red-300' : ''}`}
                        />
                        {errors.location && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.location}
                          </p>
                        )}
                      </div>

                      {/* Loan Type */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Loan Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="loanType"
                          value={form.loanType}
                          onChange={handleChange}
                          className={`input-field ${errors.loanType ? 'border-red-400 ring-1 ring-red-300' : ''}`}
                        >
                          <option value="">Select loan type</option>
                          <option value="home">Home Loan</option>
                          <option value="personal">Personal Loan</option>
                          <option value="business">Business Loan</option>
                          <option value="education">Education Loan</option>
                        </select>
                        {errors.loanType && (
                          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.loanType}
                          </p>
                        )}
                      </div>

                      {/* Account Type */}
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Account Type
                        </label>
                        {/* Segmented toggle buttons */}
                        <div className="flex gap-3">
                          {['Savings', 'Current'].map(type => (
                            <button
                              type="button"
                              key={type}
                              onClick={() => setForm(prev => ({ ...prev, accountType: type }))}
                              className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200
                                ${form.accountType === type
                                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                                  : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
                                }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Message */}
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Message / Remarks
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Tell us about your loan requirement, budget, or any questions you have..."
                          className="input-field resize-none"
                        />
                      </div>
                    </div>

                    {/* Privacy note */}
                    <p className="text-xs text-gray-400 mt-4 mb-5">
                      🔒 Your information is encrypted and will never be shared with third parties.
                    </p>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Submitting…
                        </>
                      ) : (
                        <>
                          Submit Enquiry
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BRANCH LOCATIONS STRIP
      ══════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
              Our Branches
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Hyderabad', 'Mumbai', 'Bengaluru', 'Chennai', 'Delhi', 'Pune', 'Kolkata', 'Ahmedabad'].map(city => (
              <div key={city}
                className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm 
                           font-medium text-gray-600 hover:border-blue-300 hover:text-blue-600 
                           hover:bg-blue-50 transition-all duration-200 cursor-pointer">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
