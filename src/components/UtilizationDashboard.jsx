import React, { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper, Box } from '@mui/material';
import Header from './Header';

const initialAssets = [
  { id: '001', name: 'Laptop A', status: 'Available', location: 'Warehouse A' },
  { id: '002', name: 'Printer C', status: 'In Use', location: 'Office B' },
];

const UtilizationDashboard = () => {
  const [assets] = useState(initialAssets);

  return (
    <div>
      <Header title="Utilization Monitoring Dashboard" />

      <Box sx={{ marginBottom: '16px' }} />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Asset Name</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assets.map((asset) => (
              <TableRow key={asset.id}>
                <TableCell>{asset.name}</TableCell>
                <TableCell>{asset.id}</TableCell>
                <TableCell>{asset.location}</TableCell>
                <TableCell>{asset.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UtilizationDashboard;
