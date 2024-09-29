import React from 'react';
import { Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
      }}
    >
      <Typography variant="h6" style={{ padding: '16px' }}>Dashboard</Typography>
      <List>
        <ListItem button component={NavLink} to="/">
          <ListItemText primary="Inventory Dashboard" />
        </ListItem>
        <ListItem button component={NavLink} to="/utilization">
          <ListItemText primary="Utilization Monitoring" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
