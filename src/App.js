import React, { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs';

const Button = ({ children, className, onClick }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      const sanitizedInput = input.replace(/[^-()\d/*+.]/g, '');
      setResult(evaluate(sanitizedInput));
    } catch (error) {
      setResult('Error');
    }
  };

  const displayFullName = () => {
    setInput('Laurence Andre Malana');
    setResult('');
  };

  return (
    <div className="calculator">
      <h2>Calculator of Laurence Andre Malana - IT3A</h2>
      
      <div className="display">
        <div className="input">{input || '0'}</div>
        <div className="result">{result}</div>
      </div>
      
      <div className="keypad">
        <div className="row">
          <Button className="clear" onClick={clearInput}>AC</Button>
          <Button className="surname-button" onClick={displayFullName}>MALANA</Button>
          <Button className="operator" onClick={() => handleClick('/')}>÷</Button>
        </div>
        
        <div className="row">
          <Button className="number" onClick={() => handleClick('7')}>7</Button>
          <Button className="number" onClick={() => handleClick('8')}>8</Button>
          <Button className="number" onClick={() => handleClick('9')}>9</Button>
          <Button className="operator" onClick={() => handleClick('*')}>×</Button>
        </div>
        
        <div className="row">
          <Button className="number" onClick={() => handleClick('4')}>4</Button>
          <Button className="number" onClick={() => handleClick('5')}>5</Button>
          <Button className="number" onClick={() => handleClick('6')}>6</Button>
          <Button className="operator" onClick={() => handleClick('-')}>-</Button>
        </div>
        
        <div className="row">
          <Button className="number" onClick={() => handleClick('1')}>1</Button>
          <Button className="number" onClick={() => handleClick('2')}>2</Button>
          <Button className="number" onClick={() => handleClick('3')}>3</Button>
          <Button className="operator" onClick={() => handleClick('+')}>+</Button>
        </div>
        
        <div className="row">
          <Button className="number" onClick={() => handleClick('.')}>.</Button>
          <Button className="number zero" onClick={() => handleClick('0')}>0</Button>
          <Button className="equals" onClick={calculateResult}>=</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
