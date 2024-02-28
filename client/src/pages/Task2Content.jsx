
// Task 2 Component
// "Print all braces combinations for a given value n so that they are balanced."


// time complexity is exponontial due to recursive 
// space complexity is O(n)

import  { useState } from 'react';
import { Button, InputNumber, Alert } from 'antd';

const Task2Content = () => {
  const [n, setN] = useState(1); // Default value set to 1
  const [combinations, setCombinations] = useState([]);
  const [showAlert, setShowAlert] = useState(false); // State to control the visibility of the alert

//backtracking algorithm
  const generateParenthesis = (n) => {
    const result = [];

    function backtrack(str = '', open = 0, close = 0) {
      if (open === n && close === n) {
        result.push(str);
        return;
      }

      if (open < n) backtrack(str + '(', open + 1, close);
      if (close < open) backtrack(str + ')', open, close + 1);
    }

    backtrack();
    return result;
  };

  const handleGenerate = () => {
    if (n < 1) { // not need now but it is handled in the ant input itslef
        setShowAlert(true); // Show alert if n is less than 1
    } else {
      setShowAlert(false); // Hide alert if n is valid
      const result = generateParenthesis(n);
      setCombinations(result);
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
          description="The value of n must be greater than 0 and less than are equal to 10"
          type="error"
          closable
          onClose={onClose}
        />
          )}
          <div><h3>{'Q2: Print all braces combinations for a given value n so that they are balanced'}</h3></div>
          <div><h4>{ 'Solution :'}</h4></div>
      <InputNumber
        min={1}
        max={10} // Limiting the maximum value to prevent excessive computation
        value={n}
        onChange={(value) => setN(value)}
        placeholder="Enter a number"
      />
      <Button onClick={handleGenerate} type="primary" style={{ marginLeft: '8px' }}>Generate</Button>
      {combinations.length > 0 && (
        <div>
         <h3>Combinations: {combinations.length}</h3>
          <ul>
            {combinations.map((combination, index) => (
              <li key={index}>{combination}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Task2Content;
