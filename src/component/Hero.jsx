import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  const [showCart, setShowCart] = useState(false)

  const toggleCart = () => {
    setShowCart(!showCart)
  }

  return (
    <>
    <section className="bg-gradient-to-r from-green-500 to-green-700 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fresh Produce Direct from Local Farms</h1>
          <p className="text-xl mb-6">Connect with local farmers, get the freshest produce delivered to your doorstep or pickup at your convenience.</p>
          <div className="flex flex-wrap gap-4 items-center">
            <a href="research.html">
              <button
                id="sellBtn"
                className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-green-700 transition"
              >
                Effects of middlemen in farming
              </button>
            </a>
            <Link to="/marketplace" className="bg-white text-green-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition inline-block text-center">
              Shop Now
            </Link>
            <Link to="/farmer-signup" className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-green-700 transition inline-block text-center" id="sellBtn">
              Sell on FarmConnect
            </Link>
            <button
              id="cartBtn"
              className="relative text-white hover:text-green-300"
              onClick={toggleCart}
            >
              <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center animate-fadeIn">
          <img
            src="https://plus.unsplash.com/premium_photo-1686878940830-9031355ec98c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhcm0lMjBtYXJrZXQlMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Fresh produce"
            className="rounded-lg shadow-2xl w-full h-128"
          />
        </div>
      </div>
    </section>
    <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="animate-fadeIn delay-200">
                    <div className="text-4xl font-bold text-green-600">1,200+</div>
                    <div className="text-gray-600 mt-2">Local Farms</div>
                </div>
                <div className="animate-fadeIn delay-400">
                    <div className="text-4xl font-bold text-green-600">15,000+</div>
                    <div className="text-gray-600 mt-2">Happy Customers</div>
                </div>
                <div className="animate-fadeIn delay-600">
                    <div className="text-4xl font-bold text-green-600">50+</div>
                    <div className="text-gray-600 mt-2">Product Categories</div>
                </div>
                <div className="animate-fadeIn delay-800">
                    <div className="text-4xl font-bold text-green-600">40%</div>
                    <div className="text-gray-600 mt-2">More Income for Farmers</div>
                </div>
            </div>
        </div>
    </section>

    {/* // <!-- How It Works --> */}
    <section className="py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">How FarmConnect Works</h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">Connecting you directly with local farmers has never been easier</p>
            
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md feature-card transition duration-300 animate-fadeIn">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <i className="fas fa-search text-green-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-3">Browse Local Farms</h3>
                    <p className="text-gray-600 text-center">Discover farms in your area and see what they're harvesting this season.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md feature-card transition duration-300 animate-fadeIn delay-200">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <i className="fas fa-shopping-basket text-green-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-3">Order Fresh Produce</h3>
                    <p className="text-gray-600 text-center">Select your favorite items and place your order directly with the farmer.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md feature-card transition duration-300 animate-fadeIn delay-400">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <i className="fas fa-truck text-green-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-3">Delivery or Pickup</h3>
                    <p className="text-gray-600 text-center">Get your order delivered or pick it up fresh from the farm.</p>
                </div>
            </div>
        </div>
    </section>
    {showCart && <Cart />}
    </>
  )
}

export default Hero
