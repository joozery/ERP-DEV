import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Box, Container } from '@mui/material';
import Dashboard from './Components/Dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <CssBaseline /> {/* ใช้การตั้งค่าพื้นฐานสำหรับคอมโพเนนต์ MUI */}
      
      {/* พื้นที่เนื้อหาหลัก */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
        }}
      >
        <Container>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
