import React, { useState } from 'react';
import './adm_home.css'; // Import your CSS file here
import IndNavbar from '../IndNavbar';
import { MdOutlineDashboard } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
import Adm_Dash from "./Adm_Dash"
import { FaGoogleDrive } from "react-icons/fa";


function App() {
  const [content, setContent] = useState(<Adm_Dash/>);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleItemClick = (item) => {
    switch (item) {
      case 'dashboard':
        setContent(<Adm_Dash/>);
        break;
      case 'user':
        setContent('Gallery');
        break;
      case 'drive':
          setContent('Placement Drive');
          break;
      case 'message':
        setContent('Add');
        break;
      default:
        setContent(<Adm_Dash/>);
    }
  };

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
    menuBtnChange();
  };

  const menuBtnChange = () => {
    const menuBtn = document.getElementById('btn');
    if (isSidebarOpen) {
      menuBtn.classList.replace('bx-menu-alt-right', 'bx-menu');
    } else {
      menuBtn.classList.replace('bx-menu', 'bx-menu-alt-right');
    }
  };

  return (
    <>
    <IndNavbar/>
    <div className="barApp">
      <div className="sidebar">
          <li id="dashboard" onClick={() => handleItemClick('dashboard')}>
            <a href="#">
              <i className="bx bx-grid-alt"><MdOutlineDashboard className='icon'/></i>
              <span className="link_name">Dashboard</span>
            </a><br/>
            <span className="tooltip">Dashboard</span>
          </li>
          <li id="user" onClick={() => handleItemClick('user')}>
            <a href="#">
              <i className="bx bx-user"><RiGalleryLine className='icon'/></i><br/>
              <span className="link_name">Gallery</span>
            </a><br/>
            <span className="tooltip">Gallery</span>
          </li>
          <li id="user" onClick={() => handleItemClick('drive')}>
            <a href="#">
              <i className="bx bx-user"><FaGoogleDrive className='icon'/></i><br/>
              <span className="link_name">Placement Drive</span>
            </a><br/>
            <span className="tooltip">Placement Drive</span>
          </li>
          <li id="message" onClick={() => handleItemClick('message')}>
            <a href="#">
              <i className="bx bx-chat"><IoIosAdd className='icon'/></i>
              <span className="link_name">Add</span>
            </a><br/>
            <span className="tooltip">Add</span>
          </li>
      </div>
      <section className="home-section">
        <div className="tex">{content}</div>
      </section>
    </div></>
  );
}

export default App;
