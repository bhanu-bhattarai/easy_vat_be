import React, { useState } from "react";
import axios from '../../commonAxiosInstance';
import './AddSell.css';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddSell = () => {
  const [billNo, setBillNo] = useState("");
  const [amount, setAmount] = useState('');
  const [vatAmount, setVatAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isAlcohol, setIsAlcohol] = useState(false);
  

  const handleAmountChange = (event) => {
    const newAmount = event.target.value;
    if (newAmount === undefined || isNaN(newAmount) || newAmount === null || newAmount === '') {
      setAmount('');
    } else {
    setAmount(newAmount);
    }
    const newVatAmount = newAmount * 0.13; // Calculate vatAmount
    setVatAmount(Math.round(newVatAmount * 100)/100);

    const newTotalAmount = Number (Number(newAmount) + Number(newVatAmount)); // Calculate totalAmount
    setTotalAmount(Math.round(newTotalAmount * 100)/100);
  };
  
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (window.confirm('Are you sure you want to add this sell?')) {
      const sell = {
        billNo,
        amount,
        vatAmount,
        totalAmount,
      };
  
      axios.post("/sells", sell).then((response) => {
        setAmount('');
        setIsAlcohol(false);
        setBillNo('');
        setVatAmount('');
        setTotalAmount('');
        toast.success(`Bill ${billNo} created successfully!`,   {autoClose: 1000 });
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <button className='back-button' onClick={handleBack}>Back</button>
      <ToastContainer />
      <h2>Add Sell</h2>
        <div>
          <label>Bill No:</label>
          <input
            type="text"
            value={billNo}
            onChange={(event) => setBillNo(event.target.value)}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div>
          <label>isAlcohol:</label>
          <input type="checkbox" 
          id="isAlcohol" 
          checked={isAlcohol} 
          onChange={(event) => isAlcohol(event.target.checked)} />
        </div>
        <div>
        <label>VAT Amount:</label>
      <input type="number" value={vatAmount} disabled />
        </div>
        <div>
        <label>Total Amount:</label>
      <input type="number" value={totalAmount} disabled />     
         </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddSell;
