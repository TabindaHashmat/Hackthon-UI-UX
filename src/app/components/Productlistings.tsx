"use client"; // This will mark the file as a client-side component

import { useState } from "react";

const ProductCard = ({ product }: { product: { id: number; name: string; price: number; image: string } }) => (
  <div className="text-center">
   
   <img
      src={product.image || "/wood.png"} // Uses product image or fallback to wood.png from public folder
      alt={product.name}
      onError={(e) => (e.currentTarget.src = "/wood.png")} // Fallback image if one doesn't load
      className="w-full h-48 object-cover rounded-lg shadow-md"
    />
    <h5 className="mt-4 text-lg font-semibold text-gray-700">{product.name}</h5>
    <p className="text-gray-600">${product.price}</p>

  </div>
);

const ProductListing = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (action: "increment" | "decrement") => {
    if (action === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Initialize products array with images from public/images folder
  const products = [
    { id: 1, name: "Chair 1", price: 199, image: "chairfancy.png" },
    { id: 2, name: "Chair 2", price: 199, image: "good.png" },
    { id: 3, name: "Chair 3", price: 199, image: "wow.png" },
    { id: 4, name: "Chair 4", price: 199, image: "chair1.png" },
    { id: 5, name: "Chair5", price: 199, image: "chair2.png" },
    { id: 6, name: "Chair 6", price: 199, image: "chair3.png" },
    { id: 7, name: "Product 7", price: 199, image: "chairs.png" },
    { id: 8, name: "Chair 8", price: 199, image: "sofa.png" },
    { id: 9, name: "Chair 9", price: 199, image: "pink.png" },
    { id: 10, name: "Chair10", price: 199, image: "aiproduct.png" },
    { id: 11, name: "Chair11", price: 199, image: "sofa1.png" },
    { id: 12, name: "Chair12", price: 199, image: "orange.png" },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Main Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Product Image */}
        <div>
          <img
            src="/images/wood.png" // Image path for main product
            alt="Dandy Chair"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div>
          <h3 className="text-3xl font-bold mb-2">The Dandy Chair</h3>
          <h5 className="text-xl font-semibold text-gray-700">$250</h5>
          <h5 className="text-lg font-medium text-gray-500 mt-4">Description</h5>
          <p className="text-gray-600 mt-2">
            A timeless design with premium material. As one of our most popular
            and iconic pieces, the Dandy Chair is perfect for any stylish living
            space with beech legs and lambskin leather upholstery.
          </p>

          {/* Features */}
          <ul className="list-disc ml-5 mt-4 text-gray-600">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>

          {/* Dimensions */}
          <h6 className="text-lg font-semibold text-gray-700 mt-6">Dimensions</h6>
          <div className="flex gap-8 mt-2 text-gray-600">
            <p>Height: 11cm</p>
            <p>Width: 75cm</p>
            <p>Depth: 50cm</p>
          </div>

          {/* Quantity Selector and Add to Cart */}
          <div className="flex items-center mt-6">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="px-4 py-2 text-lg font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition ease-in-out duration-300"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="px-6 py-2 text-lg text-gray-700">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="px-4 py-2 text-lg font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition ease-in-out duration-300"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button
              className="ml-auto px-6 py-3 bg-blue-800 text-white text-lg font-semibold rounded-md hover:bg-blue-900 transition ease-in-out duration-300"
              aria-label={`Add ${quantity} Dandy Chair(s) to Cart`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* "You Might Also Like" Section */}
      <div className="mt-16">
        <h4 className="text-2xl font-bold mb-6">You Might Also Like</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product Cards */}
          {products.length > 0 ? (
            products.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <p className="text-gray-600">No products available at the moment.</p>
          )}
        </div>

        {/* View Collection Button */}
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-gray-100 text-gray-700 text-lg font-semibold rounded-md hover:bg-gray-200 transition ease-in-out duration-300">
            View Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
