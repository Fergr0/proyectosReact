import { useEffect, useState } from "react"
import "./PokemonCardComponent.css"

function PokemonCardComponent(props) {



    const { pokemon, selectedPokemon, selectedPokemon2 } = props;


  return (pokemon.id ? (
    <li className="pokemon-card" onClick={()=> selectedPokemon(pokemon)} onAuxClick={()=>selectedPokemon2(pokemon)}>
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-img"></img>
        <h3 className="text">HP: {pokemon.stats[0].base_stat}</h3>
    </li>
    ):(<p className="loading">Loading...</p>)
  )
}

export default PokemonCardComponent