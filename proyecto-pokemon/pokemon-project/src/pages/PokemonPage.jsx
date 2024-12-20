import { useContext, useState } from 'react'
import PokemonListComponent from '../components/PokemonListComponent'
import PokemonDetailsComponent from '../components/PokemonDetailsComponent'
import PokemonDetailsComponent2 from '../components/PokemonDetailsComponent2'
import DetailsWrapper from '../hoc/DetailsWrapper'
import {Navigate} from 'react-router-dom'
import { UserContext } from '../context/User.context'

function PokemonPage() {
    const [count, setCount] = useState(0)

    const {user} = useContext(UserContext);

    if(!user.isLoggedIn) return <Navigate to={"/error"}/>

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

export default PokemonPage