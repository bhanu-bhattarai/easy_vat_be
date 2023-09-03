import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css'
import { useNavigate } from 'react-router';


const ListSells = () => {
  const [sells, setSells] = useState([]);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  console.log('outside component')
  useEffect(() => {
    console.log('inside component')
    axios.get('http://localhost:8080/sells')
      .then(res => {
        setSells(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="table-wrapper">
      <button className='back-button' onClick={handleBack}>Back</button>
      <h2>List of Sells</h2>
      <table>
        <thead>
          <tr>
            <th>Bill No</th>
            <th>Amount</th>
            <th>Vat Amount</th>
            <th>Total Amount</th>
            <th>Client Name</th>
            <th>Pan No.</th>
            <th>Is Alcohol</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {sells.map((sell,i) => (
            <tr key={`sell-${i}-${sell.id}`}>
              <td>{sell.billNo}</td>
              <td>{sell.sa}</td>
              <td>{sell.vatAmount}</td>
              <td>{sell.totalAmount}</td>
              <td>{sell.name}</td>
              <td>{sell.panNo}</td>
              <td>{sell.isAlcohol}</td>
              <td>{sell.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSells;
