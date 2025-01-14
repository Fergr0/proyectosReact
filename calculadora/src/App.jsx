import { useEffect, useState } from 'react'
import './App.css'
import Calculadora from './components/Calculadora'
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('0');
  const [isResult, setIsResult] = useState(false); // Nueva auxiliar para detectar si es resultado




  const llamada = (expresion) => {
    console.log(expresion)
    fetch("https://api.mathjs.org/v4/?expr="+expresion).then(response => response.json())
      .then(data => {
        console.log(data); // Ver todo el resultado
        setInput(data)
      })
      .catch(error => {
        console.error("Error al hacer la llamada:", error);
      });
  };

  // Función para manejar los botones
  const handleClick = (value) => {
    if (value == 'AC') {
      setInput('0');
      setIsResult(false); // Reiniciar la variable auxiliar
    } else if (value == '+/-') {
      if (input[0] === '-') {
        setInput(input.slice(1));//quitar el menos
      } else {
        setInput('-' + input);//poner el menos
      }
    } else if (value == '%') {
      let valorPrevio = input;//almaceno el valor
      let numero = parseFloat(valorPrevio);
      let resultado = numero / 100;
      setInput(resultado.toString());
      setIsResult(true); // Marcar como resultado en mi variable auxiliar
    } else if (value == "=") {
      let expr = input.replace('X','*').replace('÷', '/').replace('+', '%2B')
      //Llamar a la api
      llamada(expr)
      // const result = evaluate(input.replace('X', '*').replace('÷', '/'));
      // setInput(result.toString());
      setIsResult(true); // Marcar como resultado en mi variable auxiliar
    } else {
      if (isResult && !isNaN(value)) {
        // Si es un resultado previo y se presiona un número, reinicia el input
        setInput(value);
        setIsResult(false); // Resetear la variable aux
      } else {
        if (input === "0" && value !== "0") {
          setInput(value); // Reemplazamos el "0" por el valor presionado
        } else {
          // Si el input no es "0", agregamos el valor presionado al final
          setInput(input + value);
        }
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
