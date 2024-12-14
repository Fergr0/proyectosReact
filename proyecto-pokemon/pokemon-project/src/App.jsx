import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonListComponent from './components/PokemonListComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Pokemon Project</h2>
      <PokemonListComponent></PokemonListComponent>
    </>
  )
}

export default App
