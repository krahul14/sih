import React from 'react';
import UtilizationItem from './UtilizationItem';

const UtilizationList = ({ assets }) => {
  if (assets.length === 0) {
    return <p>No assets available</p>;
  }

  return (
    <table className="min-w-full bg-white rounded shadow-md">
      <thead>
        <tr>
          <th className="py-2 px-4">Asset Name</th>
          <th className="py-2 px-4">ID</th>
          <th className="py-2 px-4">Location</th>
          <th className="py-2 px-4">Status</th>
          <th className="py-2 px-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {assets.map((asset) => (
          <UtilizationItem key={asset.id} asset={asset} />
        ))}
      </tbody>
    </table>
  );
};

export default UtilizationList;
