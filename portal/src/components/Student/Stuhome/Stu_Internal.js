import Navbar from "../IndNavbar"
import "./Internal.css"
import "../../Faculty/Fachome/Achivements.css"

function Internal()
{
    return(
        <>
            <Navbar/>
            <div className="internal" id="#student_internal">
                <div className="inter">
                    <h2>Your Internal Marks !!</h2><br/><br/>
                    <h3 style={{textAlign:'left',marginLeft:'15vw'}}>Ist Internal Marks</h3><br/>
                    <div className="marks">
                        <p className="subject">
                            <ul className="sbj">ML</ul>
                            <ul className="sbj">CNS</ul>
                            <ul className="sbj">CD</ul>
                            <ul className="sbj">GCC</ul>
                            <ul className="sbj">IOT</ul>
                            <ul className="sbj">ACS</ul>
                        </p><br/>
                        <p className="subject">
                            <ul className="sbj">85</ul>
                            <ul className="sbj">75</ul>
                            <ul className="sbj">89</ul>
                            <ul className="sbj">56</ul>
                            <ul className="sbj">78</ul>
                            <ul className="sbj">96</ul>
                        </p><br/>
                        <p className="subject">
                            <ul className="sbj">A+</ul>
                            <ul className="sbj">A</ul>
                            <ul className="sbj">A+</ul>
                            <ul className="sbj">B+</ul>
                            <ul className="sbj">B</ul>
                            <ul className="sbj">O</ul>
                        </p>
                    </div><br/>
                    <div className="porf">
                        <p>Pass : ML , CNS , CD , GCC , IOT , ACS</p>
                        <p>Fail : NIL</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Internal