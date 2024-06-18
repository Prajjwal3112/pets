import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-yellow-600 text-2xl font-bold">Glocal</div>
          <ul className="hidden md:flex space-x-6">
            <li className="hover:text-yellow-600">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-yellow-600">
              <Link to="/categories">Categories</Link>
            </li>
            <li className="hover:text-yellow-600"><a href="#">About Us</a></li>
            <li className="hover:text-yellow-600"><a href="#">Products</a></li>
            <li className="hover:text-yellow-600"><a href="#">Pet Care</a></li>
            <li className="hover:text-yellow-600"><a href="#">Contact</a></li>
          </ul>
          <div className="hidden md:flex space-x-4">
            <button className="bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-700 rounded">Sign In</button>
            <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded">Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
