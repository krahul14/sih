import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
  const { id } = useParams();

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Logs for Inventory ID: {id}</h2>
      <div>
        {/* Display logs here */}
        <p>No logs available yet</p>
      </div>
    </div>
  );
};

export default InventoryDetails;
