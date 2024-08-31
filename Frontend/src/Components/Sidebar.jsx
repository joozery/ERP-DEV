import React from 'react';
import './Styles.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>WOO YOU Creative Co.,Ltd.</h2>
            <ul>
                <li>เมนูหลัก</li>
                <li>สินค้า</li>
                <li>รายการสินค้า</li>
                <li>เพิ่มสินค้า</li>
                <li>การจัดเก็บ</li>
                <li>การตรวจสอบ</li>
                <li>ซัพพลายเออร์</li>
                <li>การสั่งซื้อ</li>
                <li>การจัดส่ง</li>
                <li>สรุปรายการ</li>
                <li>PO</li>
            </ul>
            <button className="logout-btn">ออกจากระบบ</button>
        </div>
    );
};

export default Sidebar;
