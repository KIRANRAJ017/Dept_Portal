import React, { useState } from "react";
import Navbar from "../IndNavbar";
import "./Internal.css";
import * as XLSX from "xlsx";
import axios from "axios";

function Internal() {
  const [data, setData] = useState([]);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const excelData = XLSX.utils.sheet_to_json(ws, { header: 1 });
      setData(excelData);
    };
    reader.readAsBinaryString(file);
  };

  const onSubmit = async () => {
    try {
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.aoa_to_sheet(data);
      XLSX.utils.book_append_sheet(wb, ws, "Data");
      const excelBuffer = XLSX.write(wb, {
        bookType: "xlsx",
        type: "array",
      });
      const file = new Blob([excelBuffer], {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      const formData = new FormData();
      formData.append("file", file, fileName + ".xlsx");

      await axios.post("http://localhost:8000/faculty_internal", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        params: {
          fileName,
        },
      });
      alert("Data uploaded successfully");
    } catch (error) {
      console.error("Error uploading data:", error);
      alert("Error uploading data");
    }
  };

  return (
    <>
      <Navbar />
      <div className="internal">
        <div className="inter">
          <h2>Student Database Portal</h2>
          <br />
          <br />
          <br />
          <h3 style={{ textAlign: "left" }}>Upload Student Marks</h3>
          <br />
          <h3 style={{ textAlign: "left" }}>
            <select className="selsubj">
              <option style={{ fontSize: "18px" }}>Ist Internal Marks</option>
              <option style={{ fontSize: "18px" }}>IInd Internal Marks</option>
              <option style={{ fontSize: "18px" }}> Model Marks</option>
            </select>
          </h3>
          <br />
          <div className="App">
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileUpload}
            />
            {data.length > 0 && (
              <table className="table">
                <thead>
                  <tr>
                    {Object.keys(data[0]).map((key) => (
                      <th key={key} className="val">
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index}>
                      {Object.values(row).map((value, index) => (
                        <td key={index} className="val">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div><br/><br/>
          <button onClick={onSubmit} className="achsubmit" style={{width:'200px'}}>Submit to MongoDB</button>
        </div>
      </div>
    </>
  );
}

export default Internal;
