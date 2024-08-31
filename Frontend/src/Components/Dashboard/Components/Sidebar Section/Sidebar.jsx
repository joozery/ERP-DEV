import React from 'react'
import './Sidebar.css'

// Imported Images ===========>
import logo from '../../assets/logo.png'

// Imported Icons ============>
import {IoMdSpeedometer} from 'react-icons/io'
import {MdDeliveryDining} from 'react-icons/md'
import {MdOutlineExplore} from 'react-icons/md'
import {BsTrophy} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp, BiUser} from 'react-icons/bi'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {BsCreditCard2Front} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className='sideBar grid'>

    <div className="logoDiv flex">
      <img src={logo} alt="Image Name" />
    </div>

    <div className="menuDiv">
      <h3 className="divTitle">
        MAIN MENU 
      </h3>
      <ul className="menuLists grid">

        <li className="listItem">
          <a href="#" className='menuLink flex'>
              <IoMdSpeedometer className="icon"/>
              <span className="smallText">
                Dashboard
              </span>
          </a>
        </li>

        <li className="listItem">
          <a href="#" className='menuLink flex'>
              <MdDeliveryDining className="icon"/>
              <span className="smallText">
                สินค้า
              </span>
          </a>
        </li>
        
        <li className="listItem">
          <a href="#" className='menuLink flex'>
              <MdOutlineExplore className="icon"/>
              <span className="smallText">
                Supliers
              </span>
          </a>
        </li>

        <li className="listItem">
          <a href="#" className='menuLink flex'>
              <BsTrophy className="icon"/>
              <span className="smallText">
                แผนกจัดซื้อ
              </span>
          </a>
        </li>

        <li className="listIten">
            <a href='#' className='menuLink flex'>
                <BiUser className="icon"/>
                <span className="smallText">
                    การจัดการผู้ใช้งาน
                </span>
            </a>
        </li>

        <li className="listItem">
            <a href='#' className='menuLink flex'>
                <biBiFlie className="icon"/>
                <span className="smallText">
                    Invoice
                </span>
            </a>
        </li>

        <li className="listItem">
            <a href='#' className='menuLink flex'>
                <BiEdit className="icon"/>
                <span className="smallText">
                    สรุปรายการ
                </span>
            </a>
        </li>

        <li className="istItem">
            <a href='#' className='menuLink flex'>
                <BiFileFind className="icon"/>
                <span className="smallText">
                    PO
                </span>
            </a>
        </li>

      </ul>
    </div>


    <div className="settingsDiv">
      <h3 className="divTitle">
        SETTINGS
      </h3>
      <ul className="menuLists grid">

        <li className="listItem">
          <a href="#" className='menuLink flex'>
              <AiOutlinePieChart className="icon"/>
              <span className="smallText">
                Charts
              </span>
          </a>
        </li>

        <li className="listItem">
          <a href="#" className='menuLink flex'>
              <BiTrendingUp className="icon"/>
              <span className="smallText">
                Trends
              </span>
          </a>
        </li>
        
        <li className="listItem">
          <a href="#" className='menuLink flex'>
              <MdOutlinePermContactCalendar className="icon"/>
              <span className="smallText">
                Contact
              </span>
          </a>
        </li>

        <li className="listItem">
          <a href="#" className='menuLink flex'>
              <BsCreditCard2Front className="icon"/>
              <span className="smallText">
                Billing
              </span>
          </a>
        </li>

        <li className="listItem logOutBtn">
          <a href="/" className='menuLink flex'>
              <BiLogOut className="icon"/>
              <span className="smallText">
                Log Out
              </span>
          </a>
        </li>

      </ul>
    </div>

    <div className="sideBarCard">
      <BsQuestionCircle className="icon"/>
      <div className="cardContent">
        <div className="circle1"></div>
        <div className="circle2"></div>

        <h3>Help Center</h3>
        <p>Having trouble in Planti, please contact us from for more questions.</p>

        <button className='btn'>Go to help center</button>
      </div>
    </div>
  </div>
)
}

export default Sidebar
