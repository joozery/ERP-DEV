import React from 'react';
import './Sidebar.css';

// Imported Images ===========>
import logo from '../../assets/logo.png';

// Imported Icons ============>
import { IoMdSpeedometer } from 'react-icons/io';
import { MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar } from 'react-icons/md';
import { BsTrophy, BsCreditCard2Front, BsQuestionCircle, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { BiTrendingUp, BiUser, BiEdit, BiFileFind, BiLogOut } from 'react-icons/bi';

const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      <div className="logoDiv flex">
        <img src={logo} alt="Logo" />
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">MAIN MENU</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <IoMdSpeedometer className="icon" />
              <span className="smallText">Dashboard</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <MdDeliveryDining className="icon" />
              <span className="smallText">สินค้า</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <MdOutlineExplore className="icon" />
              <span className="smallText">Suppliers</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <BsTrophy className="icon" />
              <span className="smallText">แผนกจัดซื้อ</span>
            </a>
          </li>
          <li className="listItem">
            <a href='#' className='menuLink flex'>
              <BiUser className="icon" />
              <span className="smallText">การจัดการผู้ใช้งาน</span>
            </a>
          </li>
          <li className="listItem">
            <a href='#' className='menuLink flex'>
              <BiFileFind className="icon" /> {/* ใช้ BiFileFind แทน BiFileText */}
              <span className="smallText">Invoice</span>
            </a>
          </li>
          <li className="listItem">
            <a href='#' className='menuLink flex'>
              <BiEdit className="icon" />
              <span className="smallText">สรุปรายการ</span>
            </a>
          </li>
          <li className="listItem">
            <a href='#' className='menuLink flex'>
              <BiFileFind className="icon" />
              <span className="smallText">PO</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">SETTINGS</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <AiOutlinePieChart className="icon" />
              <span className="smallText">Charts</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <BiTrendingUp className="icon" />
              <span className="smallText">Trends</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">Contact</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <BsCreditCard2Front className="icon" />
              <span className="smallText">Billing</span>
            </a>
          </li>
          <li className="listItem logOutBtn">
            <a href="/" className='menuLink flex'>
              <BiLogOut className="icon" />
              <span className="smallText">Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
