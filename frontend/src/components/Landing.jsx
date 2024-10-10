import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Landing() {
  return (
    <div>
      <header className="bg-white shadow-md py-4">
        <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-teal-500">SellifyTech</h1>

          <div className="space-x-6">
            <Link to="/sell-device" className="text-gray-700 hover:text-teal-500">Sell Your Device</Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-teal-500">How It Works</Link>
            <Link to="/about" className="text-gray-700 hover:text-teal-500">About Us</Link>
            <Link to="/admin-login" className="text-gray-700 hover:text-teal-500">Admin Login</Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Landing;
