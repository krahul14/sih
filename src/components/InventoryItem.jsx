import React from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <tr className="border-t hover:bg-gray-100 transition">
      <td className="py-2 px-4">{item.name}</td>
      <td className="py-2 px-4">{item.id}</td>
      <td className="py-2 px-4">{item.status}</td>
      <td className="py-2 px-4">
        <button 
          onClick={() => navigate(`/inventory/${item.id}`)} 
          className="text-blue-500 hover:underline"
        >
          View Logs
        </button>
      </td>
    </tr>
  );
};

export default InventoryItem;
