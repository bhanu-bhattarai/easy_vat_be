import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css'
import { useNavigate } from 'react-router';


function ClientList() {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };


  useEffect(() => {
    async function fetchClients() {
      try {
        const response = await axios.get('http://localhost:8080/clients');
        setClients(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchClients();
  }, []);

  return (
    <div>
      <button className='back-button' onClick={handleBack}>Back</button>
      <h1>Client List</h1>
      <table>
        <thead>
          <tr>
          <th>Id</th>
            <th>Name</th>
            <th>Pan No.</th>
            <th>Address</th>
            <th>Vat</th>
            <th>isAlcohol</th>
            <th>Amount</th>
            <th>Amount Limit</th>            
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.panNo}</td>
              <td>{client.address}</td>
              <td>{client.isVat}</td>
              <td>{client.isAlcohol}</td>
              <td>{client.amount}</td>
              <td>{client.amountLimit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientList;
