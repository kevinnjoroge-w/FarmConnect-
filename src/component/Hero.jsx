import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons/faTruck'
import { faHandsHelping  } from '@fortawesome/free-solid-svg-icons/faHandsHelping'
import { faCertificate } from '@fortawesome/free-solid-svg-icons/faCertificate';
import {faLeaf} from '@fortawesome/free-solid-svg-icons/faLeaf';



const Hero = () => {
  return (
    <>
    <section className="bg-gradient-to-r from-green-500 to-green-700 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fresh Produce Direct from Local Farms</h1>
          <p className="text-xl mb-6">Connect with local farmers, get the freshest produce delivered to your doorstep or pickup at your convenience.</p>
          <div className="flex flex-wrap gap-4">
            <a href="research.html">
              <button
                id="sellBtn"
                className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-green-700 transition"
              >
               Learn about farm economics
              </button>
            </a>
            <Link to="/marketplace" className="bg-white text-green-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition inline-block text-center">
              Shop Now
            </Link>
            <Link to="/farmer-signup" className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-green-700 transition inline-block text-center" id="sellBtn">
              Sell on FarmConnect
            </Link>
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
                        <div className="text-4xl font-bold text-green-600"><FontAwesomeIcon icon={faSearch} /></div>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-3">Browse Local Farms</h3>
                    <p className="text-gray-600 text-center">Discover farms in your area and see what they're harvesting this season.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md feature-card transition duration-300 animate-fadeIn delay-200">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <div className="text-4xl font-bold text-green-600"><FontAwesomeIcon icon={faShoppingBasket} /></div>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-3">Order Fresh Produce</h3>
                    <p className="text-gray-600 text-center">Select your favorite items and place your order directly with the farmer.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md feature-card transition duration-300 animate-fadeIn delay-400">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                       <div className="text-4xl font-bold text-green-600"><FontAwesomeIcon icon={faTruck} /></div>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-3">Delivery or Pickup</h3>
                    <p className="text-gray-600 text-center">Get your order delivered or pick it up fresh from the farm.</p>
                </div>
            </div>
        </div>
    </section>
       <section id="features" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose FarmConnect</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* <!-- Feature 1 --> */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
                        <div className="text-green-600 mb-4">
                            <FontAwesomeIcon icon={faLeaf} className="text-4xl" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Farm Fresh Quality</h3>
                        <p className="text-gray-600">Direct from local farms to your table, ensuring maximum freshness and quality.</p>
                    </div>
                    
                    {/* <!-- Feature 2 --> */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
                        <div className="text-green-600 mb-4">
                            <FontAwesomeIcon icon={faTruck} className="text-4xl" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Flexible Delivery</h3>
                        <p className="text-gray-600">Choose delivery or pickup options that fit your schedule and preferences.</p>
                    </div>
                    
                    {/* <!-- Feature 3 --> */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
                        <div className="text-green-600 mb-4">
                            <FontAwesomeIcon icon={faHandsHelping} className="text-4xl" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Support Local</h3>
                        <p className="text-gray-600">Your purchase directly supports local farmers and sustainable agriculture.</p>
                    </div>
                    
                    {/* <!-- Feature 4 --> */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
                        <div className="text-green-600 mb-4">
                            <FontAwesomeIcon icon={faCertificate} className="text-4xl" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Transparent Sourcing</h3>
                        <p className="text-gray-600">Detailed information about farming practices, certifications, and origin.</p>
                    </div>
                </div>
            </div>
        </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">FarmConnect News & Tips</h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">Stay updated with farming news and seasonal cooking tips</p>
            
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden animate-fadeIn">
                    <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Farmers Market" className="w-full h-48 object-cover"/>
                    <div className="p-6">
                        <span className="text-green-600 text-sm font-medium">Market News</span>
                        <h3 className="text-xl font-bold mt-2 mb-3">5 Reasons to Shop at Farmers Markets</h3>
                        <p className="text-gray-600 mb-4">Discover the benefits of buying directly from local farmers and how it impacts your community.</p>
                        <a href="/blog/farmers-market-benefits" className="text-green-600 font-medium hover:text-green-700 transition">Read More →</a>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden animate-fadeIn delay-200">
                    <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Seasonal Recipes" className="w-full h-48 object-cover"/>
                    <div className="p-6">
                        <span className="text-green-600 text-sm font-medium">Recipes</span>
                        <h3 className="text-xl font-bold mt-2 mb-3">Summer Vegetable Recipes</h3>
                        <p className="text-gray-600 mb-4">Make the most of seasonal produce with these delicious and easy-to-make recipes from local chefs.</p>
                        <a href="/blog/summer-recipes" className="text-green-600 font-medium hover:text-green-700 transition">Read More →</a>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden animate-fadeIn delay-400">
                    <img src="https://images.unsplash.com/photo-1464722623863-46ab08ca6484?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3V0YWluYWJsZSUyMGZhcm1pbmd8ZW58MHx8MHx8fDA%3D" alt="Sustainable Farming" className="w-full h-48 object-cover "/>
                    <div className="p-6">
                        <span className="text-green-600 text-sm font-medium">Sustainability</span>
                        <h3 className="text-xl font-bold mt-2 mb-3">The Future of Sustainable Farming</h3>
                        <p className="text-gray-600 mb-4">How small farms are leading the way in sustainable agriculture practices that protect our planet.</p>
                        <a href="/blog/sustainable-farming" className="text-green-600 font-medium hover:text-green-700 transition">Read More →</a>
                    </div>
                </div>
            </div>
            
            <div className="text-center mt-8">
                <a href="/blog" className="inline-block bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition">
                    View All Articles
                </a>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero
