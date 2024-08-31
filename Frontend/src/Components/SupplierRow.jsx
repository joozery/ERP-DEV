import React from 'react';
import './Styles.css';

const SupplierRow = ({ no, companyName, address, info, email, website }) => {
    return (
        <tr>
            <td>{no}</td>
            <td>{companyName}</td>
            <td>{address}</td>
            <td>
                {info} <br /> {email}
            </td>
            <td>{website}</td>
            <td>
                <button>แก้ไข</button>
                <button>ลบ</button>
            </td>
        </tr>
    );
};

export default SupplierRow;
