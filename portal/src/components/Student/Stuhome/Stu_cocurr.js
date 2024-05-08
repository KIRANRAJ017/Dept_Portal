import { useState } from "react"
import "./Achivements.css"
import axios from "axios"



function Stu_cocurr(){
        const [roll, setroll] = useState('');
        const [name, setname] = useState('');
        const [event, setevent] = useState('');
        const [noneve, setnoneve] = useState('');
        const [prize, setprize] = useState('');

        const handleSubmit = async (e)=>{
            e.preventDefault();
            try{
                await axios.post("http://localhost:8000/student_achivement",{
                    roll,name,event,noneve,prize
                })
            }
            catch(err){
                console.log(err)
            }
        }

    return(
        <>
            <div className="achivement">
                <form action="/upload" method="POST" enctype="multipart/form-data">
                <div className="achive">
                    <br />
                    <br />
                    <h1>Enter New Achievements</h1><br/>
                    <hr/><br/>
                    <p>Register Number:*</p>
                    <input type="text" placeholder="Reg no" className="ach" onChange={(e) => setroll(e.target.value)} /><br/><br/>
                    <p>Name:*</p>
                    <input type="text" placeholder="Enter any Technical Event" className="ach" onChange={(e) => setname(e.target.value)} /><br/><br/>
                    <p>Technical Event:*</p> 
                    <input type="text" placeholder="Enter any Technical Event" className="ach" onChange={(e) => setevent(e.target.value)} /><br/><br/>
                    <p>Non-Technical Event:*</p>
                    <input type="text" placeholder="Enter any Non-technical Event" className="ach" onChange={(e) => setnoneve(e.target.value)} /><br/><br/>
                    <p>Place of Prize/Participation:</p>
                    <input type="text" placeholder="Enter the place of Prize/Participation" className="ach" onChange={(e) => setprize(e.target.value)} /><br/><br/>
                    <button type="submit" className="achsubmit" onClick={handleSubmit}>Submit</button>
                </div>
                </form>
            </div>
        </>
    )
}

export default Stu_cocurr