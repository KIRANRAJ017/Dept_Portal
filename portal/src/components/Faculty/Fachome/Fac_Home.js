import React, { useState } from 'react';
import '../../Admin/Admhome/adm_home.css'; // Import your CSS file here
import IndNavbar from '../IndNavbar';
import { MdOutlineDashboard } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { PiStudentFill } from "react-icons/pi";
import { GrResources } from "react-icons/gr";
import { VscFeedback } from "react-icons/vsc";
import Fac_Dash from "./Fac_Dash"
import Fac_coun from "./Fac_coun"

function Faculty_Home() {
  const [content, setContent] = useState(<Fac_Dash/>);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleItemClick = (item) => {
    switch (item) {
      case 'dashboard':
        setContent(<Fac_Dash/>);
        break;
      case 'user':
        setContent('Announcement');
        break;
      case 'message':
        setContent(<Fac_coun/>);
        break;
      case 'analytics':
        setContent('Resources');
        break;
      case 'file_manager':
        setContent('Feedback');
        break;
      default:
        setContent('Dashboard Content');
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
    <div className="App">
      <div className="sidebar" style={{paddingTopTop:'0px'}}>
          <li id="dashboard" onClick={() => handleItemClick('dashboard')}>
            <a href="#">
              <i className="bx bx-grid-alt"><MdOutlineDashboard className='icon'/></i>
              <span className="link_name">Dashboard</span>
            </a><br/>
            <span className="tooltip">Dashboard</span>
          </li>
          <li id="user" onClick={() => handleItemClick('user')}>
            <a href="#">
              <i className="bx bx-user"><TfiAnnouncement className='icon'/></i><br/>
              <span className="link_name">Announcements</span>
            </a><br/>
            <span className="tooltip">Announcements</span>
          </li>
          <li id="message" onClick={() => handleItemClick('message')}>
            <a href="#">
              <i className="bx bx-chat"><PiStudentFill className='icon'/></i>
              <span className="link_name">Counselling Students</span>
            </a><br/>
            <span className="tooltip">Counselling Students</span>
          </li>
          <li id="analytics" onClick={() => handleItemClick('analytics')}>
            <a href="#">
              <i className="bx bx-pie-chart-alt-2"><GrResources className='icon'/></i>
              <span className="link_name">Resources</span>
            </a><br/>
            <span className="tooltip">Resources</span>
          </li>
          <li id="file_manager" onClick={() => handleItemClick('file_manager')}>
            <a href="#">
              <i className="bx bx-folder"><VscFeedback className='icon'/></i>
              <span className="link_name">Feedback</span>
            </a><br/>
            <span className="tooltip">Feedback</span>
          </li>
      </div>
      <section className="home-section">
        <div className="tex">{content}</div>
      </section>
    </div></>
  );
}

export default Faculty_Home;