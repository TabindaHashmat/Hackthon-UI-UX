import React from 'react';

export default function HeroBlocks() {
  return (
    <div className="space-y-20">
      {/* First Hero Block */}
      <div className="flex h-screen">
        {/* Left Half: Image */}
        <div className="w-1/2">
          <img
            src="/path-to-your-image1.jpg" // Replace with your actual image
            alt="Homeware Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Half: Content */}
        <div className="w-1/2 flex items-center justify-center bg-white">
          <div className="text-center px-8">
            <h3 className="text-3xl font-bold mb-4">
              Homeware that puts quality and style at the heart of its brand.
            </h3>
            <h5 className="text-lg text-gray-600 mb-8">
              With our new collection, view over 400 bespoke pieces from homeware through to furniture today.
            </h5>
            <button className="px-6 py-3 bg-gray-100 text-black font-semibold">
              View Collection
            </button>
          </div>
        </div>
      </div>

      {/* Second Hero Block */}
      <div className="flex h-screen">
        {/* Left Half: Content */}
        <div className="w-1/2 flex items-center justify-center bg-white">
          <div className="text-center px-8">
            <h3 className="text-3xl font-bold mb-4">
              Luxury homeware for people who love timeless design quality.
            </h3>
            <h5 className="text-lg text-gray-600 mb-8">
              Shop the new Spring 2022 collection today.
            </h5>
            <button className="px-6 py-3 bg-gray-100 text-black font-semibold">
              View Collection
            </button>
          </div>
        </div>

        {/* Right Half: Image */}
        <div className="w-1/2">
          <img
            src="/path-to-your-image2.jpg" // Replace with your actual image
            alt="Luxury Homeware"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Third Hero Block */}
      <div className="flex h-screen">
        {/* Left Half: Content */}
        <div className="w-1/2 flex items-center justify-center bg-white">
          <div className="text-center px-8">
            <h3 className="text-3xl font-bold mb-4">
              The furniture brand for the future, with timeless design.
            </h3>
            <h5 className="text-lg text-gray-600 mb-4">
              A new era in eco-friendly furniture with Avalon, the French luxury retail brand.
            </h5>
            <p className="text-md text-gray-500 mb-8">
              With nice fonts, tasteful colors, and a beautiful way to display things digitally using modern web technologies.
            </p>
            <button className="px-6 py-3 bg-gray-100 text-black font-semibold">
              View Collection
            </button>
          </div>
        </div>

        {/* Right Half: Image */}
        <div className="w-1/2">
          <img
            src="/path-to-your-image3.jpg" // Replace with your actual image
            alt="Eco-Friendly Furniture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
