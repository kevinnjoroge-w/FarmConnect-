import React from 'react'

const Feature = () => {
  return (
           <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose FarmConnect</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* <!-- Feature 1 --> */}
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
                    <div className="text-green-600 mb-4">
                        <i className="fas fa-leaf text-4xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Farm Fresh Quality</h3>
                    <p className="text-gray-600">Direct from local farms to your table, ensuring maximum freshness and quality.</p>
                </div>
                
                {/* <!-- Feature 2 --> */}
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
                    <div className="text-green-600 mb-4">
                        <i className="fas fa-truck text-4xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Flexible Delivery</h3>
                    <p className="text-gray-600">Choose delivery or pickup options that fit your schedule and preferences.</p>
                </div>
                
                {/* <!-- Feature 3 --> */}
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
                    <div className="text-green-600 mb-4">
                        <i className="fas fa-hands-helping text-4xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Support Local</h3>
                    <p className="text-gray-600">Your purchase directly supports local farmers and sustainable agriculture.</p>
                </div>
                
                {/* <!-- Feature 4 --> */}
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
                    <div className="text-green-600 mb-4">
                        <i className="fas fa-certificate text-4xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Transparent Sourcing</h3>
                    <p className="text-gray-600">Detailed information about farming practices, certifications, and origin.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Feature