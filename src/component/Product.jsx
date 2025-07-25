import React, { useEffect, useState } from 'react'
import productData from './product.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlus, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Product = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(productData)
  }, [])

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
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer animate-fadeIn"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="relative">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
                  <span
                    className={`absolute top-2 left-2 bg-${product.labelColor} text-${product.labelTextColor} text-xs px-2 py-1 rounded-full`}
                  >
                    {product.label}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                    <span className="text-yellow-500">
                      <FontAwesomeIcon icon={faStar} /> {product.rating}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-green-600">
                        ${product.price}/{product.priceUnit}
                      </span>
                      <span
                        className={`text-sm block ${
                          product.lowStock ? 'text-red-400' : 'text-gray-400'
                        }`}
                      >
                        {product.lowStock ? 'Low stock: ' : 'In stock: '}
                        {product.stock} {product.stockUnit}
                      </span>
                    </div>
                    <button className="add-to-cart bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition">
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Product
