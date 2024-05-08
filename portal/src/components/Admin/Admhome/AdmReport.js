import React, { useState } from 'react';
import './report.css'; 
import IndNavbar from '../IndNavbar';
import jsPDF from 'jspdf';
import axios from 'axios';


function Report() {
  const [data, setData] = useState([]);

     const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/admin_report');
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
  
  img.onload = function () {
    let yPos = 10; 

    data.forEach(item => {
      const tableData = Object.entries(item);
      doc.autoTable({
        startY: yPos + 60, 
        body: tableData
      });
      yPos = doc.autoTable.previous.finalY + 10;
    });

    doc.save('mongodb_data.pdf');
  };
  
  img.src = 'headers.jpg';
};
  return (
    <>    
    <IndNavbar/>
    <br/><br/>
    <div className='entiref'>
    <div className='entire'>
    <div><hr/>
          <h2>Download Students Report</h2><br/>
          <button className="achsubmit" onClick={fetchData}>Submit</button>
    </div>
    <div><hr/>
          <h2>Download Faculty Report</h2><br/>
          <button className="achsubmit" >Submit</button>
    </div>
    </div></div>
    </>

  );
}

export default Report;