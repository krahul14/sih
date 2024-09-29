import React from 'react';
import InventoryItem from './InventoryItem';

const InventoryList = ({ inventory }) => {
  if (inventory.length === 0) {
    return <p>No inventory items found</p>;
  }

  return (
    <table className="min-w-full bg-white rounded shadow-md">
      <thead>
        <tr>
          <th className="py-2 px-4">Inventory Name</th>
          <th className="py-2 px-4">ID</th>
          <th className="py-2 px-4">Status</th>
          <th className="py-2 px-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {inventory.map((item) => (
          <InventoryItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default InventoryList;
