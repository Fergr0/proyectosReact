import { useEffect, useState } from "react";
import PokemonCardComponent from "./PokemonCardComponent"
import "./PokemonList.css";


function PokemonListComponent() {

    const [pokemons, setPokemons] = useState([]);

    useEffect(()=>{
        getPokemons(10);
    }, [])

    const fetchPokemon = async(index) =>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
        const data = await response.json();
        return data;
    }

    const getPokemons = async(quantity) =>{
        const pokemonArr = [];
        for(let i = 1; i<= quantity; i++){
            const pokemon = await fetchPokemon(i);
            pokemonArr.push(pokemon);
        }

        setPokemons(pokemonArr);

    }

    const HTMLPokemon = pokemons.map((pokemon)=>{
        return <PokemonCardComponent key={pokemon.id} pokemon = {pokemon}></PokemonCardComponent>
    })

  return (
    <ul className="pokemon-list">
        {HTMLPokemon }
    </ul>
  )
}

export default PokemonListComponent