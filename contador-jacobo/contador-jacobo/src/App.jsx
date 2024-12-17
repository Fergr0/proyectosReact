import { useState } from 'react'
import './App.css'
import ContadorComponent from './components/ContadorComponent';
import usarContador from './hooks/usarContador'

function App() {
  const { count, incrementar, decrementar, resetear } = usarContador(0);

  return (
    <>
      <ContadorComponent num={count} incrementar={incrementar} decrementar={decrementar} resetear={resetear} clase="incButton"></ContadorComponent>
          
    </>
  );
}

export default App;
