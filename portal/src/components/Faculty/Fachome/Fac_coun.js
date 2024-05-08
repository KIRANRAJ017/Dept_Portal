import React from 'react';
import "./fac_coun.css"

class CounselingStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reportContent: ''
    };
  }

  

  generateReport = () => {
    const students = document.querySelectorAll('studentItem');
    let reportContent = '';

    students.forEach((student, index) => {
      const name = student.textContent.trim();
      const rollNo =`Roll_No_${index + 1}`;
      const subjects = ["Subject 1", "Subject 2", "Subject 3", "Subject 4", "Subject 5"];
      const marks = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1);

      reportContent += `Student ${index + 1}:\n`;
      reportContent += `Name: ${name}\n`;
      reportContent += `Roll No: ${rollNo}\n`;
      reportContent += `Subject Marks:\n`;
      for (let i = 0; i < subjects.length; i++) {
        reportContent += `${subjects[i]}: ${marks[i]}\n`;
      }
      reportContent += '\n';
    });

    this.setState({ reportContent }, () => {
      this.downloadReport();
    });
  }

  downloadReport = () => {
    const { reportContent } = this.state;
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'counseling_students_report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  render() {
    return (
      <div className="container2">
        <div className="containerInner">
          <h1>Counseling Students</h1>
          <ul className="studentList">
            <li className=" studentItem">John Doe</li>
            <li className=" studentItem">Jane Smith</li>
            <div className="studentItem">Sree</div>
            <div className="studentItem">MSD</div>
            <div className="studentItem">Rahul</div>
            <div className="studentItem">Kiran</div>
            <div className="studentItem">Raj</div>
            <div className="studentItem">Kummar</div>
            <div className="studentItem">Perumal</div>
            <div className="studentItem">Arun</div>
            <div className="studentItem">Suresh</div>
            <div className="studentItem">Aathavan</div>
          </ul>
          <button className="reportBtn" onClick={this.generateReport} style={{marginLeft:'20px',cursor:'pointer'}}>Generate Report</button>
        </div>
      </div>
    );
  }
}

export default CounselingStudents;