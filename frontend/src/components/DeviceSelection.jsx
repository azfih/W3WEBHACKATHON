import React, { useState } from 'react';

const DeviceSelection = ({ categories }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [devices, setDevices] = useState([]);

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        // Replace the below line with your actual fetching logic
        setDevices(fetchDevicesByCategory(category));
    };

    return (
        <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="device-category">
                Select Device Category
            </label>
            <select
                id="device-category"
                onChange={handleCategoryChange}
                className="block w-full p-2 border border-gray-300 rounded mb-4"
            >
                <option value="">Select a category</option>
                {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>

            {selectedCategory && (
                <div>
                    <h3 className="text-lg font-semibold mb-2">Select Your Device</h3>
                    <ul className="list-disc ml-5">
                        {devices.map((device) => (
                            <li key={device.id} className="mb-1">{device.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DeviceSelection;
