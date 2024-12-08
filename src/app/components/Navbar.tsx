import React from "react";
import Link from "next/link";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      {/* Top Section: Icons */}
      <div className="flex justify-between items-center px-4 py-3">
        {/* Left: Search Icon */}
        <div className="text-xl">
          <FiSearch />
        </div>
<h6> Avion </h6>
        {/* Right: Shopping Cart and Profile Icons */}
        <div className="flex items-center space-x-4">
          <FiShoppingCart className="text-xl" />
          <FiUser className="text-xl" />
        </div>
      </div>

      {/* Bottom Section: Categories */}
      <div className="bg-gray-700">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-6 py-2 text-sm md:text-base">
            {[
              "Planters",
              "Ceramics",
              "Tablets",
              "Chairs",
              "Crockery",
              "Tableware",
              "Cutlery",
            ].map((category) => (
              <li key={category}>
                <Link
                  href={`/categories/${category.toLowerCase()}`}
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
