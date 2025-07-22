import React from 'react'

const Market = () => {
  return (
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
        </div>
        </section>
  )
}

export default Market