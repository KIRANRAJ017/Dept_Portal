import Navbar from "../IndNavbar"
import "./Query.css"

function Query()
{
    return(
        <>
            <Navbar/>
            <div className="query"> 
                <div className="quries">
                    <h2>Post Your Query</h2><br/>
                    <hr/><br/>
                    <input type="text" placeholder="Full Name" className="ach"/><br/><br/>
                    <input type="text" placeholder="Email ID" className="ach"/><br/><br/>
                    <h4>Query :</h4>
                    <textarea className="ach"></textarea>
                </div>
                <br/>
                <button className="achsubmit" style={{marginLeft:'10px'}}>Submit</button>
            </div>
        </>
    )
}

export default Query