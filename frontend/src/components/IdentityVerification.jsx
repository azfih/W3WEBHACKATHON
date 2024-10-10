import React, { useState } from 'react';

const IdentityVerification = ({ onNext }) => {
    const [identityDetails, setIdentityDetails] = useState({
        name: '',
        cnic: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setIdentityDetails({ ...identityDetails, [name]: value });
    };

    const validateForm = () => {
        const { name, cnic, email, phone } = identityDetails;
        const cnicPattern = /^\d{5}-\d{7}-\d{1}$/; // CNIC pattern: 12345-1234567-1
        const phonePattern = /^[0-9]{11}$/; // Assuming 11 digits phone number for proper validation

        return (
            name &&
            cnicPattern.test(cnic) &&
            /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) && // Email regex
            phonePattern.test(phone)
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch('http://localhost:4000/api/olx/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(identityDetails),
                });
                const data = await response.json();

                if (response.ok) {
                    alert(data.message);
                    onNext(); // Call the onNext function if the submission is successful
                } else {
                    alert(data.error || 'An error occurred during submission.');
                }
            } catch (error) {
                alert('Network error: ' + error.message);
            }
        } else {
            alert('Please enter valid details in the form.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-gray-700">User Identity Verification</h2>

            <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
            />
            <input
                type="text"
                name="cnic"
                placeholder="CNIC (12345-1234567-1)"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
            />
            <input
                type="tel"
                name="phone"
                placeholder="Phone Number (11 digits)"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
            />

            <button
                type="submit"
                className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600 transition focus:outline-none"
            >
                Verify and Proceed
            </button>
        </form>
    );
};

export default IdentityVerification;
