import { FaTruck, FaCheck, FaCalendarAlt, FaLeaf } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10 px-4 space-y-10">
      {/* Top Section with Images and Paragraph */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Three Images in a Square Layout */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="chair3.png"
            alt="Furniture 1"
            className="w-full h-auto"
          />
          <img
            src="chair1.png"
            alt="Furniture 2"
            className="w-full h-auto"
          />
          <img
            src="chair2.png"
            alt="Furniture 3"
            className="col-span-2 w-full h-auto"
          />
        </div>
        
        {/* Right: Paragraph Content */}
        <div className="flex flex-col justify-between bg-slate-900">
          <h2 className="text-2xl font-bold text-white ">
            Our service is not just personal, it's actually hyper-personally exquisite.
          </h2>
          <div className="space-y-4 mt-4">
            <h4 className="text-lg text-white">
              When we started Avion, the idea was simple: make high-quality furniture affordable and available for the mass market.
            </h4>
            <h4 className="text-lg text-white">
              Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so our Chelsea boutique became the hotbed for the London interior design community.
            </h4>
          </div>
          <button className="mt-6 bg-gray-200 text-black py-2 px-4 rounded">
            Get in Touch
          </button>
        </div>
      </div>

      {/* What Makes Our Brand Different */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-center">What Makes Our Brand Different</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* First Column */}
          <div className="flex flex-col items-center space-y-2">
            <FaTruck className="text-3xl text-gray-800" />
            <h5 className="font-semibold">Next Day as Standard</h5>
            <p className="text-sm">Receive your orders faster than ever with our efficient delivery service.</p>
          </div>
          {/* Second Column */}
          <div className="flex flex-col items-center space-y-2">
            <FaCheck className="text-3xl text-gray-800" />
            <h5 className="font-semibold">Made by True Artisans</h5>
            <p className="text-sm">Crafted with love and precision by skilled experts.</p>
          </div>
          {/* Third Column */}
          <div className="flex flex-col items-center space-y-2">
            <FaCalendarAlt className="text-3xl text-gray-800" />
            <h5 className="font-semibold">Unbeatable Prices</h5>
            <p className="text-sm">Luxury furniture at prices that everyone can afford.</p>
          </div>
          {/* Fourth Column */}
          <div className="flex flex-col items-center space-y-2">
            <FaLeaf className="text-3xl text-gray-800" />
            <h5 className="font-semibold">Recycled Packaging</h5>
            <p className="text-sm">Committed to sustainability with eco-friendly packaging.</p>
          </div>
        </div>
      </div>

      {/* Join the Club Section */}
      <div className="text-center space-y-4">
        <h4 className="text-xl font-bold text-navy-blue">Join the Club and Get the Benefits</h4>
        <p className="text-navy-blue">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-ups, stores, and more.
        </p>
        <div className="flex justify-center mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-l px-4 py-2 w-64 focus:outline-none"
          />
          <button className="bg-navy-blue text-white px-6 py-2 rounded-r">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
