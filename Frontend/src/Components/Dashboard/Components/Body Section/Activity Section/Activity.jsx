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
            <span className="name">Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          {/* รูปภาพถูกลบออก */}
          <div className="customerDetails">
            <span className="name">John Doe</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            5 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          {/* รูปภาพถูกลบออก */}
          <div className="customerDetails">
            <span className="name">Jane Smith</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            10 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          {/* รูปภาพถูกลบออก */}
          <div className="customerDetails">
            <span className="name">Tom Brown</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            15 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          {/* รูปภาพถูกลบออก */}
          <div className="customerDetails">
            <span className="name">Emily Clark</span>
            <small>Ordered a new plant</small>
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
