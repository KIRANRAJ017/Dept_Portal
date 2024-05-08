import React from 'react';
import './Staffs.css'; 
import principal from "../assests/images/principal_ramar_PP.png"
import valarmathi from "../assests/images/cse-valar.png"
import vigilson from "../assests/images/cse-vigilson.jpg"
import rejin from "../assests/images/cse-rejinpaul.jpg"
import arun from "../assests/images/cse-arunm.jpg"
import uma from "../assests/images/uma-cse.jpg"

function StaffList() {
  const staffMembers = [
    { imgSrc: "images/principal_ramar_PP.png", name: "DR. RAMAR K", designation: "Principal & Professor", qualifications: "M.E., Ph.D., FIE.," },
    { imgSrc: "images/cse-valar.png", name: "DR. VALARMATHIE P", designation: "Professor & Head", qualifications: "B.E., M.E., Ph.D" },
    { imgSrc: "images/cse-vigilson.jpg", name: "DR. VIGILSON PREM M", designation: "Professor", qualifications: "M.E., Ph.D." },
    { imgSrc: "images/cse-rejinpaul.jpg", name: "DR. REJIN PAUL N R", designation: "Associate Professor", qualifications: "M.E., Ph.D." },
    { imgSrc: "images/cse-arunm.jpg", name: "DR. ARUN MANICKA RAJA M", designation: "Associate Professor", qualifications: "M.E., Ph.D." },
    { imgSrc: "images/uma-cse.jpg", name: "DR.G.UMA MAHESWARI", designation: "Professor", qualifications: "M.E., Ph.D." },
  ];

  return (
    <div>
      <br/><br/>
    <div className="staffcontainer">
      <div className="staffcard">
      <img src={principal} id="Staffs" alt="Staff Profile Image" />
      <div className="staffcard-content">
        <p className="staff-name">
          DR. RAMAR K<br />
          Principal & Professor<br />
          M.E., Ph.D., FIE.,
        </p>
      </div>
      </div>
      <div className="staffcard">
      <img src={valarmathi} id="Staffs" alt="Staff Profile Image" />
      <div className="staffcard-content">
        <p className="staff-name">
        DR. VALARMATHIE P<br />
        Professor & Head<br />
        B.E., M.E., Ph.D
        </p>
      </div>
      </div>
      <div className="staffcard">
      <img src={vigilson} id="Staffs" alt="Staff Profile Image" />
      <div className="staffcard-content">
        <p className="staff-name">
        DR. VIGILSON PREM M<br />
        Professor<br />
        M.E., Ph.D.
        </p>
      </div>
      </div>
      <div className="staffcard">
      <img src={rejin} id="Staffs" alt="Staff Profile Image" />
      <div className="staffcard-content">
        <p className="staff-name">
        DR. REJIN PAUL N R<br />
        Associate Professor<br />
        M.E., Ph.D.
        </p>
      </div>
      </div>
      <div className="staffcard">
      <img src={arun} id="Staffs" alt="Staff Profile Image" />
      <div className="staffcard-content">
        <p className="staff-name">
        DR. ARUN MANICKA RAJA M<br />
          Associate Professor<br />
          M.E., Ph.D.
        </p>
      </div>
      </div>
      <div className="staffcard">
      <img src={uma} id="Staffs" alt="Staff Profile Image" />
      <div className="staffcard-content">
        <p className="staff-name">
        DR.G.UMA MAHESWARI<br />
        Professor<br />
        M.E., Ph.D.
        </p>
      </div>
      </div>
    </div></div>
  );
}

export default StaffList;