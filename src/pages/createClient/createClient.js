import React,{useState} from 'react';
import axios from '../../commonAxiosInstance';
import './createClient.css';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateClient = () => {
  const [clientName, setClientName] = useState('');
  const [panNo, setPanNo] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [isVat, setIsVat] = useState(false);
  const [isAlcohol, setIsAlcohol] = useState(false);
  const [amount, setAmount] = useState(0);
  const [amountLimit, setAmountLimit] = useState(99999);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/client/create', {
      clientName,
      panNo,
      clientAddress,
      isVat,
      isAlcohol,
      amount,
      amountLimit,
    })
      .then((response) => {
         // Clear form fields on success
      setClientName('');
      setPanNo('');
      setClientAddress('');
      setIsVat(false);
      setIsAlcohol(false);
      setAmount(0);
      setAmountLimit(99999);
      toast.success(`Client ${clientName} created successfully!`,   {autoClose: 1000 });
      })
      .catch((error) => {
      toast.error(`Client ${clientName} created successfully!`,   {autoClose: 1000 });
      console.log(error);
      });
  };

  
  return (
    <>
    <button className='back-button' onClick={handleBack}>Back</button>
    <ToastContainer />
    <form onSubmit={handleSubmit}>
      <h2>Create Client</h2>
      <div>
        <label htmlFor="clientName">Client Name:</label>
        <input type="text" id="clientName" value={clientName} onChange={(event) => setClientName(event.target.value)} required />
      </div>
      <div>
        <label htmlFor="panNo">PAN No.:</label>
        <input type="text" id="panNo" value={panNo} onChange={(event) => setPanNo(event.target.value)} required />
      </div>
      <div>
        <label htmlFor="clientAddress">Client Address:</label>
        <input type="text" id="clientAddress" value={clientAddress} onChange={(event) => setClientAddress(event.target.value)}/>
      </div>
      <div>
        <label htmlFor="isVat">Is VAT:</label>
        <input type="checkbox" id="isVat" checked={isVat} onChange={(event) => setIsVat(event.target.checked)} />
      </div>
      <div>
        <label htmlFor="isAlcohol">Is Alcohol:</label>
        <input type="checkbox" id="isAlcohol" checked={isAlcohol} onChange={(event) => setIsAlcohol(event.target.checked)} />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" value={amount} onChange={(event) => setAmount(Number(event.target.value))} required />
      </div>
      <div>
        <label htmlFor="amountLimit">Amount Limit:</label>
        <input type="number" id="amountLimit" value={amountLimit} onChange={(event) => setAmountLimit(Number(event.target.value))} required />
      </div>
      <button type="submit">Create</button>
    </form>
    </>
  );
};

export default CreateClient;
