import Navbar from "../IndNavbar";
import "./Report.css"
import "../../Faculty/Fachome/Achivements.css"

function Report(){
    return(
        <>
            <Navbar/>
            <div className="report">
                 <h2>Download Your Report</h2><hr/><br/>
                 <div className="rep">
                    <p>Reports:*</p> 
                    <select className="ach">
                        <option>--Select--</option>
                        <option>Academic</option>
                        <option>Sports</option>
                        <option>Others</option>
                    </select><br/><br/>
                    <div className="sel">
                        <div>
                            <p>From Date :</p><br/><br/>
                            <p>To Date :</p>
                        </div>
                        <div>
                            <input type="date" className="indate"/><br/><br/>
                            <input type="date" className="indate"/><br/>
                        </div>
                    </div><br/>
                    <button className="achsubmit">Submit</button>
                 </div>
            </div>  
        </>
    )
}

export default Report;