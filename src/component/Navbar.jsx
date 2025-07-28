import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import { faLeaf } from '@fortawesome/free-solid-svg-icons/faLeaf'

const Navbar = () => {
  const [showCart, setShowCart] = useState(false)

  const toggleCart = () => {
    setShowCart(!showCart)
  }

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
           <div className="text-4xl font-bold text-green-600"><FontAwesomeIcon icon={faLeaf} /></div>
            <span className="text-2xl font-bold text-green-600">FarmConnect</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition">
              Home
            </Link>
            <Link to="/marketplace" className="text-gray-700 hover:text-green-600 transition">
              Marketplace
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-green-600 transition">
              Features
            </Link>
            <Link to="/for-farmers" className="text-gray-700 hover:text-green-600 transition">
              For Farmers
            </Link>
          
          </div>

          <div className="flex items-center space-x-4">
           <Link to = "/cart">
           <button id="cartBtn" className="relative text-gray-700 hover:text-green-600" >
             <FontAwesomeIcon icon={faShoppingCart} className="text-xl" /> 
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </button> 
           </Link> 
            

            <Link to="/login"> 
              <button id="authBtn" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                Login / Register
              </button>
            </Link>

            <button id="mobileMenuBtn" className="md:hidden text-gray-700">
              <FontAwesomeIcon icon={faBars} className="text-xl" />
            </button>
          </div>
        </div>

        <div id="mobileMenu" className="md:hidden hidden bg-white px-4 py-2 shadow-md animate-fadeIn">
          <Link to="/marketplace" className="block py-2 text-gray-700 hover:text-green-600">
            Marketplace
          </Link>
          <Link to="/features" className="block py-2 text-gray-700 hover:text-green-600">
            Features
          </Link>
          <Link to="/for-farmers" className="block py-2 text-gray-700 hover:text-green-600">
            For Farmers
          </Link>
          <Link to="/about" className="block py-2 text-gray-700 hover:text-green-600">
            About
          </Link>
        </div>
      </nav>
     
    </>
  )
}

export default Navbar
