import React from 'react';
import SupplierRow from './SupplierRow';
import './Styles.css';

const SupplierTable = () => {
    return (
        <div className="supplier-table">
            <div className="stats">
                <div>รวม: 120</div>
                <div>เปลี่ยนแปลง: 11</div>
                <div>หมดอายุ: 5</div>
            </div>
            <input type="text" placeholder="ค้นหา" className="search-input" />
            <table>
                <thead>
                    <tr>
                        <th>ลำดับ</th>
                        <th>บริษัท</th>
                        <th>ที่อยู่</th>
                        <th>ข้อมูล</th>
                        <th>เว็บไซต์</th>
                        <th>การกระทำ</th>
                    </tr>
                </thead>
                <tbody>
                    <SupplierRow no={1} companyName="Company name" address="59 Phahonyothin Road, Khlong..." info="086-345-7864" email="john@gmail.com" website="website" />
                    <SupplierRow no={2} companyName="Company name" address="59 Phahonyothin Road, Khlong..." info="086-345-7864" email="john@gmail.com" website="website" />
                    <SupplierRow no={3} companyName="Company name" address="59 Phahonyothin Road, Khlong..." info="086-345-7864" email="john@gmail.com" website="website" />
                    <SupplierRow no={4} companyName="Company name" address="59 Phahonyothin Road, Khlong..." info="086-345-7864" email="john@gmail.com" website="website" />
                </tbody>
            </table>
        </div>
    );
};

export default SupplierTable;
