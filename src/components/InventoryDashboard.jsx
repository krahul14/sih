import React, { useState } from 'react';
import { Button, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper, Box } from '@mui/material';
import Header from './Header';
import NewInventoryModal from './NewInventoryModal';

const initialInventory = [
  { id: '001', name: 'Laptop A', status: 'Available' },
  { id: '002', name: 'Desktop B', status: 'In Use' },
  { id: '003', name: 'Printer C', status: 'Available' },
];

const InventoryDashboard = () => {
  const [inventory, setInventory] = useState(initialInventory);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const addNewInventory = (newItem) => {
    setInventory([...inventory, newItem]);
  };

  return (
    <div>
      <Header title="Inventory Dashboard" />

      {/* Flexbox to align the button and inventory list */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Button variant="contained" color="primary" onClick={handleOpenModal}>
          List New Inventory
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Inventory Name</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="secondary">
                    View Logs
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <NewInventoryModal open={openModal} onClose={handleCloseModal} addNewInventory={addNewInventory} />
    </div>
  );
};

export default InventoryDashboard;
