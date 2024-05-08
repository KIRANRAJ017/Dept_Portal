import React from 'react';
import './stu_dash.css'
import { MdOutlineWavingHand } from "react-icons/md";


const ImageWithOverlay = () => {
  return (
      <div class="scontainer">
        <div style={{paddingTop:'40px',textAlign:'left',marginLeft:'40px'}}>
            <h1 style={{fontSize:'36px'}}>Hello, <span style={{color:'#213da0'}}>Student</span><MdOutlineWavingHand className='hand'/></h1>
        </div>
        <section class="main">
          <div class="main-top"><br/>
            <h1 style={{textAlign:'center'}}>Course Suggestion</h1>
            <i class="fas fa-user-cog"></i>
          </div>
          <div class="main-skills">
            <div class="card">
              <i class="fas fa-laptop-code"></i>
              <h3>Web developemt</h3>
              <p>Join Over 1 million Students.</p>
              <button>Get Started</button>
            </div>
            <div class="card">
              <i class="fab fa-wordpress"></i>
              <h3>WordPress</h3>
              <p>Join Over 3 million Students.</p>
              <button>Get Started</button>
            </div>
            <div class="card">
              <i class="fas fa-palette"></i>
              <h3>graphic design</h3>
              <p>Join Over 2 million Students.</p>
              <button>Get Started</button>
            </div>
            <div class="card">
              <i class="fab fa-app-store-ios"></i>
              <h3>IOS dev</h3>
              <p>Join Over 1 million Students.</p>
              <button>Get Started</button>
            </div>
          </div>
    
          <section class="main-course">
            <h1>My Assignments</h1>
            <div class="course-box">
              <ul>
                <li class="active">In progress</li>
                <li>explore</li>
                <li>upcoming</li>
                <li>finished</li>
              </ul>
              <div class="course">
                <div class="box">
                  <h3>HTML</h3>
                  <p>80% - progress</p>
                  <button>continue</button>
                  <i class="fab fa-html5 html"></i>
                </div>
                <div class="box">
                  <h3>CSS</h3>
                  <p>50% - progress</p>
                  <button>continue</button>
                  <i class="fab fa-css3-alt css"></i>
                </div>
                <div class="box">
                  <h3>JavaScript</h3>
                  <p>30% - progress</p>
                  <button>continue</button>
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