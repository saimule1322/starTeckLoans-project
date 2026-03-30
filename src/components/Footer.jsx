// Footer.jsx — Professional site footer with links and branding
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg';

const FOOTER_LINKS = {
  Company: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
  ],
  'Loan Types': [
    { label: 'Home Loan', to: '/services' },
    { label: 'Personal Loan', to: '/services' },
    { label: 'Business Loan', to: '/services' },
    { label: 'Education Loan', to: '/services' },
  ],
  Support: [
    { label: 'FAQs', to: '/contact' },
    { label: 'Apply Now', to: '/contact' },
    { label: 'Get a Quote', to: '/contact' },
    { label: 'Privacy Policy', to: '/' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* ── Main Footer Content ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="StarIndian FinServices Logo"
                className="w-28 sm:w-32 h-auto object-contain"
                loading="lazy"
              />
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-md">
              Making homeownership a reality for thousands of families with transparent,
              fast, and trusted lending solutions.
            </p>
            {/* Contact quick info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>support@homeloan.in</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-gray-500 hover:text-blue-400 transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5
                        flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {year} StarIndian FinServices. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-gray-600">
            <span className="hover:text-gray-400 cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-gray-400 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-gray-400 cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
