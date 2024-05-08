import "./Achivements.css"
import Navbar from "../IndNavbar"
import { useState } from "react";
import axios from "axios";

function Achivements(){

    return(
        <>
            <div className="achivement">
                <Navbar/>
                <div className="achive">
                    <h1>Enter The Journal publicaton details here</h1><br/>
                    <hr/><br/>
                    <p>Faculty Name:*</p>
                    <input type="text" placeholder="Faculty Name" className="ach" /><br/><br/>
                    <p>Publication Date:*</p>
                    <input type="date"  className="ach"/><br/><br/>
                    <p>Year of Publication:*</p>
                    <select className="ach">
                        <option>2015</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                    </select><br/><br/>
                    <p>Paper Title:*</p>
                    <input type="text" className="ach"  /><br/><br/>
                    <p>Authors:(Seperated by comma) *</p>
                    <textarea className="ach"></textarea><br/><br/>
                    <p>ISSN Number:*</p>
                    <input type="text" className="ach" /><br/><br/>
                    <p>Journal Name/Coference Name:*</p>
                    <input type="text" className="ach"/><br/><br/>
                    <p>Volume Number:*</p>
                    <input type="text" className="ach" /><br/><br/>
                    <p>Issue Number:*</p>
                    <input type="text" className="ach" /><br/><br/>
                    <p>WoS/Scopus:*</p>
                    <select className="ach">
                        <option>Web of Science</option>
                        <option>Scopus</option>
                        <option>UGC Approved</option>
                        <option>others</option>
                    </select><br/><br/>
                    <button className="achsubmit" type="submit">Submit</button>
                </div>
            </div>
        </>
    )
}

export default Achivements