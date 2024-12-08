export default function Footer() {
    return (
      <footer className="bg-purple-700 text-white py-10">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Menu */}
          <div>
            <h4 className="text-lg font-bold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>New Arrivals</li>
              <li>Best Seller</li>
              <li>Recently Viewed</li>
              <li>Popular This Week</li>
              <li>All Products</li>
            </ul>
          </div>
  
          {/* Column 2: Category */}
          <div>
            <h4 className="text-lg font-bold mb-4">Category</h4>
            <ul className="space-y-2">
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant Pots</li>
              <li>Chairs</li>
              <li>Crockery</li>
            </ul>
          </div>
  
          {/* Column 3: Our Company */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Company</h4>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Vacancies</li>
              <li>Contact Us</li>
              <li>Privacy</li>
              <li>Return Policy</li>
            </ul>
          </div>
  
          {/* Column 4: Mailing List */}
          <div>
            <h4 className="text-lg font-bold mb-4">Join Our Mailing List</h4>
            <form className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 text-gray-700 rounded"
              />
              <button className="bg-white text-purple-700 px-4 py-2 rounded">
                Sign Up
              </button>
            </form>
          </div>
        </div>
  
        {/* Divider */}
        <div className="border-t border-purple-500 my-6"></div>
  
        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm px-4">
          <p className="mb-4 md:mb-0">&copy; 2022 Avion LTD</p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook text-black"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin text-black"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter text-black"></i>
            </a>
            <a href="#" aria-label="Pinterest">
              <i className="fab fa-pinterest text-black"></i>
            </a>
            <a href="#" aria-label="Skype">
              <i className="fab fa-skype text-black"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram text-black"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  