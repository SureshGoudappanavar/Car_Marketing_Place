import React from 'react';

function TextField({ item, handleInputChange,carInfo }) {
  // Define the handler outside JSX
  const handleChange = (e) => {
    const { value } = e.target;
    handleInputChange(item.name, value); // Call the passed-in function
  };

  return (
    <div>
      <input
        type="text"  // Set input type to "text"
        onChange={handleChange}  // Use the handler function here
        required={item.required}  // Conditionally set required attribute
       defaultValue={carInfo?.[item.name]}

        placeholder={item.label}  // Optional: add placeholder for clarity
        className="border rounded p-2 w-full"  // Add some basic styling
      />
    </div>
  );
}

export default TextField;


