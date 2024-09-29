import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';

const NewInventoryModal = ({ open, onClose, addNewInventory }) => {
  const [newInventory, setNewInventory] = useState({ name: '', id: '', status: 'Available' });

  const handleSubmit = () => {
    addNewInventory(newInventory);
    onClose(); // Close the modal after adding new inventory
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ width: '300px', padding: '20px', margin: 'auto', backgroundColor: 'white', mt: '10%' }}>
        <h2>Add New Inventory</h2>
        <TextField
          label="Inventory Name"
          fullWidth
          margin="normal"
          value={newInventory.name}
          onChange={(e) => setNewInventory({ ...newInventory, name: e.target.value })}
        />
        <TextField
          label="Inventory ID"
          fullWidth
          margin="normal"
          value={newInventory.id}
          onChange={(e) => setNewInventory({ ...newInventory, id: e.target.value })}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <Button onClick={onClose} sx={{ marginRight: '10px' }}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default NewInventoryModal;
