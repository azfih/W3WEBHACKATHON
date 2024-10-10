import React, { useState } from 'react';

const DeviceDetailsInput = ({ onNext }) => {
    const [details, setDetails] = useState({
        brand: '',
        model: '',
        year: '',
        condition: '',
        storage: '',
        defects: [],
        serial: '',
        images: [],
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value });
    };

    const handleDefectChange = (defect) => {
        setDetails((prevDetails) => {
            const defects = prevDetails.defects.includes(defect)
                ? prevDetails.defects.filter((d) => d !== defect)
                : [...prevDetails.defects, defect];
            return { ...prevDetails, defects };
        });
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setDetails({ ...details, images: [...details.images, ...files] });
    };

    const validateForm = () => {
        const { brand, model, year, condition, storage, serial, images } = details;

        // Check if all fields are filled
        const fieldsFilled = brand && model && year && condition && storage && serial;

        // Ensure at least one image is uploaded
        const imagesUploaded = images.length > 0;

        return fieldsFilled && imagesUploaded;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted:", details);
            onNext();  // Move to the next step after successful form submission
        } else {
            alert("Please fill in all fields and upload at least one image.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="brand"
                onChange={handleChange}
                placeholder="Brand"
                className="w-full p-2 border border-gray-300 rounded"
                required
            />
            <input
                type="text"
                name="model"
                onChange={handleChange}
                placeholder="Model"
                className="w-full p-2 border border-gray-300 rounded"
                required
            />
            <input
                type="number"
                name="year"
                onChange={handleChange}
                placeholder="Year of Purchase"
                className="w-full p-2 border border-gray-300 rounded"
                required
            />
            <select
                name="condition"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
            >
                <option value="">Select Condition</option>
                <option value="new">New</option>
                <option value="used">Used</option>
                <option value="damaged">Damaged</option>
            </select>
            <input
                type="text"
                name="storage"
                onChange={handleChange}
                placeholder="Storage Capacity (e.g., 64GB)"
                className="w-full p-2 border border-gray-300 rounded"
                required
            />

            <div>
                <h4 className="font-semibold mb-2">Defects</h4>
                {['screen cracks', 'battery issues', 'malfunctioning buttons', 'other'].map((defect) => (
                    <label key={defect} className="flex items-center mb-1">
                        <input
                            type="checkbox"
                            checked={details.defects.includes(defect)}
                            onChange={() => handleDefectChange(defect)}
                            className="mr-2"
                        />
                        <span className="text-gray-700">{defect}</span>
                    </label>
                ))}
            </div>

            <input
                type="text"
                name="serial"
                onChange={handleChange}
                placeholder="Serial Number / IMEI"
                className="w-full p-2 border border-gray-300 rounded"
                required
            />

            <input
                type="file"
                multiple
                onChange={handleImageUpload}
                className="w-full p-2 border border-gray-300 rounded"
                required
            />

            <button
                type="submit"
                className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
            >
                Submit and Next
            </button>
        </form>
    );
};

export default DeviceDetailsInput;
