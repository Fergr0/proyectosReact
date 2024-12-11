import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ButtonComponent from './components/ButtonComponent'

function App() {

  // let number = 0;
  const [number, setNumber] = useState(0)
  const [myValue, setMyValue] = useState("")
  let myPlaceHolder = "Escribe aquí"

  const upOne = () =>{
    // number++;
    setNumber(number + 1)
    console.log(number)
  }

  const sayHello =() => {
    console.log("Hola")
  }

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <main className='main-content'>
        <h2 onClick={sayHello}>Hola a todos</h2>
        <h2 onClick={upOne}>Número: {number}</h2>
        <input value={myValue} type="text" onChange={handleChange} placeholder={myPlaceHolder} />
        <br></br>
        <br></br>
        <ButtonComponent></ButtonComponent>
      </main>
    </>
  )
}

export default App
