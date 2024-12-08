import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import About from './components/About'; 
import Productlisting from './components/Productlistings' ;
import Footer from './components/Footer'
export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Header Section */}
      <Header />
      
      {/* Banner Section */}
      <Banner />
      
      {/* About Section */}
      <About />
      
      {/* Shopping Cart Section */}
      <Cart />
      
      {/* Welcome Section */}
      <div className="container mx-auto text-center py-10">
        
    
      </div>
      
      {/* Product Listing Section */}
      <Productlisting />
      <Footer />
    </>
  );
}
