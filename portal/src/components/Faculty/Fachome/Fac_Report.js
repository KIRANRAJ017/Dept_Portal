import { useState } from "react";
import Navbar from "../IndNavbar";
import axios from 'axios';
import "./Report.css"
import jsPDF from "jspdf"
import 'jspdf-autotable';

function Report(){
    const [data, setData] = useState([]);
    const [rollNo, setRollNo] = useState('');

    const fetchData = async () => {
      try {
        console.log(rollNo)
         
        const response = await axios.get('http://localhost:8000/faculty_report', {
          params: { rollNo: rollNo } 
        });
        setData(response.data);
        console.log('Data fetched from server:', response.data);
        
        generatePDF(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
const generatePDF = (data) => {
  const doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "portrait" });
  const img = new Image();
  img.src = '/headers.jpg';
  img.onload = function () {
    doc.addImage(img, 'JPG', 10, 10, 200, 50);
    
    const tableData = Object.entries(data);
    doc.autoTable({
      body: tableData
    });
    
    doc.save('report.pdf');
  };
};


    return(
        <>
            <Navbar/>
            <div className="report">
                 <h2>Download Paper Publication Report</h2><br/><div className="hr"></div><br/>
                 <div className="rep">
                    <p>WoS/Scopus:*</p> 
                    <select className="ach">
                        <option>Web of Science</option>
                        <option>Scopus</option>
                        <option>UGC Approved</option>
                        <option>others</option>
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
                 </div><br/><div className="hr"></div><br/>
                 <div><hr/>
                    <h2>Download Student Report</h2><br/>
                    <input  className="indate" placeholder="Roll no" value={rollNo} onChange={(e) => setRollNo(e.target.value)}/><br/><br/>
                    <button className="achsubmit" onClick={fetchData}>Submit</button>
                 </div>
                 <br/><br/><br/><br/>
            </div>  
        </>
    )
}

export default Report;