import React from 'react';
import { FaTruck } from 'react-icons/fa'; // Import the truck icon

export default function Banner() {
  return (
    <div className="space-y-4 py-4">
      {/* First Block: Navy Blue Background */}
      <div className="flex justify-center items-center bg-slate-900 text-white py-4">
        <FaTruck className="mr-2" /> {/* Truck Icon */}
        <h4 className="text-center text-sm">
          Free delivery on all orders over ₤50 with code <strong>eastercheckout</strong>
        </h4>
      </div>

      {/* White Line */}
      <div className="w-full bg-white h-1"></div> {/* White Line covering full width */}

      {/* Second Block: White Background */}
      <div className="flex justify-center items-center bg-white text-black py-4">
        <FaTruck className="mr-2" /> {/* Truck Icon */}
        <p className="text-center text-sm">
          Free delivery on all orders over ₤50 with code <strong>eastercheckout</strong>
        </p>
      </div>

      {/* White Line */}
      <div className="w-full bg-white h-1"></div> {/* White Line covering full width */}
    </div>
  );
}

