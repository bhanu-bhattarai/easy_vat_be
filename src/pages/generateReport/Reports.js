import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css'
import { useNavigate } from 'react-router';


const GenerateReports = () => {
  const [report, setReport] = useState([]);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };


  useEffect(() => {
    console.log("report called")
    axios.get('http://localhost:8080/reports')
      .then(res => {
        setReport(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="table-wrapper">
      <button className='back-button' onClick={handleBack}>Back</button>
      <h2>          
        {report}
      </h2>
    </div>
  );
}

export default GenerateReports;
