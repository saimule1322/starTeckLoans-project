// About.jsx — Company info, mission, vision, and why choose us
import React from 'react'
import { Link } from 'react-router-dom'

// ── Why Choose Us points ──────────────────────────────────────────────────
const WHY_POINTS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'RBI Registered & Compliant',
    desc: 'Fully licensed and regulated by the Reserve Bank of India, ensuring your interests are protected.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Dedicated Loan Advisors',
    desc: 'Personal relationship managers guide you from application to disbursement with 24×7 availability.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Competitive Rate Comparison',
    desc: 'We aggregate offers from 20+ lenders so you always get the best rate without spending hours searching.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Secure & Paperless Process',
    desc: 'Bank-grade encryption protects your data. Everything is digital — no physical visits required.',
  },
]

// ── Team members ─────────────────────────────────────────────────────────
const TEAM = [
  { initials: 'AK', name: 'Arjun Kumar', role: 'CEO & Co-Founder', bg: 'bg-blue-600' },
  { initials: 'SM', name: 'Sneha Murthy', role: 'Chief Lending Officer', bg: 'bg-indigo-600' },
  { initials: 'RV', name: 'Rohit Verma', role: 'Head of Technology', bg: 'bg-sky-600' },
]

export default function About() {
  return (
    <div className="pt-16">

      {/* ══════════════════════════════════════════════════════
          PAGE HERO
      ══════════════════════════════════════════════════════ */}
      <section className="hero-mesh py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-tag">About Us</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
            Building a Better Path<br />to <span className="gradient-text">Homeownership</span>
          </h1>
          <p className="section-subtitle mx-auto">
            Since 2012, HomeLoan has been India's most trusted digital lending partner — 
            simplifying the complex, one home at a time.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          COMPANY STORY
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Text content */}
            <div>
              <p className="section-tag">Our Story</p>
              <h2 className="section-title mb-6">A Decade of Trusted Lending</h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  HomeLoan was founded in 2012 with a single purpose: to make homeownership accessible 
                  to every Indian family, regardless of their financial background. We saw how traditional 
                  banks made the loan process unnecessarily complex, opaque, and slow.
                </p>
                <p>
                  Our founders — a team of fintech veterans and real estate professionals — set out to 
                  build a platform that puts the customer first. With transparent pricing, instant 
                  eligibility checks, and a team of dedicated advisors, we changed what it meant to 
                  apply for a home loan.
                </p>
                <p>
                  Today, we've helped over 50,000 families across 200+ cities realise their dream of 
                  owning a home. We continue to innovate with technology while keeping our core 
                  promise: honest, fast, and human-centric lending.
                </p>
              </div>
            </div>

            {/* Visual stats panel */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '2012', label: 'Founded' },
                { val: '50K+', label: 'Happy Customers' },
                { val: '200+', label: 'Cities Served' },
                { val: '20+', label: 'Lending Partners' },
              ].map(({ val, label }) => (
                <div key={label}
                  className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 
                             rounded-2xl p-6 text-center hover:shadow-md transition-shadow duration-300">
                  <div className="font-display text-3xl font-bold text-blue-700 mb-1">{val}</div>
                  <div className="text-gray-500 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MISSION & VISION
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-tag">Purpose</p>
            <h2 className="section-title">Our Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Mission */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 
                            hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center 
                              justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed">
                To democratise access to home finance by delivering transparent, technology-driven 
                lending solutions that empower every Indian to own a home — with confidence, 
                clarity, and comfort.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-blue-700 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 
                            hover:-translate-y-1">
              <div className="w-12 h-12 bg-white/20 text-white rounded-xl flex items-center 
                              justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-blue-100 leading-relaxed">
                To become India's #1 home financing platform by 2030 — a world where every 
                family, regardless of geography or income, can achieve the dream of owning a 
                home through a seamless, dignified experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-tag">Why Us</p>
            <h2 className="section-title mb-4">What Sets Us Apart</h2>
            <p className="section-subtitle mx-auto">
              Four pillars that make HomeLoan the preferred choice for smart borrowers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_POINTS.map(({ icon, title, desc }) => (
              <div key={title} className="card flex gap-5">
                <div className="w-10 h-10 flex-shrink-0 bg-blue-100 text-blue-600 rounded-xl 
                                flex items-center justify-center mt-0.5">
                  {icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1.5">{title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TEAM SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-tag">The Team</p>
            <h2 className="section-title">Leadership You Can Trust</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {TEAM.map(({ initials, name, role, bg }) => (
              <div key={name} className="card text-center">
                <div className={`w-16 h-16 ${bg} rounded-2xl flex items-center justify-center 
                                 text-white font-display text-lg font-bold mx-auto mb-4`}>
                  {initials}
                </div>
                <h4 className="font-semibold text-gray-900">{name}</h4>
                <p className="text-gray-500 text-sm mt-1">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
            Start Your Journey With Us Today
          </h2>
          <p className="text-gray-500 mb-8">
            Join 50,000+ families who trusted HomeLoan to find the right mortgage for them.
          </p>
          <Link to="/contact" className="btn-primary">
            Apply for a Loan
          </Link>
        </div>
      </section>
    </div>
  )
}
