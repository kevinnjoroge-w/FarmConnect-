import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeCart = () => {
    setIsOpen(false);
  };

  // For now, cart items are empty
  const cartItems = [];

  return (
    <>
      {isOpen && (
        <div id="cartModal" className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-start z-50 overflow-auto">
          <div className="bg-white rounded-none shadow-xl w-full h-full overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6 sticky top-0 bg-white z-10">
              <h3 className="text-xl font-bold">Your Cart</h3>
              <button id="closeCartBtn" className="text-gray-500 hover:text-gray-700" onClick={closeCart}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

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
        </div>
      )}
    </>
  );
};

export default Cart;
