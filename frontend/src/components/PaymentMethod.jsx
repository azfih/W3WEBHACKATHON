import React, { useState } from 'react';

const PaymentMethod = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentDetails, setPaymentDetails] = useState({
        accountNumber: '',
        paypalEmail: '',
        walletDetails: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Payment Details Submitted:", paymentDetails);
        // You can send the payment details to the backend or admin here.
        alert('Payment details submitted successfully');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-semibold">Select Payment Method</h3>
            
            <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
            >
                <option value="">Choose Payment Method</option>
                <option value="bank">Bank Transfer</option>
                <option value="paypal">PayPal</option>
                <option value="wallet">Digital Wallet (Apple Pay, Google Pay)</option>
            </select>

            {paymentMethod === 'bank' && (
                <input
                    type="text"
                    name="accountNumber"
                    onChange={handleChange}
                    placeholder="Bank Account Number"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            )}
            
            {paymentMethod === 'paypal' && (
                <input
                    type="email"
                    name="paypalEmail"
                    onChange={handleChange}
                    placeholder="PayPal Email"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            )}
            
            {paymentMethod === 'wallet' && (
                <input
                    type="text"
                    name="walletDetails"
                    onChange={handleChange}
                    placeholder="Digital Wallet Details"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            )}

            <button
                type="submit"
                className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
            >
                Submit Payment Details
            </button>
        </form>
    );
};

export default PaymentMethod;
