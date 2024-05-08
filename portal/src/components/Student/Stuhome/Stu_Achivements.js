// App.js
import React,{useState} from 'react';

import './Achivements.css';
import Stucocurr from './Stu_cocurr';
import Stuextra from './Stu_extra';
import Internship from './Stu_intern';
import IndNavbar from '../IndNavbar';
function Achivements() {
  
    

    const [showAchivements, setshowAchivements] = useState(false);
    const [showAchievements, setshowAchievements] = useState(false);
    const [showIntern,setshowIntern]=useState(false);
    const handleCoCurricularClick = () => {
        setshowAchivements(true);
        setshowAchievements(false);
        setshowIntern(false);
    };
  
    const handleExtraCurricularClick = () => {
        setshowAchivements(false);
      setshowAchievements(true);
      setshowIntern(false);
    };

    const handleInternshipClick=()=>{
      setshowIntern(true);
      setshowAchievements(false);
      setshowAchivements(false);
    }
    return (<>
      <IndNavbar/>
        <div className="stuapp">
          <div className="stucenter">
            <div className="studropdown">
              <div class="dropdown" style={{height:'100px',textAlign:'center'}}>
  					<button class="dropbtn" style={{backgroundColor:"#213da0",borderRadius:'10px'}}>Student Activities</button>
  					<div class="dropdown-content" style={{padding:'2px'}}>
              <button onClick={handleCoCurricularClick} >Co-curricular Activities</button><br/>
              <button onClick={handleExtraCurricularClick} >Extra-curricular Activities</button><br/>
              <button onClick={handleInternshipClick} >Internship</button><br/>
  					</div>
				    </div>
    
            </div>
            {showAchivements && < Stucocurr/>}
        {showAchievements && <Stuextra />}
        {showIntern && <Internship/>}
          </div>
        </div>
        </>
      );
}

export default Achivements;