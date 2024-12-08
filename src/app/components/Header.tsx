"use client"; // Marking as client-side component

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for navigation

export default function Header() {
  const router = useRouter(); // Correct usage of useRouter

  // Handle navigation to the products page
  const handleViewProducts = () => {
    router.push("/products");
  };

  // Dropdown state management
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);

  return (
    <header className="bg-gray-100 text-gray-800 p-6">
      {/* First section: Brand statement and View Our Products button */}
      <div className="flex justify-between items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-2xl font-semibold">
            A brand built on the love of craftsmanship, quality, and outstanding customer services.
          </h2>
        </div>

        {/* Right: Button */}
        <div>
          <button
            onClick={handleViewProducts}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            View Our Products
          </button>
        </div>
      </div>

      {/* Background Image and "AI Products" */}
      <div className="relative h-72 bg-cover bg-center mt-8" style={{ backgroundImage: 'url("aiproduct.png")' }}>
        <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
          <h2 className="text-4xl text-white font-bold">AI Products</h2>
        </div>
      </div>

      {/* "View All Products" Section */}
      <div className="mt-8 text-center">
        <button
          onClick={handleViewProducts}
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
        >
          View All Products
        </button>
      </div>

      {/* Filters Section: Category, Product Type, Price, and Brand */}
      <div className="mt-8 flex justify-between">
        <div className="relative">
          <button
            onClick={() => setCategoryOpen(!categoryOpen)}
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            Category
            <span className="ml-2">&#x25BC;</span>
          </button>
          {categoryOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              <ul>
                <li className="px-4 py-2">Category 1</li>
                <li className="px-4 py-2">Category 2</li>
                <li className="px-4 py-2">Category 3</li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => setTypeOpen(!typeOpen)}
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            Product Type
            <span className="ml-2">&#x25BC;</span>
          </button>
          {typeOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              <ul>
                <li className="px-4 py-2">Type 1</li>
                <li className="px-4 py-2">Type 2</li>
                <li className="px-4 py-2">Type 3</li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => setPriceOpen(!priceOpen)}
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            Price
            <span className="ml-2">&#x25BC;</span>
          </button>
          {priceOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              <ul>
                <li className="px-4 py-2">$0 - $50</li>
                <li className="px-4 py-2">$50 - $100</li>
                <li className="px-4 py-2">$100+</li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => setBrandOpen(!brandOpen)}
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            Brand
            <span className="ml-2">&#x25BC;</span>
          </button>
          {brandOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              <ul>
                <li className="px-4 py-2">Brand 1</li>
                <li className="px-4 py-2">Brand 2</li>
                <li className="px-4 py-2">Brand 3</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
