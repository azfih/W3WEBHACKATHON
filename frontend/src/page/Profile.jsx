import React, { useState }  from 'react'

function Profile() {
   
    const [formData, setFormData] = useState({
        name: '',
        cnic: '',
        phoneNumber: '',
        email: '',
        cnicImage: null,
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleImageChange = (e) => {
        setFormData({ ...formData, cnicImage: e.target.files[0] });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Validate and submit form data
        console.log(formData);
      };
    
      return (
        <div className="max-w-md mx-auto mt-10">
          <h2 className="text-2xl font-bold mb-6">Sell a Device</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
    
            {/* CNIC */}
            <div>
              <label className="block text-sm font-medium text-gray-700">CNIC (e.g., 12345-6789012-3)</label>
              <input
                type="text"
                name="cnic"
                value={formData.cnic}
                onChange={handleInputChange}
                pattern="\d{5}-\d{7}-\d{1}" // CNIC format validation
                placeholder="XXXXX-XXXXXXX-X"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
    
            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number (11 digits)</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                pattern="\d{11}" // 11-digit phone number validation
                placeholder="03XXXXXXXXX"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
    
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
    
            {/* CNIC Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Upload CNIC Picture</label>
              <input
                type="file"
                name="cnicImage"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
    
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      );
    };


export default Profile