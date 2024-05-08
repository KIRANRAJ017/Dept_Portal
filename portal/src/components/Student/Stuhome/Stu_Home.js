import React, { useState } from 'react';
import '../../Admin/Admhome/adm_home.css'; // Import your CSS file here
import IndNavbar from '../IndNavbar';
import { MdOutlineDashboard } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { FaBookReader } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { VscFeedback } from "react-icons/vsc";
import { FaRegMessage } from "react-icons/fa6";

import StuDash from "./Stu_Dash"

function Student_Home() {
  const [content, setContent] = useState(<StuDash/>);

  const handleItemClick = (item) => {
    switch (item) {
      case 'dashboard':
        setContent(<StuDash/>);
        break;
      case 'user':
        setContent('Announcement');
        break;
      case 'message':
        setContent('Course Info');
        break;
      case 'analytics':
        setContent('Resources');
        break;
      case 'file_manager':
        setContent('Feedback');
        break;
      case 'msg':
        setContent('Messages');
        break;
      default:
        setContent('sd');
    }
  };


  return (
    <>
    <IndNavbar/>
    <div className="App">
      <div className="sidebar" style={{paddingTopTop:'0px'}}>
          <li id="dashboard" onClick={() => handleItemClick('dashboard')}>
            <a href="#w">
              <i className="bx bx-grid-alt"><MdOutlineDashboard className='icon'/></i>
              <span className="link_name">Dashboard</span>
            </a><br/>
            <span className="tooltip">Dashboard</span>
          </li>
          <li id="user" onClick={() => handleItemClick('user')}>
            <a href="#w">
              <i className="bx bx-user"><TfiAnnouncement className='icon'/></i><br/>
              <span className="link_name">Announcements</span>
            </a><br/>
            <span className="tooltip">Announcements</span>
          </li>
          <li id="message" onClick={() => handleItemClick('message')}>
            <a href="#w">
              <i className="bx bx-chat"><FaBookReader className='icon'/></i>
              <span className="link_name">Course Info</span>
            </a><br/>
            <span className="tooltip">Course Info </span>
          </li>
          <li id="analytics" onClick={() => handleItemClick('analytics')}>
            <a href="#w">
              <i className="bx bx-pie-chart-alt-2"><GrResources className='icon'/></i>
              <span className="link_name">Resources</span>
            </a><br/>
            <span className="tooltip">Resources</span>
          </li>
          <li id="msg" onClick={() => handleItemClick('msg')}>
            <a href="#w">
              <i className="bx bx-folder"><FaRegMessage className='icon'/></i>
              <span className="link_name">Messages</span>
            </a><br/>
            <span className="tooltip">Messages</span>
          </li>
          <li id="file_manager" onClick={() => handleItemClick('file_manager')}>
            <a href="#w">
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

export default Student_Home;