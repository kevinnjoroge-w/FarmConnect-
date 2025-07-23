import React from 'react'

const Product = () => {
  return (
            <>
             <section id="marketplace" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Fresh Produce Marketplace</h2>
                <div className="relative">
                    <select className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
                        <option>All Categories</option>
                        <option>Fruits</option>
                        <option>Vegetables</option>
                        <option>Dairy & Eggs</option>
                        <option>Meat & Poultry</option>
                        <option>Herbs & Spices</option>
                        <option>Organic</option>
                        <option>Cereals</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <i className="fas fa-chevron-down"></i>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer animate-fadeIn" style={{animationDelay: '0.1s'}}>
                    <div className="relative">
                        {/* <img src="https://placeholder.com/300x200" alt="Organic Apples" className="w-full h-48 object-cover"> */}
                        <span className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Organic</span>
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between items-start mb-1">
                            <h3 className="font-semibold text-lg text-gray-800">Organic Apples</h3>
                            <span className="text-yellow-500"><i className="fas fa-star"></i> 4.8</span>
                        </div>
                        <p className="text-gray-500 text-sm mb-3">Sweet and crisp, grown without synthetic pesticides.</p>
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="font-bold text-green-600">$2.99/lb</span>
                                <span className="text-gray-400 text-sm block">In stock: 85 lbs</span>
                            </div>
                            <button className="add-to-cart bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition">
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Product Card 2 --> */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer animate-fadeIn" style={{animationDelay: '0.1s'}}>
                    <div className="relative">
                        {/* <img src="https://placeholder.com/300x200" alt="Free-range Eggs" className="w-full h-48 object-cover"> */}
                        <span className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Free-range</span>
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between items-start mb-1">
                            <h3 className="font-semibold text-lg text-gray-800">Free-range Eggs</h3>
                            <span className="text-yellow-500"><i className="fas fa-star"></i> 4.9</span>
                        </div>
                        <p className="text-gray-500 text-sm mb-3">From hens that roam freely on pasture (Dozen).</p>
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="font-bold text-green-600">$4.50/dozen</span>
                                <span className="text-gray-400 text-sm block">In stock: 24</span>
                            </div>
                            <button className="add-to-cart bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition">
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Product Card 3 --> */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer animate-fadeIn" style={{animationDelay: '0.1s'}}>
                    <div className="relative">
                        {/* <img src="https://placeholder.com/300x200" alt="Heirloom Tomatoes" className="w-full h-48 object-cover"> */}
                        <span className="absolute top-2 left-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Seasonal</span>
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between items-start mb-1">
                            <h3 className="font-semibold text-lg text-gray-800">Heirloom Tomatoes</h3>
                            <span className="text-yellow-500"><i className="fas fa-star"></i> 4.7</span>
                        </div>
                        <p className="text-gray-500 text-sm mb-3">Vine-ripened with exceptional flavor (by the pound).</p>
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="font-bold text-green-600">$3.49/lb</span>
                                <span className="text-red-400 text-sm block">Low stock: 5 lbs</span>
                            </div>
                            <button className="add-to-cart bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition">
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Product Card 4 --> */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer animate-fadeIn" style={{animationDelay: '0.1s'}}>
                    <div className="relative">
                        {/* <img src="https://placeholder.com/300x200" alt="Grass-fed Beef" className="w-full h-48 object-cover"> */}
                        <span className="absolute top-2 left-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Best Seller</span>
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between items-start mb-1">
                            <h3 className="font-semibold text-lg text-gray-800">Grass-fed Ground Beef</h3>
                            <span className="text-yellow-500"><i className="fas fa-star"></i> 4.9</span>
                        </div>
                        <p className="text-gray-500 text-sm mb-3">Pasture-raised, humanely handled (1 lb packages).</p>
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="font-bold text-green-600">$8.99/lb</span>
                                <span className="text-gray-400 text-sm block">In stock: 42</span>
                            </div>
                            <button className="add-to-cart bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition">
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                </section>
           </>
  )
}

export default Product