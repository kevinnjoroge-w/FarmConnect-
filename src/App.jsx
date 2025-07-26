import React from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Feature from './component/Feature'
import Product from './component/Product'
import Farm from './component/Farm'
import Testimonial from './component/Testimonial'
import Mobile from './component/Mobile'
import Footer from './component/Footer'
import Login from './component/Login'
import FarmerSignup from './component/FarmerSignup'

const AppContent = () => {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><Feature /></>} />
        <Route path="/features" element={<Feature />} />
        <Route path="/marketplace" element={<Product />} />
        <Route path="/for-farmers" element={<Farm />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/farmer-signup" element={<FarmerSignup />} />
      </Routes>
      {location.pathname !== '/login' && <Footer />}
    </>
  )
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
console.log("i love u");
export default App
