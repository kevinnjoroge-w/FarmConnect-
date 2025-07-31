import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Testimonial = () => {
  return (
   <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Testimonial 1 --> */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                        <img src="https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNhcmFoJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                        <div>
                            <h4 className="font-semibold">Sarah </h4>
                            <div className="flex text-yellow-400">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600 italic">"The quality of produce from FarmConnecthas been consistently amazing. I love knowing exactly which farm my food comes from and supporting local agriculture."</p>
                </div>
                
                {/* <!-- Testimonial 2 --> */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                        <img src="https://images.unsplash.com/photo-1659868632883-2ce54c79abaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwcHJvdHJhaXR8ZW58MHx8MHx8fDA%3D" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                        <div>
                            <h4 className="font-semibold">Michael </h4>
                            <div className="flex text-yellow-400">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600 italic">"The rate at which the produce reaches me is fast and this ensures freshness,which is something i love about FarmConnect."</p>
                </div>
                
                {/* <!-- Testimonial 3 --> */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                        <img src="https://plus.unsplash.com/premium_photo-1683376195357-ab3b07c1de83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9tJTIwYW5kJTIwbWFyaWElMjBibGFjayUyMGZhbWlseXxlbnwwfHwwfHx8MA%3D%3D" alt="Farmer" className="w-12 h-12 rounded-full mr-4" />
                        <div>
                            <h4 className="font-semibold">Tom & Maria </h4>
                            <div className="flex text-yellow-400">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600 italic">"FarmConnecthas helped us triple our sales while reducing time spent at farmers markets. The inventory management tools save us hours each week."</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Testimonial;
