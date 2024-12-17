import { useState } from 'react'
import './App.css'
import ContadorComponent from './components/ContadorComponent'

function App() {
  const [num, setNum] = useState(0)

  const incrementar = () =>{
    setNum(num + 1);
  }

  const decrementar = () =>{
    setNum(num -1);
  }

  const resetear = () =>{
    setNum(0);
  }

  const clase = "incButton"


  return (
    <>
      <ContadorComponent num = {num} incrementar={incrementar} decrementar = {decrementar} resetear = {resetear} clase = {clase}></ContadorComponent>
    </>
  )
}

export default App
