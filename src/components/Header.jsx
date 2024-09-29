import React from 'react';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = ({ title }) => {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex items-center">
        <TextField label="Search" variant="outlined" size="small" />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
