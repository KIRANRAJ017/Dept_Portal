import Navbar from "./Navbar"
import "./Internal.css"

function Internal()
{
    return(
        <>
            <Navbar/>
            <div className="internal">
                <div className="inter">
                    <h2>Welcome to Student Database Portal</h2><br/>
                    <p>Select the year & Enter the register Number</p><br/><br/>
                    <div className="selectop">
                        <div className="tit">
                            <p>Select The Year :	</p><br/>
                            <p style={{marginTop:"10px"}}>Enter The Register Number :	</p>
                        </div>
                        <div className="selval">
                            <select className="ach" style={{height:"30px"}}>
                                <option>--Select--</option>
                                <option>II Year(2022 - 26)</option>
                                <option>III Year(2021 - 25)</option>
                                <option>IV Year(2020 - 24)</option>
                            </select><br/><br/>
                            <input  className="ach" style={{height:"30px"}}/>
                        </div>
                    </div><br/>
                    <button className="achsubmit" style={{width:"7vw",height:"5vh"}}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Internal