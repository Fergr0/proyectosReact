import { useState } from 'react'
import './App.css'
import Calculadora from './components/Calculadora'
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('0');
  
      // Función para manejar los botones
      const handleClick = (value) => {
        if (value == 'AC'){
          setInput('0')
        }else if(value == '+/-'){
          if (input[0] === '-') {
              // Si el input es negativo, eliminamos el signo negativo
              setInput(input.slice(1));
            } else {
              // Si el input es positivo, agregamos el signo negativo
              setInput('-' + input);
            }
        }else if(value=='%'){
          //coger el valor
          let valorPrevio = input
          let numero = parseFloat(valorPrevio)
          let resultado = numero/100
          setInput(resultado.toString())
          }else if(value == "="){
              const result = evaluate(input.replace('X', '*').replace('÷', '/'));
              setInput(result.toString());
          }else{
              if (input === "0" && value !== "0") {
                  setInput(value); // Reemplazamos el "0" por el valor presionado
              } else {
                  // Si el input no es "0", agregamos el valor presionado al final
                  setInput(input + value);
              }
              
          }
      };

  return (
    <>
      <section>
        <Calculadora input={input} handleClick={handleClick} ></Calculadora>
      </section>
    </>
  )
}

export default App
