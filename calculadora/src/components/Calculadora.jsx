import React, { useState } from 'react';


function Calculadora(props) {

  return (
<div className='container'>
  <table className="table table-bordered w-100">
    <tbody>
      {/* Fila 1: Pantalla de la calculadora */}
      <tr>
        <td colSpan="4" className='bg-secondary'>
          <input type="text" value={props.input} readOnly className="form-control bg-secondary " />
        </td>
      </tr>

      {/* Fila 2: Botones AC, +/-, %, ÷ */}
      <tr>
        <td><button className="btn w-100" onClick={() => props.handleClick('AC')}>AC</button></td>
        <td><button className="btn  w-100" onClick={() => props.handleClick('+/-')}>+/-</button></td>
        <td><button className="btn  w-100" onClick={() => props.handleClick('%')}>%</button></td>
        <td><button className="btn btn-warning w-100" onClick={() => props.handleClick('/')}>÷</button></td>
      </tr>

      {/* Fila 3: Botones 7, 8, 9, X */}
      <tr>
        <td><button className="btn btn-light w-100" onClick={() => props.handleClick('7')}>7</button></td>
        <td><button className="btn btn-light w-100" onClick={() => props.handleClick('8')}>8</button></td>
        <td><button className="btn btn-light w-100" onClick={() => props.handleClick('9')}>9</button></td>
        <td><button className="btn btn-warning w-100" onClick={() => props.handleClick('X')}>X</button></td>
      </tr>

      {/* Fila 4: Botones 4, 5, 6, - */}
      <tr>
        <td><button className="btn btn-light w-100" onClick={() => props.handleClick('4')}>4</button></td>
        <td><button className="btn btn-light w-100" onClick={() => props.handleClick('5')}>5</button></td>
        <td><button className="btn btn-light w-100" onClick={() => props.handleClick('6')}>6</button></td>
        <td><button className="btn btn-warning w-100" onClick={() => props.handleClick('-')}>-</button></td>
      </tr>

      {/* Fila 5: Botones 1, 2, 3, + */}
      <tr>
        <td><button className="btn btn-light w-100" onClick={() => props.handleClick('1')}>1</button></td>
        <td><button className="btn btn-light w-100" onClick={() => props.handleClick('2')}>2</button></td>
        <td><button className="btn btn-light w-100" onClick={() => props.handleClick('3')}>3</button></td>
        <td><button className="btn btn-warning w-100" onClick={() => props.handleClick('+')}>+</button></td>
      </tr>

      {/* Fila 6: Botones 0, . (que ocupa 2 columnas), = */}
      <tr>
        <td colSpan="2"><button className="btn btn-light w-100" onClick={() => props.handleClick('0')}>0</button></td>
        <td><button className="btn btn-light w-100" onClick={() => props.handleClick('.')}>.</button></td>
        <td><button className="btn btn-warning w-100" onClick={() => props.handleClick('=')}>=</button></td>
      </tr>
    </tbody>
  </table>
</div>

  )
}

export default Calculadora