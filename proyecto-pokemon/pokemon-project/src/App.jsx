import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonListComponent from './components/PokemonListComponent'
import PokemonDetailsComponent from './components/PokemonDetailsComponent'

function App() {
  const [count, setCount] = useState(0)

  const [selectedPokemon, setSelectedPokemon] = useState()

  return (
    <>
      {selectedPokemon && (
        <div>
          <h2>Pokémon seleccionado</h2>
          <PokemonDetailsComponent pokemon = {selectedPokemon}></PokemonDetailsComponent>
        </div>
      )}
      <h2>Lista de Pokémons</h2>
      <PokemonListComponent selectedPokemon={setSelectedPokemon}></PokemonListComponent>
    </>
  )
}

export default App
