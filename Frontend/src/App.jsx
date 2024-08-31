// src/App.jsx
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home'; // อิมพอร์ตหน้า Home
import Suppliers from './pages/Suppliers'; // อิมพอร์ตหน้า Suppliers
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  // ดึงค่าจาก Environment Variables
  const netlifyInternalId = import.meta.env.VITE_NETLIFY_INTERNAL_ID;

  return (
    <Router>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ระบบ ERP</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        {/* แสดงค่า Environment Variable */}
        <p>Netlify Internal ID: {netlifyInternalId}</p>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/suppliers">Suppliers</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suppliers" element={<Suppliers />} />
        {/* สามารถเพิ่มเส้นทางอื่น ๆ ที่ต้องการได้ที่นี่ */}
      </Routes>
    </Router>
  );
}

export default App;
