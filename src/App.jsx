import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Grid, CssBaseline } from '@mui/material';
import Sidebar from './components/Sidebar';
import InventoryDashboard from './components/InventoryDashboard';
import UtilizationDashboard from './components/UtilizationDashboard';
import InventoryDetails from './components/InventoryDetails';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} style={{ padding: '20px' }}>  {/* Adjust padding */}
          <Routes>
            <Route path="/" element={<InventoryDashboard />} />
            <Route path="/utilization" element={<UtilizationDashboard />} />
            <Route path="/inventory/:id" element={<InventoryDetails />} />
          </Routes>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
