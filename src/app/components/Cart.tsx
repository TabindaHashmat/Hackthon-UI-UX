import React from 'react';

export default function ShoppingCart() {
  return (
    <div className="p-4 border border-gray-300 bg-white">
      {/* Header Row */}
      <div className="flex justify-between items-center border-b pb-2">
        <h1 className="font-bold text-lg">Shopping Cart</h1>
        <div className="flex space-x-8 text-sm font-medium">
          <p>Quantity</p>
          <p>Total</p>
        </div>
      </div>

      {/* First Item */}
      <div className="flex justify-between items-center py-4 border-b">
        <div className="flex items-center space-x-4">
          <img
            src="gray.png" // Replace with actual image path
            alt="Graystone Vase"
            className="w-16 h-16 object-cover"
          />
          <div>
            <p className="font-semibold">Graystone Vase</p>
            <p className="text-sm text-gray-600">
              A timeless ceramic vase with a tri-color grey glaze.
            </p>
            <p className="font-medium">$85</p>
          </div>
        </div>
        <div className="flex space-x-8 text-sm font-medium">
          <p>1</p>
          <p>$85</p>
        </div>
      </div>

      {/* Second Item */}
      <div className="flex justify-between items-center py-4 border-b">
        <div className="flex items-center space-x-4">
          <img
            src="white.jpg" // Replace with actual image path
            alt="Basic White Vase"
            className="w-16 h-16 object-cover"
          />
          <div>
            <p className="font-semibold">Basic White Vase</p>
            <p className="text-sm text-gray-600">
              Beautiful and simple, this is one for the classic.
            </p>
            <p className="font-medium">$85</p>
          </div>
        </div>
        <div className="flex space-x-8 text-sm font-medium">
          <p>1</p>
          <p>$85</p>
        </div>
      </div>

      {/* Subtotal */}
      <div className="flex justify-between items-center py-4 border-b">
        <p className="text-navy-blue font-semibold text-lg">Subtotal</p>
        <p className="font-bold text-lg">$120</p>
      </div>

      {/* Taxes and Shipping */}
      <p className="text-sm text-navy-blue mt-2">
        Taxes and shipping are calculated at checkout.
      </p>

      {/* Checkout Button */}
      <div className="flex justify-end mt-4">
        <button className="bg-navy-blue text-white px-6 py-2 font-medium rounded">
          Go to Checkout
        </button>
      </div>
    </div>
  );
}
