import "./About.css"
import { Link } from "react-router-dom";


function About(){
    return(
        <>
            <div className="about" id="about">
                <div className="extra">
                    <div className="buttons">
                        <button className="button" id="b1"><Link to='/academics'>Academics</Link></button>
                        <button className="button" id="b2"><Link to='/sports'>Sports</Link></button>
                        <button className="button" id="b3"><Link to='/events'>Events</Link></button>
                        <button className="button" id="b4"><Link to='/gallery'>Gallery</Link></button>
                        <button className="button" id="b5"><Link to='/staffs'>Staffs</Link></button>
                    </div>
                </div>
                <div className="aboutit">
                    <div style={{textAlign:'center'}}><p className="headtop">WELCOME TO <span style={{color:"#213da0 "}}>RMKCET</span></p>
                    <p className="subhead">COMPUTER SCIENCE AND ENGINEERING</p><br/></div>
                    <p style={{textAlign:'left'}}>The Department of Computer Science and Engineering was started in the academic 
                    year 2008-09 with an intake of 60 students and increased the intake to 120 students in 2012 further it has been
                    increased to the intake to 180 students in 2019. It maintains excellent academic and Placement records since inception. 
                    Students are actively participating in five Centers of Excellence (CoE) (Artificial Intelligence, Big Data, Cloud Computing, 
                    Information Security, Front End Technologies) co-sponsored by top IT MNCs. It has State-of-Art Infrastructure and well qualified, 
                    experienced and dedicated faculty team. The students are actively involved in Co-curricular (CSI,CSEA) and Extra Curricular 
                    (Sports and Social) activities throughout the year. Our department facilitates Technology enabled learning and students are 
                    actively participating in NPTEL and Coding/ Project competitions across the country.</p>
                </div>
                <div className="news">
                    <div className="marq">
                        <p>End Semester Supplementary Arrear Theory Examinations February 2024 I,II year B.E. / B.TECH. - R2022 <a href="#f">click here</a></p><br/>
                        <p>End Semester Supplementary Arrear Theory Examinations February 2024 I,II,III year B.E. / B.TECH. - R2021 <a href="#f">click here</a></p><br/>
                        <p>The Department Of Computer Science and Engineering Is Conducting National Level Technical Symposium XENIOZ-24 On 05th February 2024. <a href="#f">click here</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About