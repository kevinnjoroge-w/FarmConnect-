import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <>
    <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <a href="#" className="flex items-center space-x-2">
                {/* <img src="https://placeholder.com/40x40" alt="FarmConnectLogo" className="h-10 w-10 rounded-full"> */}
                <span className="text-2xl font-bold text-green-600">FarmConnect</span>
            </a>
            
            <div className="hidden md:flex items-center space-x-6">
                <a href="#marketplace" className="text-gray-700 hover:text-green-600 transition">Marketplace</a>
                <a href="#features" className="text-gray-700 hover:text-green-600 transition">Features</a>
                <a href="#for-farmers" className="text-gray-700 hover:text-green-600 transition">For Farmers</a>
                <a href="#about" className="text-gray-700 hover:text-green-600 transition">About</a>
            </div>
            
            <div className="flex items-center space-x-4">
                <button id="cartBtn" className="relative text-gray-700 hover:text-green-600">
                    <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
                    <span id="cartCount" className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                </button>
                
               <a href='Login.jsx'><button id="authBtn" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">Login / Register</button> </a>
                
                <button id="mobileMenuBtn" className="md:hidden text-gray-700">
                    <FontAwesomeIcon icon={faBars} className="text-xl" />
                </button>
            </div>
        </div>
        
        <div id="mobileMenu" className="md:hidden hidden bg-white px-4 py-2 shadow-md animate-fadeIn">
            <a href="#marketplace" className="block py-2 text-gray-700 hover:text-green-600">Marketplace</a>
            <a href="#features" className="block py-2 text-gray-700 hover:text-green-600">Features</a>
            <a href="#for-farmers" className="block py-2 text-gray-700 hover:text-green-600">For Farmers</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-green-600">About</a>
        </div>
    </nav>
    </>
  )
}

export default Navbar
