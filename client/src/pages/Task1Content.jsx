import { useState } from 'react';
import { Button, InputNumber, Radio, Alert } from 'antd';
import axios from 'axios';
import { formatValue } from 'react-currency-input-field';

const Task1Content = () => {
  const [country, setCountry] = useState('India');
  const [units, setUnits] = useState(0);
  const [result, setResult] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [minCost, setMinCost] = useState(0);
  const [errorMessage, setErrorMessage] = useState(0);

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const fetchMinimumCost = async (orderCountry, units) => {
    try {
      const response = await axios.post(`${BASE_URL}/orders`, { 
        country: orderCountry,
        units: units,
      });
      setResult(`Available stock in India: ${response.data.stockIndia} : Available stock in Sri Lanka: ${response.data.stockSriLanka}`);
      const formattedValue1 = formatValue({
      value: response.data.totalCost + '',
      groupSeparator: ',',
      decimalSeparator: '.',
      prefix: '₹',
    });
      setMinCost(formattedValue1)
    } catch (error) {
      let message = ""
      if (error?.response?.data) {
          message = error.response.data.message
      }
      setErrorMessage(message)
      setResult('')
      setMinCost(0)
      console.error('There was an error fetching the order cost from the backend:', error);
      setShowAlert(true);
    }
  };

  const handleCalculate = () => {
    if (units < 1 || units > 200) {
      setShowAlert(true); 
    } else {
      setShowAlert(false);
      fetchMinimumCost(country, units);
    }
  };

  const onClose = () => {
    setShowAlert(false);
  };

  return (
    <div>
      {showAlert && (
        <Alert
          message="Error"
          description={errorMessage}
          type="error"
          closable
          onClose={onClose}
        />
      )}
      <div><h3>{`Q1: Calculate the minimum cost for purchasing a given number of units.`}</h3></div>
      <div><h4>{'Solution :'}</h4></div>
      <div>{`Choose the country`}</div>
      <div style={{ paddingTop: '10px' }}>
      <Radio.Group onChange={(e) => setCountry(e.target.value)} value={country}>
        <Radio value={'India'}>India</Radio>
        <Radio value={'SriLanka'}>Sri Lanka</Radio>
      </Radio.Group>
      </div>

      <div style={{ paddingTop: '20px' }}>
      <InputNumber
        min={1}
        max={200}
        value={units}
        onChange={(value) => setUnits(value)}
        placeholder="Enter number of units"
      />
      <Button onClick={handleCalculate} type="primary" style={{ marginLeft: '8px' }}>Order</Button>
      </div>
     
      {result && (
        <div>
          <h4>Result:</h4>
          <p>{`Minimum Cost is: ${minCost}`}</p>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default Task1Content;
