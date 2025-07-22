import React from 'react'

const Product = () => {
  return (
            <>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer animate-fadeIn" style="animation-delay: 0.1s">
                    <div class="relative">
                        {/* <img src="https://placeholder.com/300x200" alt="Organic Apples" class="w-full h-48 object-cover"> */}
                        <span class="absolute top-2 left-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Organic</span>
                    </div>
                    <div class="p-4">
                        <div class="flex justify-between items-start mb-1">
                            <h3 class="font-semibold text-lg text-gray-800">Organic Apples</h3>
                            <span class="text-yellow-500"><i class="fas fa-star"></i> 4.8</span>
                        </div>
                        <p class="text-gray-500 text-sm mb-3">Sweet and crisp, grown without synthetic pesticides.</p>
                        <div class="flex justify-between items-center">
                            <div>
                                <span class="font-bold text-green-600">$2.99/lb</span>
                                <span class="text-gray-400 text-sm block">In stock: 85 lbs</span>
                            </div>
                            <button class="add-to-cart bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
           </>
  )
}

export default Product