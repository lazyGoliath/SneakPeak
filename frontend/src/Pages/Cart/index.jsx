import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

const Cart = () => {
  const {
    items,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    clearCart
  } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link
            to="/"
            className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="hidden md:grid grid-cols-12 bg-gray-100 p-4 font-medium">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-right">Total</div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {items.map((item) => (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 p-4 items-center">
                <div className="col-span-6 flex items-center space-x-4 mb-4 md:mb-0">
                  <img
                    src={item.images?.[0] || 'https://via.placeholder.com/80'}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.brand}</p>
                  </div>
                </div>
                
                <div className="col-span-2 text-center mb-4 md:mb-0">
                  <span className="md:hidden font-medium mr-2">Price:</span>
                  {item.price}
                </div>
                
                <div className="col-span-2 flex items-center justify-center space-x-2 mb-4 md:mb-0">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 rounded-full hover:bg-gray-100"
                    aria-label="Decrease quantity"
                  >
                    <FaMinus className="text-gray-500" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                    className="w-12 text-center border rounded"
                  />
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-full hover:bg-gray-100"
                    aria-label="Increase quantity"
                  >
                    <FaPlus className="text-gray-500" />
                  </button>
                </div>
                
                <div className="col-span-2 flex items-center justify-between md:justify-end">
                  <div className="text-right">
                    <span className="md:hidden font-medium mr-2">Total:</span>
                    ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                    aria-label="Remove item"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Order Summary</h2>
              <button
                onClick={clearCart}
                className="text-sm text-red-500 hover:text-red-700"
              >
                Clear Cart
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${getCartTotal()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>${getCartTotal()}</span>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <button
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
                onClick={() => {
                  // Handle checkout
                  alert('Proceeding to checkout!');
                }}
              >
                Proceed to Checkout
              </button>
              <Link
                to="/"
                className="block text-center text-gray-600 hover:text-black transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
