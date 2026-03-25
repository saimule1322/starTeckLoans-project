// Services.jsx — Loan types displayed in a polished card grid
import React from 'react'
import { Link } from 'react-router-dom'

// ── Loan type data ────────────────────────────────────────────────────────
const LOANS = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    tag: 'Most Popular',
    tagColor: 'bg-blue-100 text-blue-700',
    iconBg: 'bg-blue-600',
    title: 'Home Loan',
    shortDesc: 'Finance your dream home with flexible tenure and low EMIs',
    rate: '8.5% p.a.',
    tenure: 'Up to 30 yrs',
    amount: 'Up to ₹5 Cr',
    features: [
      'Balance transfer facility',
      'Tax benefits under Sec 80C',
      'No prepayment charges',
      'Quick digital verification',
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    tag: 'No Collateral',
    tagColor: 'bg-green-100 text-green-700',
    iconBg: 'bg-emerald-600',
    title: 'Personal Loan',
    shortDesc: 'Instant funds for any personal need — no collateral required',
    rate: '10.5% p.a.',
    tenure: 'Up to 5 yrs',
    amount: 'Up to ₹50 L',
    features: [
      'Disbursed within 24 hours',
      'Zero collateral required',
      'Flexible repayment options',
      'Minimal documentation',
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    tag: 'Growth Focused',
    tagColor: 'bg-purple-100 text-purple-700',
    iconBg: 'bg-violet-600',
    title: 'Business Loan',
    shortDesc: 'Fuel your business expansion with tailored financing solutions',
    rate: '12% p.a.',
    tenure: 'Up to 10 yrs',
    amount: 'Up to ₹2 Cr',
    features: [
      'Working capital support',
      'Equipment financing',
      'GST-based eligibility',
      'Doorstep documentation',
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    tag: 'Study Abroad Ready',
    tagColor: 'bg-amber-100 text-amber-700',
    iconBg: 'bg-orange-500',
    title: 'Education Loan',
    shortDesc: 'Invest in knowledge — fund premier institutions in India & abroad',
    rate: '9% p.a.',
    tenure: 'Up to 15 yrs',
    amount: 'Up to ₹1.5 Cr',
    features: [
      'Covers all course expenses',
      'Moratorium during course',
      'Tax benefit under Sec 80E',
      'Study abroad coverage',
    ],
  },
]

// ── EMI Calculator (simple inline component) ──────────────────────────────
function EmiCalculator() {
  const [principal, setPrincipal] = React.useState(3000000)
  const [rate, setRate]           = React.useState(8.5)
  const [tenure, setTenure]       = React.useState(20)

  // Standard EMI formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const monthlyRate = rate / 100 / 12
  const months      = tenure * 12
  const emi         = Math.round(
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1)
  )
  const totalPaid   = emi * months
  const totalInt    = totalPaid - principal

  const fmt = (n) => `₹${(n / 100000).toFixed(1)}L`

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
      <h3 className="font-display text-xl font-bold text-gray-900 mb-6">EMI Calculator</h3>

      <div className="space-y-5">
        {/* Loan Amount */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-gray-600">Loan Amount</label>
            <span className="text-sm font-semibold text-blue-700">{fmt(principal)}</span>
          </div>
          <input type="range" min="500000" max="10000000" step="100000"
            value={principal} onChange={e => setPrincipal(+e.target.value)}
            className="w-full accent-blue-600 cursor-pointer" />
        </div>

        {/* Interest Rate */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-gray-600">Interest Rate</label>
            <span className="text-sm font-semibold text-blue-700">{rate}%</span>
          </div>
          <input type="range" min="7" max="18" step="0.5"
            value={rate} onChange={e => setRate(+e.target.value)}
            className="w-full accent-blue-600 cursor-pointer" />
        </div>

        {/* Tenure */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-gray-600">Tenure</label>
            <span className="text-sm font-semibold text-blue-700">{tenure} yrs</span>
          </div>
          <input type="range" min="1" max="30" step="1"
            value={tenure} onChange={e => setTenure(+e.target.value)}
            className="w-full accent-blue-600 cursor-pointer" />
        </div>
      </div>

      {/* Results */}
      <div className="mt-6 bg-blue-50 rounded-xl p-5 grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="font-display text-lg font-bold text-blue-700">
            ₹{emi.toLocaleString('en-IN')}
          </div>
          <div className="text-xs text-gray-500 mt-1">Monthly EMI</div>
        </div>
        <div>
          <div className="font-display text-lg font-bold text-gray-800">{fmt(totalPaid)}</div>
          <div className="text-xs text-gray-500 mt-1">Total Amount</div>
        </div>
        <div>
          <div className="font-display text-lg font-bold text-red-500">{fmt(totalInt)}</div>
          <div className="text-xs text-gray-500 mt-1">Total Interest</div>
        </div>
      </div>

      <Link to="/contact" className="btn-primary w-full mt-5 justify-center text-sm">
        Apply for This Loan
      </Link>
    </div>
  )
}

export default function Services() {
  return (
    <div className="pt-16">

      {/* ══════════════════════════════════════════════════════
          PAGE HERO
      ══════════════════════════════════════════════════════ */}
      <section className="hero-mesh py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-tag">Our Services</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
            Loan Products Designed<br />
            <span className="gradient-text">For Every Need</span>
          </h1>
          <p className="section-subtitle mx-auto">
            Whether you're buying a home, growing your business, or investing in education — 
            we have the right financial product for you.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          LOAN CARDS GRID
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LOANS.map(({ icon, tag, tagColor, iconBg, title, shortDesc, rate, tenure, amount, features }) => (
              <div
                key={title}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm p-7 
                           hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group"
              >
                {/* Card Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-13 h-12 w-12 ${iconBg} text-white rounded-xl flex items-center 
                                   justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {icon}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColor}`}>
                    {tag}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm mb-5">{shortDesc}</p>

                {/* Rate/Tenure/Amount badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {[
                    { label: 'Rate', val: rate },
                    { label: 'Tenure', val: tenure },
                    { label: 'Amount', val: amount },
                  ].map(({ label, val }) => (
                    <div key={label} className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs">
                      <span className="text-gray-400">{label}: </span>
                      <span className="font-semibold text-gray-700">{val}</span>
                    </div>
                  ))}
                </div>

                {/* Feature list */}
                <ul className="space-y-2 mb-6">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 
                             hover:text-blue-800 transition-colors group"
                >
                  Apply Now
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          EMI CALCULATOR SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <div>
              <p className="section-tag">Tools</p>
              <h2 className="section-title mb-5">
                Calculate Your EMI<br />Before You Apply
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Use our smart EMI calculator to instantly find out your monthly payment, 
                total interest payable, and total outflow — helping you plan with confidence.
              </p>
              <div className="space-y-3">
                {[
                  'Adjust loan amount from ₹5L to ₹1Cr',
                  'Compare interest rates from 7% – 18%',
                  'Choose tenure from 1 to 30 years',
                  'Instant recalculation on every change',
                ].map(point => (
                  <div key={point} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <EmiCalculator />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ELIGIBILITY CHECKLIST
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-tag">Eligibility</p>
            <h2 className="section-title">Who Can Apply?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { title: 'Age', desc: '21 – 65 years at loan maturity' },
              { title: 'Income', desc: 'Salaried or self-employed with stable income' },
              { title: 'CIBIL Score', desc: '700+ for best interest rates' },
              { title: 'Employment', desc: 'Min. 2 years in current job/business' },
            ].map(({ title, desc }) => (
              <div key={title} className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="font-display text-lg font-bold text-blue-700 mb-2">{title}</div>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
