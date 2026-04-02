// Home.jsx — Landing page with Hero + Features sections
import React from 'react'
import { Link } from 'react-router-dom'


import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const slides = [
  {
    id: 'home-loan',
    trust: 'Trusted by 50,000+ Homeowners Across India',
    heading: {
      black: 'Get Your',
      blue: 'Dream Home Loan',
      black2: 'Easily',
    },
    description:
      'Fast approvals, unbeatable interest rates, and expert guidance every step of the way.',
    cta1: 'Apply Now',
    cta2: 'Explore Loans',
    features: ['No hidden charges', 'Paperless process', 'RBI Registered'],
    backgroundImage:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
  },
  {
    id: 'insurance',
    trust: 'Trusted by 100,000+ Policyholders Across India',
    heading: {
      black: 'Secure Your',
      blue: 'Family Insurance',
      black2: 'Today',
    },
    description:
      'Comprehensive coverage, instant policy activation, and hassle-free claims.',
    cta1: 'Get Insured Now',
    cta2: 'Explore Plans',
    features: ['Instant Approval', 'Hassle-Free Claims', 'RBI Certified'],
    backgroundImage:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
  },
  {
    id: 'stock-market',
    trust: 'Trusted by 75,000+ Investors Across India',
    heading: {
      black: 'Start Your',
      blue: 'Wealth Building',
      black2: 'Journey',
    },
    description:
      'Expert market analysis, personalized investment strategies, and 24/7 trading support.',
    cta1: 'Start Investing',
    cta2: 'View Opportunities',
    features: ['SEBI Registered', 'Market Analysis', '24/7 Support'],
    backgroundImage:
      'https://images.unsplash.com/photo-1611974789855-9c2a23a94d6d?w=1200&q=80',
  },
];

 

// ── Feature card data ──────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'bg-blue-100 text-blue-600',
    title: 'Fast Approval',
    desc: 'Get your loan approved in as little as 24 hours. Our streamlined digital process eliminates paperwork and wait times.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'bg-green-100 text-green-600',
    title: 'Low Interest Rates',
    desc: 'We partner with 20+ lenders to offer you the most competitive interest rates starting from just 8.5% p.a.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'bg-purple-100 text-purple-600',
    title: 'Trusted Service',
    desc: 'Over 50,000 happy homeowners trust us. Licensed, regulated, and rated ★ 4.9/5 for customer satisfaction.',
  },
]

// ── Stats data ──────────────────────────────────────────────────────────────
const STATS = [
  { value: '50K+', label: 'Loans Disbursed' },
  { value: '₹2,000Cr+', label: 'Loan Portfolio' },
  { value: '8.5%', label: 'Starting Interest' },
  { value: '24hr', label: 'Approval Time' },
]

// ── Testimonial data ─────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    location: 'Hyderabad',
    avatar: 'PS',
    text: "The entire process was seamless. Got my home loan approved in just 2 days. The team was incredibly supportive.",
  },
  {
    name: 'Rajan Mehta',
    location: 'Mumbai',
    avatar: 'RM',
    text: "Best interest rates in the market. Saved nearly ₹3 lakhs compared to my bank's offer. Highly recommend!",
  },
  {
    name: 'Anita Reddy',
    location: 'Bengaluru',
    avatar: 'AR',
    text: "First-time buyer and they made everything so easy to understand. Transparent fees, no hidden charges at all.",
  },
]

export default function Home() {
   const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length);
  const prevSlide = () =>
    goToSlide((currentSlide - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];
  return (
    <div > {/* offset for fixed navbar */}

      {/* ══════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="relative w-full h-screen overflow-hidden">

  {/* Background glow (optional) */}
  <div className="absolute right-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl pointer-events-none z-0" />
  <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-300 rounded-full opacity-15 blur-3xl pointer-events-none z-0" />

  {/* FULLSCREEN CAROUSEL */}
  <div
    className="relative w-full h-screen flex items-center justify-center"
    style={{
      backgroundImage: `url(${slide.backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    onMouseEnter={() => setIsAutoPlay(false)}
    onMouseLeave={() => setIsAutoPlay(true)}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

    {/* Content */}
    <div className="relative z-10 text-center max-w-3xl px-4 space-y-6">
      
      <p className="text-blue-600 font-medium text-sm">
        {slide.trust}
      </p>

      <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight">
        {slide.heading.black}{' '}
        <span className="text-blue-600">{slide.heading.blue}</span>{' '}
        {slide.heading.black2}
      </h1>

      <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
        {slide.description}
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5" >
          {slide.cta1}
       </Link >
        <Link to="/services" className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg w-full sm:w-auto">
          {slide.cta2}
        </Link>
      </div>

      {/* Features */}
      <div className="flex flex-wrap justify-center gap-4 pt-4">
        {slide.features.map((f, i) => (
          <div key={i} className="flex items-center gap-2">
            <Check className="text-green-500 w-4 h-4" />
            <span className="text-sm text-gray-700">{f}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Arrows */}
    <button
      onClick={prevSlide}
      className="hidden sm:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:scale-110 transition"
    >
      <ChevronLeft />
    </button>

    <button
      onClick={nextSlide}
      className="hidden sm:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:scale-110 transition"
    >
      <ChevronRight />
    </button>

    {/* Dots */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
      {slides.map((_, idx) => (
        <button
          key={idx}
          onClick={() => goToSlide(idx)}
          className={`${
            idx === currentSlide
              ? 'bg-blue-600 w-6 h-2'
              : 'bg-gray-400 w-2 h-2'
          } rounded-full`}
        />
      ))}
    </div>
  </div>
</section>

      {/* ══════════════════════════════════════════════════════
          STATS BAND
      ══════════════════════════════════════════════════════ */}
      <section className="bg-blue-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-display text-3xl font-bold text-white mb-1">{value}</div>
                <div className="text-blue-200 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FEATURES SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section heading */}
          <div className="text-center mb-14">
            <p className="section-tag">Why HomeLoan?</p>
            <h2 className="section-title mb-4">Everything You Need,<br />In One Place</h2>
            <p className="section-subtitle mx-auto text-center">
              We've simplified the complex world of home financing into a transparent, 
              stress-free experience.
            </p>
          </div>

          {/* Feature cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map(({ icon, color, title, desc }) => (
              <div key={title} className="card group cursor-default">
                {/* Icon bubble */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${color} 
                                 group-hover:scale-110 transition-transform duration-300`}>
                  {icon}
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-tag">Process</p>
            <h2 className="section-title mb-4">Apply in 3 Simple Steps</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Fill the Application',
                desc: 'Complete our simple online form with your personal and financial details in under 5 minutes.',
              },
              {
                step: '02',
                title: 'Get Verified',
                desc: 'Upload documents digitally. Our team reviews and verifies your application swiftly.',
              },
              {
                step: '03',
                title: 'Receive Funds',
                desc: 'Once approved, funds are disbursed directly to your account within 24 hours.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative text-center">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl 
                                bg-blue-600 text-white font-display text-xl font-bold mb-5 shadow-lg shadow-blue-200">
                  {step}
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-tag">Testimonials</p>
            <h2 className="section-title mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, location, avatar, text }) => (
              <div key={name} className="card">
                {/* Star rating */}
                <div className="flex gap-1 mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{text}"</p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center 
                                  text-white text-xs font-bold">
                    {avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{name}</div>
                    <div className="text-xs text-gray-500">{location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Own Your Dream Home?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Apply today and get a personalised loan quote in minutes.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold 
                       rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl 
                       hover:-translate-y-0.5"
          >
            Start Your Application
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
