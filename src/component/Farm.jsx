import React from 'react';

const Farm = () => {
  return (
    <section id="for-farmers" className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Grow Your Farm Business</h2>
                <p className="text-lg max-w-2xl mx-auto">Join thousands of farmers who are reaching more customers and growing their businesses with FarmConnect</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Farmer Benefit 1 --> */}
                <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition cursor-pointer">
                    <div className="text-4xl mb-4">
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Expand Your Market</h3>
                    <p>Reach customers beyond your local area without the hassle of farmers markets.</p>
                </div>
                
                {/* <!-- Farmer Benefit 2 --> */}
                <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition cursor-pointer">
                    <div className="text-4xl mb-4">
                        <i className="fas fa-tools"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Powerful Management Tools</h3>
                    <p>Inventory, orders, delivery routing, and customer management all in one place.</p>
                </div>
                
                {/* <!-- Farmer Benefit 3 --> */}
                <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition cursor-pointer">
                    <div className="text-4xl mb-4">
                        <i className="fas fa-hand-holding-usd"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Fair Pricing</h3>
                    <p>Keep more of your profits with our low commission rates compared to traditional retail.</p>
                </div>
            </div>
            
            <div className="mt-12 text-center">
                <button id="signupFarmerBtn" className="bg-white text-green-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition">
                    Sign Up as a Farmer <i className="fas fa-arrow-right ml-2"></i>
                </button>
            </div>
        </div>
    </section>
  );
};

export default Farm;
