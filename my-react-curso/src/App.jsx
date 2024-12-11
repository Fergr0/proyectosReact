import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ButtonComponent from './components/ButtonComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <main className='main-content'>
        <h2>Hola a todos</h2>
        <ButtonComponent></ButtonComponent>
      </main>
    </>
  )
}

export default App
