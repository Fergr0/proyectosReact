import React, { useState } from 'react';
import { evaluate } from 'mathjs';

function Funciona() {

    const [input, setInput] = useState('0');

    // Función para manejar los botones
    const handleClick = (value) => {
      if (value === 'AC') {
        setInput('0');  
      } else if (value === '+/-') {
        setInput((prev) => (prev.charAt(0) === '-' ? prev.slice(1) : '-' + prev));  
      } else if (value === '%') {
        setInput((prev) => (parseFloat(prev) / 100).toString());  
      } else if (value === '=') {
        try {
          const result = evaluate(input.replace('X', '*').replace('÷', '/'));
          setInput(result.toString());  
        } catch (e) {
          setInput('Error');  
        }
      } else {
        // Concatenamos el valor al input
        setInput((prev) => (prev === '0' ? value : prev + value));
      }
    };

  return (
<div>
      <table>
        <tbody>
          {/* Fila 1: Pantalla de la calculadora */}
          <tr>
            <td colSpan="4">
              <input type="text" value={input} readOnly />
            </td>
          </tr>

          {/* Fila 2: Botones AC, +/-, %, ÷ */}
          <tr>
            <td><button onClick={() => handleClick('AC')}>AC</button></td>
            <td><button onClick={() => handleClick('+/-')}>+/-</button></td>
            <td><button onClick={() => handleClick('%')}>%</button></td>
            <td><button onClick={() => handleClick('÷')}>÷</button></td>
          </tr>

          {/* Fila 3: Botones 7, 8, 9, X */}
          <tr>
            <td><button onClick={() => handleClick('7')}>7</button></td>
            <td><button onClick={() => handleClick('8')}>8</button></td>
            <td><button onClick={() => handleClick('9')}>9</button></td>
            <td><button onClick={() => handleClick('X')}>X</button></td>
          </tr>

          {/* Fila 4: Botones 4, 5, 6, - */}
          <tr>
            <td><button onClick={() => handleClick('4')}>4</button></td>
            <td><button onClick={() => handleClick('5')}>5</button></td>
            <td><button onClick={() => handleClick('6')}>6</button></td>
            <td><button onClick={() => handleClick('-')}>-</button></td>
          </tr>

          {/* Fila 5: Botones 1, 2, 3, + */}
          <tr>
            <td><button onClick={() => handleClick('1')}>1</button></td>
            <td><button onClick={() => handleClick('2')}>2</button></td>
            <td><button onClick={() => handleClick('3')}>3</button></td>
            <td><button onClick={() => handleClick('+')}>+</button></td>
          </tr>

          {/* Fila 6: Botones 0, . (que ocupa 2 columnas), = */}
          <tr>
            <td colSpan="2"><button onClick={() => handleClick('0')}>0</button></td>
            <td><button onClick={() => handleClick('.')}>.</button></td>
            <td><button onClick={() => handleClick('=')}>=</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Funciona