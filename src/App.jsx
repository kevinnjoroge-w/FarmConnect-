import React from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './component/Navbar'
import Homepage from './pages/Homepage'
import Footer from './component/Footer'
import Marketplace from './pages/Marketplace'
import Featurepage from './pages/Featurepage'
import Loginpage from './pages/Loginpage'
import Farmerspage from './pages/Framerspage'
import Cart from './component/Cart'


const AppContent = () => {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Homepage /></>} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/features" element={ <Featurepage/>} />
        <Route path="/login" element={<Loginpage />} /> 
        <Route path="/for-farmers" element={<Farmerspage />} />
        <Route path= "/cart" element= {<Cart />} />
        {/* <Route path="/features" element={<Feature />} />
       
        <Route path="/for-farmers" element={<Farm />} />
        
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/login" element={<Login />} /> */}

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
