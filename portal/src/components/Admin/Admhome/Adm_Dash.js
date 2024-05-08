import React from 'react';
import './adm_dash.css'; 
import { MdOutlineWavingHand } from "react-icons/md";


const ImageWithOverlay = () => {
  return (
      <div className="scontainer">
        <div style={{paddingTop:'40px',textAlign:'left',marginLeft:'40px'}}>
            <h1 style={{fontSize:'36px'}}>Hello, <span style={{color:'#213da0'}}>Admin</span><MdOutlineWavingHand className='hand'/></h1>
        </div>
        <section class="main">
          <div class="main-top">
            <h1 style={{textAlign:'center'}}>Active Users</h1>
            <i class="fas fa-user-cog"></i>
          </div>
          <div class="main-skills">
            <div class="card">
              <i class="fas fa-laptop-code"></i>
              <h3>Total Students</h3>
              <p>650 students</p>
              <button>View</button>
            </div>
            <div class="card">
              <i class="fab fa-wordpress"></i>
              <h3>New Students</h3>
              <p>60 students</p>
              <button>View</button>
            </div>
            <div class="card">
              <i class="fas fa-palette"></i>
              <h3>Visitors</h3>
              <p>1,579 visitors</p>
              <button>View</button>
            </div>
            <div class="card">
              <i class="fab fa-app-store-ios"></i>
              <h3>Total Courses</h3>
              <p>103 courses</p>
              <button>View</button>
            </div>
          </div>
        </section>
        <section class="main-course">
            <h1 style={{marginLeft:'600px'}}>Notification</h1>
            <div class="course-box"><br/><br/>
              <div class="course">
                <div class="box">
                  <h3>Faculty</h3>
                  <p>Notification from Faculty</p>
                  <button>Message</button>
                  <i class="fab fa-html5 html"></i>
                </div>
                <div class="box">
                  <h3>Student</h3>
                  <p>Notification from Faculty</p>
                  <button>Message</button>
                  <i class="fab fa-css3-alt css"></i>
                </div>
                <div class="box">
                  <h3>Placement</h3>
                  <p>Notification from Placement</p>
                  <button>Message</button>
                  <i class="fab fa-js-square js"></i>
                </div>
              </div>
            </div>
          </section>
      </div>
  );
};

export default ImageWithOverlay;