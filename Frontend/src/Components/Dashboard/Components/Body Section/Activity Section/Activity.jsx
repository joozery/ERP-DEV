import React from 'react'
import './activity.css'

// Imported Icons =========>
import {BsArrowRightShort} from 'react-icons/bs'

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className='btn flex'>
          See All
          <BsArrowRightShort className="icon"/>
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          {/* รูปภาพถูกลบออก */}
          <div className="customerDetails">
            <span className="name">นาย ศุภกร วงศรี</span>
            <small>ได้เพิ่มรายการสินค้าเข้าคลัง</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          {/* รูปภาพถูกลบออก */}
          <div className="customerDetails">
            <span className="name">คุณป๋อมแป๋ม</span>
            <small>ได้นำส่งรายการใบเสนอราคาให้กับคุณ</small>
          </div>
          <div className="duration">
            5 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          {/* รูปภาพถูกลบออก */}
          <div className="customerDetails">
            <span className="name">คุณมิตรชัย บัญชา</span>
            <small>อนุญมัตรใบเสนอราคา</small>
          </div>
          <div className="duration">
            10 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          {/* รูปภาพถูกลบออก */}
          <div className="customerDetails">
            <span className="name">คุณเจนจิรา วงศกร</span>
            <small>ได้เปิดใบ PO น้ำมันปาล์ม</small>
          </div>
          <div className="duration">
            15 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          {/* รูปภาพถูกลบออก */}
          <div className="customerDetails">
            <span className="name">คุณศุวิทย์ วงกร</span>
            <small>ได้มีการเบิกสินค้าออกจากคลัง</small>
          </div>
          <div className="duration">
            20 min ago
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity
