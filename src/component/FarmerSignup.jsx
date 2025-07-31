
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const FarmerSignup = ({ onClose }) => {
  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Farmer Registration</h3>
          <button id="closeFarmerBtn" className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2 text-gray-800">Farm Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="farmName" className="block text-gray-700 mb-1">Farm Name*</label>
                <input type="text" id="farmName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
              </div>
              <div>
                <label htmlFor="farmingType" className="block text-gray-700 mb-1">Farming Type*</label>
                <select id="farmingType" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required>
                  <option value="">Select</option>
                  <option value="vegetables">Vegetables</option>
                  <option value="fruits">Fruits</option>
                  <option value="dairy">Dairy</option>
                  <option value="livestock">Livestock</option>
                  <option value="mixed">Mixed Farming</option>
                  <option value="Cereals">Cereals</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-gray-800">Contact Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contactName" className="block text-gray-700 mb-1">Contact Person*</label>
                <input type="text" id="contactName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
              </div>
              <div>
                <label htmlFor="contactEmail" className="block text-gray-700 mb-1">Email*</label>
                <input type="email" id="contactEmail" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
              </div>
              <div>
                <label htmlFor="contactPhone" className="block text-gray-700 mb-1">Phone*</label>
                <input type="tel" id="contactPhone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
              </div>
              <div>
                <label htmlFor="farmWebsite" className="block text-gray-700 mb-1">Website (optional)</label>
                <input type="url" id="farmWebsite" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-gray-800">Farm Location</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="farmCountry" className="block text-gray-700 mb-1">Country*</label>
                <select id="farmCountry" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required>
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="KE">Kenya</option>
                </select>
              </div>
              <div>
                <label htmlFor="farmState" className="block text-gray-700 mb-1">State/Region*</label>
                <input type="text" id="farmState" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
              </div>
              <div>
                <label htmlFor="farmZip" className="block text-gray-700 mb-1">ZIP/Postal Code*</label>
                <input type="text" id="farmZip" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="farmAddress" className="block text-gray-700 mb-1">Full Address*</label>
              <textarea id="farmAddress" rows="2" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required></textarea>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-gray-800">Farm Practices & Certifications</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="organicCert" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                <label htmlFor="organicCert" className="ml-2 block text-gray-700">Certified Organic</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="sustainable" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                <label htmlFor="sustainable" className="ml-2 block text-gray-700">Sustainable Practices</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="nonGMO" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                <label htmlFor="nonGMO" className="ml-2 block text-gray-700">Non-GMO</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="freeRange" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                <label htmlFor="freeRange" className="ml-2 block text-gray-700">Free Range</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="otherCert" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                <label htmlFor="otherCert" className="ml-2 block text-gray-700">Other Certifications (please specify below)</label>
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="farmDescription" className="block text-gray-700 mb-1">Farm Description*</label>
              <textarea id="farmDescription" rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required></textarea>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-gray-800">Delivery Options</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="deliveryLocal" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                <label htmlFor="deliveryLocal" className="ml-2 block text-gray-700">Local Delivery (within 50 miles)</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="deliveryRegional" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                <label htmlFor="deliveryRegional" className="ml-2 block text-gray-700">Regional Delivery (within state)</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="pickupFarm" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                <label htmlFor="pickupFarm" className="ml-2 block text-gray-700">Farm Pickup</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="pickupMarket" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                <label htmlFor="pickupMarket" className="ml-2 block text-gray-700">Farmers Market Pickup</label>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-gray-800">Payment & Terms</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <input type="checkbox" id="agreeTermsFarmer" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" required />
                <label htmlFor="agreeTermsFarmer" className="ml-2 block text-gray-700">I agree to the <a href="#" className="text-green-600 hover:text-green-800">Farmer Agreement</a> and <a href="#" className="text-green-600 hover:text-green-800">Privacy Policy</a>*</label>
              </div>
              <div className="text-sm text-gray-500">
                <p>After submission, our team will review your application and contact you within 2 business days to complete your onboarding.</p>
              </div>
            </div>
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-md font-medium hover:bg-green-700 transition">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  )
}

export default FarmerSignup
