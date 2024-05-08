import Navbar from "../IndNavbar"
import "./Query.css"
import "../../Faculty/Fachome/Achivements.css"
import { useState } from "react";
import axios from "axios";

function Query()
{
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [toemail, settoemail] = useState('');
    const [query, setquery] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/student_query",{
                name,email,toemail,query
            })
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <>
            <Navbar/>
            <div className="query"> 
                <div className="quries">
                    <h2>Post Your Query</h2><br/>
                    <hr/><br/>
                    <h4>From:</h4>
                    <input type="text" placeholder="Full Name" className="ach" onChange={(e) => setname(e.target.value)}/><br/><br/>
                    <input type="email" placeholder="Email ID" className="ach" onChange={(e) => setemail(e.target.value)}/><br/><br/>
                    <h4>To:</h4>
                    <input type="text" placeholder="Email ID" className="ach" onChange={(e) => settoemail(e.target.value)}/><br/><br/>
                    <h4>Query :</h4>
                    <textarea className="ach" onChange={(e) => setquery(e.target.value)}></textarea>
                </div>
                <br/>
                <button className="achsubmit" style={{marginLeft:'10px'}} type="button" onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default Query