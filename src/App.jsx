// App.jsx — Root component with routing setup
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      {/* Sticky Navbar is always visible */}
      <Navbar />

      {/* Main content area — routes swap here */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </main>

      {/* Footer is always visible */}
      <Footer />
    </Router>
  )
}

export default App
