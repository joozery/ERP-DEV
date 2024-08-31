import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Drawer, AppBar, Toolbar, Container, CssBaseline } from '@mui/material';
import Dashboard from './Components/Dashboard/Dashboard'; // นำเข้าคอมโพเนนต์ Dashboard
import './App.css';

function App() {
  return (
    <Router>
      <CssBaseline /> {/* ใช้การตั้งค่าพื้นฐานสำหรับคอมโพเนนต์ MUI */}
      <div className="app-container">
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
          }}
        >
          {/* ลบการใช้งานของ Sidebar */}
          {/* <Sidebar /> */}
        </Drawer>

        {/* พื้นที่เนื้อหาหลัก */}
        <div className="main-content">
          <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
              {/* ลบการใช้งานของ Header */}
              {/* <Header /> */}
            </Toolbar>
          </AppBar>

          {/* พื้นที่เนื้อหา */}
          <Container sx={{ mt: 8, ml: 30 }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* เพิ่ม routes อื่น ๆ ที่ต้องการ */}
            </Routes>
          </Container>
        </div>
      </div>
    </Router>
  );
}

export default App;
