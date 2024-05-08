import IndNavbar from "../IndNavbar"
import "./members.css"
import "../../Student/Stuhome/Achivements.css"
import {  useState } from "react"
import axios from "axios"


function Members(){

    const [add,setadd]=useState(false);
    const [add1,setadd1]=useState(false);

    const [roll, setroll] = useState('');
    const [email, setemail] = useState('');
    const [password, setpass] = useState('');

    const [db,setdb]=useState('');


     async function staffhandleSubmit(e){
        
        setdb('faculties');
        try{
            await axios.post("http://localhost:8000/admin_members",{
                roll,email,password,db
            })
        }
        catch(e){
            console.log(e);
        }
      };
      async function stuhandleSubmit(e){
        e.preventDefault();
        
        setdb('students');
        try{
            await axios.post("http://localhost:8000/admin_members",{
                roll,email,password,db
            })
        }
        catch(e){
            console.log(e);
        }
      };

    function staffhandle(){
        setadd(!add);
    }
    function studenthandle(){
        setadd1(!add1);
    }

    return(
        <>
        <IndNavbar/>
            <div className="members">
                <h1>Members Of CSE Department</h1><br/>
                <div className="hr"></div><br/>
                <div className="addfac">
                    <h2>Faculties</h2>
                    <button className="achsubmit" onClick={staffhandle}>Add Faculty</button>
                </div><br/>
                <p>Add new Faculty to cse department</p><br/>
                <div className={add?"display":"notdisplay"}>
                    <p>Staff id*</p>
                    <input placeholder="Roll no" className="ach" name="roll" onChange={(e) => setroll(e.target.value)}/><br/><br/>
                    <p>Email*</p>
                    <input placeholder="Email" className="ach" name="email" onChange={(e) => setemail(e.target.value)}/><br/><br/>
                    <p>Default Password*</p>
                    <input placeholder="Default Password" className="ach" name="password" onChange={(e) => setpass(e.target.value)}/><br/><br/>
                    <button className="achsubmit"  onClick={staffhandleSubmit}>Submit</button>
                    <br/><br/>
                </div>
                <div className="faculty_mem">
                </div><div className="hr"></div><br/>
                <div className="addfac">
                    <h2>Students</h2>
                    <button className="achsubmit" onClick={studenthandle}>Add Student</button>
                </div><br/>
                <div className={add1?"display":"notdisplay"}>
                    <p>Roll no*</p>
                    <input placeholder="Roll no" className="ach" name="roll" onChange={(e) => setroll(e.target.value)}/><br/><br/>
                    <p>Email*</p>
                    <input placeholder="Email" className="ach" name="email" onChange={(e) => setemail(e.target.value)}/><br/><br/>
                    <p>Default Password*</p>
                    <input placeholder="Default Password" className="ach" name="password" onChange={(e) => setpass(e.target.value)}/><br/><br/>
                    <button className="achsubmit" onClick={stuhandleSubmit}>Submit</button>
                    <br/><br/>
                </div>
                <div className="student_mem">
                <p>Add new Student to cse department</p><br/>
                </div>
            </div>
        </>
    )
}

export default Members