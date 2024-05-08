import React from 'react';
import './Academics.css'; // Make sure to include your CSS file

const Academics = () => {
  return (
    <div className="acdcontainer">
      <h1 className="h1">Academics</h1>
      <div className="ac">
        <h2>About Academics:</h2>
        <p>
          RMK College of Engineering and Technology (RMKCET) is a private engineering college located in Tamil Nadu, India. It offers undergraduate (B.E/B.Tech) programs in various engineering disciplines, including Computer Science and Engineering, Electronics and Communication Engineering, Mechanical Engineering, Artificial Intelligence and Data Science, and Computer Science-Cyber Security. RMKCET is affiliated with Anna University, Chennai, and approved by the All India Council for Technical Education (AICTE). The college has modern infrastructure and facilities, including well-equipped laboratories, a library, sports facilities, and hostel accommodation. It has collaborations with industries and organizations for student projects and internships. RMKCET has a dedicated placement cell that assists students in securing internships and job placements, leading to a strong track record of placements in reputed companies. Accredited by the National Board of Accreditation (NBA) and ranked among the top engineering colleges in India, RMKCET prioritizes quality education and opportunities for its students.
        </p>
      </div>
      <div className="acdcard-container">
        <div className="acdcard">
          <h2>Academic Programs</h2>
          <div className="left-content">
            <ul>
              <li><a href="#btech-cse">B.E CSE</a></li>
              <li><a href="#certificate-courses">Certificate Courses</a></li>
            </ul>
          </div>
        </div>
        <div className="acdcard">
          <h2>Academic Calendar for U.G:</h2>
          <div className="left-content">
            <ul>
              <li><a href="q">A.Y-2023-24</a></li>
              <li><a href="q">A.Y-2022-23</a></li>
              <li><a href="q">A.Y-2021-22</a></li>
              <li><a href="q">A.Y-2020-21</a></li>
              <li><a href="q">A.Y-2019-20</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academics;