import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons/faLeaf';

const Footer = () => {
  return (
    <>
     <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {/* <!-- Column 1 --> */}
                <div>
                    <div class="flex items-center space-x-2 mb-4">
                    <div className="text-2xl text-green-600"><FontAwesomeIcon icon={faLeaf} /> </div>
                     <h3 className="text-xl font-semibold mb-4">FarmConnect</h3>
                    </div>
                    <p className="text-gray-400 mb-4">Connecting people with fresh, local farm produce through technology.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                </div>
                
                {/* <!-- Column 2 --> */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="#marketplace" className="text-gray-400 hover:text-green-600 transition">Marketplace</a></li>
                        <li><a href="#features" className="text-gray-400 hover:text-green-600 transition">Features</a></li>
                        <li><a href="#for-farmers" className="text-gray-400 hover:text-green-600 transition">For Farmers</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-green-600 transition">About Us</a></li>
                    </ul>
                </div>
                
                {/* <!-- Column 3 --> */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Support</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Shipping & Returns</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>
                
                {/* <!-- Column 4 --> */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                    <p className="text-gray-400 mb-4">Subscribe to get updates on new farms, seasonal produce, and special offers.</p>
                    <div className="flex">
                        <input type="email" placeholder="Your email" className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full" />
                        <button className="bg-green-600 px-4 py-2 rounded-r-md hover:bg-green-700 transition">Subscribe</button>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                <p>&copy; 2025 FarmConnect. All rights reserved.</p>
            </div>
        </div>
    </footer>
    </>
  );
};

export default Footer;
