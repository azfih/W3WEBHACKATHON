import React, { useState } from 'react';
import DeviceDetailsInput from './DeviceDetailsInput'; // Adjust the import path as necessary
import NextStepComponent from './NextStepComponent'; // Replace with your actual next step component

const DeviceForm = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    return (
        <div className="container mx-auto p-4">
            {currentStep === 1 && <DeviceDetailsInput onNext={handleNext} />}
            {currentStep === 2 && <NextStepComponent />} {/* Replace with your actual component for step 2 */}
            {/* Add more steps as needed */}
        </div>
    );
};

export default DeviceForm;
