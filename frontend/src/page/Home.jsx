import React from 'react';
import Landing from '../components/Landing';
 // Make sure this path is correct

function Home() {
  return (
    <div>
     
      <Landing/>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-800">Easily Sell Your Devices Online!</h2>
        <p className="mt-4 text-lg text-gray-600">Quick, secure, and hassle-free.</p>
        <button className="mt-8 bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition">
          Get a Quote Now
        </button>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
          <img src="/images/1.jpg" alt="Device" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">1. Select Your Device</h3>
            <p className="text-gray-600 mt-2">Choose from a wide range of devices to sell.</p>
          </div>
          <div className="p-6">
          <img src="/images/2.jpg" alt="Price" className="mx-auto mb-4" />

            <h3 className="text-xl font-semibold text-gray-800">2. Get an Instant Price</h3>
            <p className="text-gray-600 mt-2">We calculate a competitive price instantly.</p>
          </div>
          <div className="p-6">
          <img src="/images/3.avif" alt="Payment" className="mx-auto mb-4 h-[19vw] w-[26.5vw]" />
            <h3 className="text-xl font-semibold text-gray-800">3. Confirm and Get Paid</h3>
            <p className="text-gray-600 mt-2">Secure payments through your chosen method.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2024 SellifyTech. All rights reserved.</p>
          <div className="space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
