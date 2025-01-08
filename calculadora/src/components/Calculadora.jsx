import React, { useState } from 'react';


function Calculadora(props) {

  return (
<div>
      <table>
        <tbody>
          {/* Fila 1: Pantalla de la calculadora */}
          <tr>
            <td colSpan="4">
              <input type="text" value={props.input} readOnly />
            </td>
          </tr>

          {/* Fila 2: Botones AC, +/-, %, ÷ */}
          <tr>
            <td><button onClick={() => props.handleClick('AC')}>AC</button></td>
            <td><button onClick={() => props.handleClick('+/-')}>+/-</button></td>
            <td><button onClick={() => props.handleClick('%')}>%</button></td>
            <td><button onClick={() => props.handleClick('/')}>/</button></td>
          </tr>

          {/* Fila 3: Botones 7, 8, 9, X */}
          <tr>
            <td><button onClick={() => props.handleClick('7')}>7</button></td>
            <td><button onClick={() => props.handleClick('8')}>8</button></td>
            <td><button onClick={() => props.handleClick('9')}>9</button></td>
            <td><button onClick={() => props.handleClick('X')}>X</button></td>
          </tr>

          {/* Fila 4: Botones 4, 5, 6, - */}
          <tr>
            <td><button onClick={() => props.handleClick('4')}>4</button></td>
            <td><button onClick={() => props.handleClick('5')}>5</button></td>
            <td><button onClick={() => props.handleClick('6')}>6</button></td>
            <td><button onClick={() => props.handleClick('-')}>-</button></td>
          </tr>

          {/* Fila 5: Botones 1, 2, 3, + */}
          <tr>
            <td><button onClick={() => props.handleClick('1')}>1</button></td>
            <td><button onClick={() => props.handleClick('2')}>2</button></td>
            <td><button onClick={() => props.handleClick('3')}>3</button></td>
            <td><button onClick={() => props.handleClick('+')}>+</button></td>
          </tr>

          {/* Fila 6: Botones 0, . (que ocupa 2 columnas), = */}
          <tr>
            <td colSpan="2"><button onClick={() => handleClick('0')}>0</button></td>
            <td><button onClick={() => props.handleClick('.')}>.</button></td>
            <td><button onClick={() => props.handleClick('=')}>=</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Calculadora