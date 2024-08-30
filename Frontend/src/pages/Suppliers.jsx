import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Suppliers.css';  // ใช้สำหรับจัดการ CSS ของหน้านี้

function Suppliers() {
  // ตัวอย่างข้อมูลซัพพลายเออร์
  const [suppliers, setSuppliers] = useState([
    {
      id: 1,
      company: 'Company name',
      address: '99 Phaholyothin Road, Khlong , Khlong Luang District, Pathum Thani 12120',
      info: {
        phone: '086-364-7864',
        email: 'John@gmail.com',
      },
      website: 'website',
    },
    {
      id: 2,
      company: 'Company name',
      address: '99 Phaholyothin Road, Khlong , Khlong Luang District, Pathum Thani 12120',
      info: {
        phone: '086-364-7864',
        email: 'John@gmail.com',
      },
      website: 'website',
    },
    // ข้อมูลซัพพลายเออร์อื่น ๆ
  ]);

  return (
    <div className="suppliers-page">
      <div className="suppliers-header">
        <h2>Suppliers</h2>
        <div className="suppliers-stats">
          <div>Total: 120</div>
          <div>Changed: 11</div>
          <div>Expired: 5</div>
        </div>
        <div className="suppliers-search">
          <input type="text" placeholder="search" />
          <select>
            <option value="area">Area</option>
            {/* เพิ่ม Options เพิ่มเติม */}
          </select>
          <select>
            <option value="type">Type</option>
            {/* เพิ่ม Options เพิ่มเติม */}
          </select>
        </div>
      </div>
      
      <table className="suppliers-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Company</th>
            <th>Address</th>
            <th>Info</th>
            <th>Website</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier, index) => (
            <tr key={supplier.id}>
              <td>{index + 1}</td>
              <td>{supplier.company}</td>
              <td>{supplier.address}</td>
              <td>
                <div>{supplier.info.phone}</div>
                <div>{supplier.info.email}</div>
              </td>
              <td><a href={`http://${supplier.website}`}>{supplier.website}</a></td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="suppliers-pagination">
        <button>Previous</button>
        <span>Page 2 of 68</span>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Suppliers;
