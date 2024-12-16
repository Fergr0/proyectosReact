import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonListComponent from './components/PokemonListComponent'
import PokemonDetailsComponent from './components/PokemonDetailsComponent'
import PokemonDetailsComponent2 from './components/PokemonDetailsComponent2'

function App() {
  const [count, setCount] = useState(0)

  const [selectedPokemon, setSelectedPokemon] = useState()
  const [selectedPokemon2, setSelectedPokemon2] = useState()

  return (
    <>
    <h2>Pokémons seleccionados</h2>
      {selectedPokemon && (
        <div>
          
          <PokemonDetailsComponent pokemon = {selectedPokemon}></PokemonDetailsComponent>
        </div>
      )}
      {selectedPokemon2 && (
        <div>
          
          <PokemonDetailsComponent2 pokemon = {selectedPokemon2}></PokemonDetailsComponent2>
        </div>
      )}
      <h2>Lista de Pokémons</h2>
      <PokemonListComponent selectedPokemon={setSelectedPokemon} selectedPokemon2 = {setSelectedPokemon2}></PokemonListComponent>
    </>
  )
}

export default App
