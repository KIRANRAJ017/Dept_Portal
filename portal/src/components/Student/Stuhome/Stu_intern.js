import "./Achivements.css"



function Internship(){
    return(
        <>
            <div className="achivement">
                
                <div className="achive">
                    <br />
                    <br />
                    <h1>Enter New Achievements</h1><br/>
                    <hr/><br/>
                    <p>Branch/Sem/Sec:*</p>
                    <input type="text" placeholder="Enter Branch/Sem/Sec " className="ach" /><br/><br/>
                    <p>Student Name:*</p>
                    <input type="text" placeholder="Enter Student Name" className="ach" /><br/><br/>
                    <p>Company Name(Attended) Please specify Internship/Inplant Training</p>
                    <input type="text" placeholder="Enter Company Name" className="ach" /><br/><br/>
                    <p>Title of the Training:*</p>

                    <input type="text" placeholder="Enter Title of the Training" className="ach" /><br/><br/>
                    <p>Number of Days Attended:*</p>
                    <input type="text" placeholder="Enter Number of Days Attended" className="ach" /><br/><br/>
                     

                     <p>Enter From Date:*</p>
                                       
                    <input type="date"  className="ach"/><br/><br/>

                    <p>Enter To Date:*</p>
                                       
                    <input type="date"  className="ach"/><br/><br/>
                   
                   

           
                    <p>Certifica</p>
                    <input type="file"></input><br/><br/>
                    <button className="achsubmit">Submit</button>
                </div>
            </div>
        </>
    )
}

export default Internship