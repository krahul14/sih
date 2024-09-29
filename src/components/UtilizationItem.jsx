import React from 'react';

const UtilizationItem = ({ asset }) => {
  return (
    <tr className="border-t hover:bg-gray-100 transition">
      <td className="py-2 px-4">{asset.name}</td>
      <td className="py-2 px-4">{asset.id}</td>
      <td className="py-2 px-4">{asset.location}</td>
      <td className="py-2 px-4">{asset.status}</td>
      <td className="py-2 px-4">
        <button className="text-blue-500 hover:underline">View Logs</button>
      </td>
    </tr>
  );
};

export default UtilizationItem;
