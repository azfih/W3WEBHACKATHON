import React, { useState } from 'react';
import Landing from '../components/Landing';
import IdentityVerification from '../components/IdentityVerification';
import DeviceSelection from '../components/DeviceSelection';
import DeviceDetailsInput from '../components/DeviceDetailsInput';
import ServiceSelection from '../components/ServiceSelection';
import PaymentMethod from '../components/PaymentMethod'; // Import the PaymentMethod component

function SellDeviceForm() {
    const [step, setStep] = useState(1);  // Step counter
    const [selectedService, setSelectedService] = useState('');
    const [estimatedPrice, setEstimatedPrice] = useState(null); // To store the calculated price
    const [isPriceAccepted, setIsPriceAccepted] = useState(false); // To track if price is accepted

    // Function to handle next step transition
    const handleNextStep = (service) => {
        if (service) setSelectedService(service);
        setStep((prev) => prev + 1);  // Move to next step
    };

    // Function to calculate the price based on device details
    const calculatePrice = (deviceDetails) => {
        let price = 100; // Base price (you can change this logic based on actual data)
        if (deviceDetails.condition === 'new') price += 200;
        if (deviceDetails.condition === 'used') price += 100;
        if (deviceDetails.defects.length > 0) price -= deviceDetails.defects.length * 50;
        return price;
    };

    // Function to handle price acceptance
    const handlePriceAcceptance = (accepted) => {
        if (accepted) {
            setIsPriceAccepted(true);
            setStep(5); // Move to the payment method selection step
        } else {
            alert("Process cancelled. Returning to home page.");
            setStep(1); // Reset to start or redirect as needed
        }
    };

    return (
        <div className="font-sans bg-gray-50 min-h-screen">
            {/* Landing Section */}
            <Landing />

            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
                <h2 className="text-3xl font-semibold text-center mb-6">Sell Your Device</h2>
                <p className="text-center text-gray-600 mb-4">Follow the steps below to get started:</p>
                
                {/* Step Management */}
                {step === 1 && (
                    <div className="mb-4">
                        {/* Identity Verification */}
                        <IdentityVerification onNext={handleNextStep} />
                    </div>
                )}

                {step === 2 && (
                    <div className="mb-4">
                        {/* Device Selection */}
                        <DeviceSelection categories={['Smartphones', 'Tablets', 'Laptops']} />
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={() => handleNextStep()}
                                className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition">
                                Next
                            </button>
                        </div>
                    </div>
                )}
                
                {step === 3 && (
                    <div className="mb-4">
                        {/* Device Details Input */}
                        <DeviceDetailsInput onNext={handleNextStep} />
                        {/* <DeviceDetailsInput onNext={(deviceDetails) => {
                            const price = calculatePrice(deviceDetails); // Calculate price
                            setEstimatedPrice(price);
                            setStep(4); // Move to price estimation step
                        }} /> */}
                    </div>
                )}

                {step === 4 && (
                    <div className="mb-4 text-center">
                        {/* Display Price Estimation */}
                        <h3 className="text-xl mb-4">Estimated Price: ${estimatedPrice}</h3>
                        <button
                            onClick={() => handlePriceAcceptance(true)}
                            className="bg-green-500 text-white px-4 py-2 rounded mr-4"
                        >
                            Accept Price
                        </button>
                        <button
                            onClick={() => handlePriceAcceptance(false)}
                            className="bg-red-500 text-white px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                    </div>
                )}

                {step === 5 && isPriceAccepted && (
                    <div className="mb-4">
                        {/* Payment Method Selection */}
                        <PaymentMethod />
                    </div>
                )}

              
                {/* Add more steps as needed */}
            </div>
        </div>
    );
}

export default SellDeviceForm;
