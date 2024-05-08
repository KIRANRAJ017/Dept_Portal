import "./Achivements.css"



function stuextra(){
    return(
        <>
            <div className="achivement">
                {/* <Navbar/> */}
                <div className="achive">
                <br />
                    <br />
                    <h1>Enter New Achievements</h1><br/>
                    <hr/><br/>
                    <p>Register Number:*</p>
                    <input type="text" placeholder="Reg no" className="ach" /><br/><br/>
                    <p>Name:*</p>
                    <input type="text" placeholder="Name" className="ach" /><br/><br/>
                    <p>Event:*</p> 
                    <input type="text" placeholder="Enter any Event" className="ach" /><br/><br/>

                    <p>Place of Awards/Medals:</p>
                    <input type="text" placeholder="Enter the place of Awards/Medal" className="ach" /><br/><br/>
   

                    <p>Inter-University/State/National/International:</p>
                    <input type="text" placeholder="Enter the place of Awards/Medal" className="ach" /><br/><br/>      
                    <p>Month and Year:</p>
                    <input type="date" placeholder="Enter the Month and Year" className="ach" /><br/><br/>
                    <p>Certificate Details</p>
    
                    <input type="file"></input><br/><br/>
                    <button className="achsubmit">Submit</button>
                </div>
            </div>
        </>
    )
}

export default stuextra