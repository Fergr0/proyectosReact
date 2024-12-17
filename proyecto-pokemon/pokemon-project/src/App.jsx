import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonListComponent from './components/PokemonListComponent'
import PokemonDetailsComponent from './components/PokemonDetailsComponent'
import PokemonDetailsComponent2 from './components/PokemonDetailsComponent2'
import DetailsWrapper from './hoc/DetailsWrapper'

function App() {
  const [count, setCount] = useState(0)

  const [selectedPokemon, setSelectedPokemon] = useState()
  const [selectedPokemon2, setSelectedPokemon2] = useState()

  const getDetails1 = (likes, increaseLikes) => {
    return(
      <PokemonDetailsComponent pokemon={selectedPokemon} likes = {likes} increaseLikes = {increaseLikes}></PokemonDetailsComponent>
    )
  }

  const getDetails2 = (likes, increaseLikes) => {
    return(
      <PokemonDetailsComponent2 pokemon={selectedPokemon2} likes = {likes} increaseLikes = {increaseLikes}></PokemonDetailsComponent2>
    )
  }

  return (
    <>
    <h2>Pokémons seleccionados</h2>
      {selectedPokemon && (
          <DetailsWrapper render = {getDetails1}></DetailsWrapper>
      )}
      {selectedPokemon2 && (
          <DetailsWrapper render = {getDetails2}></DetailsWrapper >
      )}
      <h2>Lista de Pokémons</h2>
      <PokemonListComponent selectedPokemon={setSelectedPokemon} selectedPokemon2 = {setSelectedPokemon2}></PokemonListComponent>
    </>
  )
}

export default App
