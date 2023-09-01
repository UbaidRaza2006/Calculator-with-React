
// export default function JavaScript() {
//     const marks = prompt("Enter Your Marks")
//     const total = 500
//     const per = (marks * 100) / total
//     console.log(per)
//     if (per >= 90) {
//         console.log("A+");
//         // if(marks>90)
//     } else if(per >= 80){
//         console.log("A");
//     } else if(per >= 70){
//         console.log("B");
//     }
//     else if(per >= 60){
//         console.log("C");
//     }
//     else if(per >= 50){
//         console.log("D");
//     }else{
//         console.log("Fail");
//     }
// }


import React, { useState } from 'react';
import '../index.css';

const Calculator = () => {
  const [FirstValue , AfterValue] = useState('');
  
  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(FirstValue);
        AfterValue(result.toString());
      } catch (error) {
        AfterValue('');
      }
    } else if (value === 'C') {
        AfterValue('');
    } else {
        AfterValue(FirstValue + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{FirstValue}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
          <button id='b' onClick={() => handleButtonClick('=')}>=</button>
        </div>
        <div className="row">
          <button id='c' onClick={() => handleButtonClick('C')}>C</button>
        </div>
      </div>
    </div>
  );
};


export default Calculator;