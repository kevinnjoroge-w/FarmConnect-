import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-500 to-green-700 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Fresh Produce Direct from Local Farms</h1>
                <p className="text-xl mb-6">Connect with local farmers, get the freshest produce delivered to your doorstep or pickup at your convenience.</p>                
                <div className="flex flex-wrap gap-4">
                    <a href="research.html"> <button id="sellBtn" className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-green-700 transition">Effects of middlemen in farming</button> </a>
                    <a href="#marketplace" className="bg-white text-green-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">Shop Now</a>
                    <button id="sellBtn" className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-green-700 transition">Sell on FarmConnect</button>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fadeIn">
                {/* <img src="https://placeholder.com/600x400" alt="Fresh produce" className="rounded-lg shadow-2xl max-w-full h-auto"> */}
            </div>
        </div>
    </section>
  )
}

export default Hero