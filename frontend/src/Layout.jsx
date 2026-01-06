import { Link, Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import Hero from './Components/Hero';

function Layout() {
  // State to track mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 z-10 w-full bg-blue-900 bg-opacity-70 text-white py-4 px-10 shadow-md backdrop-blur-md">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-semibold">
            <Link to="/home" className="hover:text-blue-400 font-mono ">Laptop Picker</Link>
          </div>

          {/* Navbar Links (Desktop) */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/home" 
              className="hover:text-blue-400 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link 
              to="/laptops" 
              className="hover:text-blue-400 transition duration-300 ease-in-out"
            >
              All Laptops
            </Link>
            <Link 
              to="/add" 
              className="hover:text-blue-400 transition duration-300 ease-in-out"
            >
              Add Laptop
            </Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay (Visible when the menu is open) */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)} // Close the menu when overlay is clicked
      ></div>

      {/* Mobile Menu (Toggled visibility with smooth transitions) */}
      <div 
        className={`md:hidden fixed transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} mt-4 px-4`}
      >
        <Link 
          to="/home" 
          className="block py-2 text-white hover:text-blue-400 transition duration-300 ease-in-out mt-16"
          onClick={() => setIsMenuOpen(false)} // Close the menu when link is clicked
        >
          Home
        </Link>
        <Link 
          to="/laptops" 
          className="block py-2 text-white hover:text-blue-400 transition duration-300 ease-in-out"
          onClick={() => setIsMenuOpen(false)} // Close the menu when link is clicked
        >
          All Laptops
        </Link>
        <Link 
          to="/add" 
          className="block py-2 text-white hover:text-blue-400 transition duration-300 ease-in-out"
          onClick={() => setIsMenuOpen(false)} // Close the menu when link is clicked
        >
          Add Laptop
        </Link>
      </div>

      {/* Hero Section */}

      {/* Main Content */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
