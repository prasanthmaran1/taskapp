import { useState } from 'react';
import { Button, InputNumber, Radio, Alert } from 'antd';
import axios from 'axios';

const Task1Content = () => {
  const [country, setCountry] = useState('India');
  const [units, setUnits] = useState(0);
  const [result, setResult] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const fetchMinimumCost = async (orderCountry, units) => {
    try {
      const response = await axios.post('http://localhost:3000/orders', { 
        country: orderCountry,
        units: units,
      });
      setResult(`Minimum Cost: ${response.data.message} : Stock Left in India: ${response.data.stock.India} : Stock Left in Sri Lanka: ${response.data.stock.SriLanka}`);
    } catch (error) {
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
          message="Invalid Input"
          description="The total units requested exceeds the available stock, or an error occurred. Please request between 1 and 200 units."
          type="error"
          closable
          onClose={onClose}
        />
      )}
      <div><h3>Q1: Calculate the minimum cost for purchasing a given number of units.</h3></div>
      <Radio.Group onChange={(e) => setCountry(e.target.value)} value={country}>
        <Radio value={'India'}>India</Radio>
        <Radio value={'Sri Lanka'}>Sri Lanka</Radio>
      </Radio.Group>
      <InputNumber
        min={1}
        max={200}
        value={units}
        onChange={(value) => setUnits(value)}
        placeholder="Enter number of units"
      />
      <Button onClick={handleCalculate} type="primary" style={{ marginLeft: '8px' }}>Calculate</Button>
      {result && (
        <div>
          <h4>Result:</h4>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default Task1Content;
