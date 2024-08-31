import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import Dashboard from './Components/Dashboard/Dashboard'; // นำเข้าคอมโพเนนต์ Dashboard
import './App.css';

function App() {
  return (
    <Router>
      <CssBaseline /> {/* ใช้การตั้งค่าพื้นฐานสำหรับคอมโพเนนต์ MUI */}
      <div className="app-container">
        {/* ลบ Drawer และ AppBar ถ้าคุณไม่ต้องการใช้งาน */}
        <div className="main-content">
          {/* พื้นที่เนื้อหา */}
          <Container sx={{ mt: 8 }}>
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
