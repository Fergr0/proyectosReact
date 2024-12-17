import { useState } from 'react';
import './PokemonDetails.css'
import DetailsWrapper from '../hoc/DetailsWrapper';

function PokemonDetailsCOmponent(props) {
    const {pokemon, likes, increaseLikes} = props;


  return (
    <section className="selected-pokemon">
      <div>
        <h3>Pokemon 1</h3>
        <h3>Likes {likes}
          <button onClick={increaseLikes}>+</button>
        </h3>
      </div>
        <div className="pokemon-container">
            <h2 className="text">{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt="pokemon img" className="pokemon-img" />
            <h3 className="text">HP: {pokemon.stats[0].base_stat}</h3>
        </div>
    </section>
  )
}

export default PokemonDetailsCOmponent; 
