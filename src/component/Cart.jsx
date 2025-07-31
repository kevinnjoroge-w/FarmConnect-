import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ isOpen, onClose }) => {
  // For now, cart items are empty
  const cartItems = [];

  if (!isOpen) return null;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 overflow-auto">
      <h3 className="text-xl font-bold mb-6 text-center">Your Cart</h3>
      <div id="cartItems" className="space-y-4 mb-6">
        {cartItems.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            <FontAwesomeIcon icon={faShoppingCart} className="text-4xl mb-2" />
            <p>Your cart is empty</p>
          </div>
        ) : (
          // Render cart items here when implemented
          cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))
        )}
      </div>

      <div id="cartSummary" className={`border-t border-gray-200 pt-4 ${cartItems.length === 0 ? 'hidden' : ''}`}>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-semibold" id="cartSubtotal">$0.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Delivery:</span>
          <span className="font-semibold" id="cartDelivery">Calculated at checkout</span>
        </div>
        <div className="flex justify-between text-lg font-bold mt-4">
          <span>Estimated Total:</span>
          <span id="cartTotal">$0.00</span>
        </div>

        <button className="w-full bg-green-600 text-white py-3 rounded-md mt-6 font-medium hover:bg-green-700 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
