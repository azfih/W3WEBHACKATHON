import React from 'react';

const ServiceSelection = ({ onNext }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold mb-2">Choose Service</h2>
            <button
                onClick={() => onNext('pickup')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
            >
                Pickup Service
            </button>
            <button
                onClick={() => onNext('parcel')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
            >
                Parcel Service
            </button>
        </div>
    );
};

export default ServiceSelection;
