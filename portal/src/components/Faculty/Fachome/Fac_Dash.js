import React from 'react';
import './fac_dash.css'; // Import the CSS file
import { MdOutlineWavingHand } from "react-icons/md";


const ImageWithOverlay = () => {
  return (
      <div class="scontainer">
        <div style={{paddingTop:'40px',textAlign:'left',marginLeft:'40px'}}>
            <h1 style={{fontSize:'36px'}}>Hello, <span style={{color:'#213da0'}}>Faculty</span><MdOutlineWavingHand className='hand'/></h1>
        </div>
        <section class="main">
          <div class="main-top">
            <h1 style={{textAlign:'center'}}>My Courses</h1>
            <i class="fas fa-user-cog"></i>
          </div>
          <div class="main-skills">
            <div class="card">
              <i class="fas fa-laptop-code"></i>
              <h3>Web developemt</h3>
              <p>II nd Year CSE - A</p>
              <button>Get Started</button>
            </div>
            <div class="card">
              <i class="fab fa-wordpress"></i>
              <h3>Internet Programming</h3>
              <p>II nd Year CSE - B</p>
              <button>Get Started</button>
            </div>
            <div class="card">
              <i class="fas fa-palette"></i>
              <h3>compiler design</h3>
              <p>III rd Year CSE - A</p>
              <button>Get Started</button>
            </div>
            <div class="card">
              <i class="fab fa-app-store-ios"></i>
              <h3>IOT</h3>
              <p>II nd Year CSE - B</p>
              <button>Get Started</button>
            </div>
          </div>
    
          <section class="main-course">
            <h1>Add Assignments</h1>
            <div class="course-box">
              <ul>
                <li class="active">In progress</li>
                <li>new</li>
                <li>completed</li>
                <li></li>
              </ul>
              <div class="course">
                <div class="box">
                  <h3>HTML</h3>
                  <p>To create e-commerce website</p>
                  <button>Create</button>
                  <i class="fab fa-html5 html"></i>
                </div>
                <div class="box">
                  <h3>ML</h3>
                  <p>To create an motion detector</p>
                  <button>Create</button>
                  <i class="fab fa-css3-alt css"></i>
                </div>
                <div class="box">
                  <h3>AI</h3>
                  <p>To create an autonomous vaccum cleaner</p>
                  <button>Create</button>
                  <i class="fab fa-js-square js"></i>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
  );
};

export default ImageWithOverlay;