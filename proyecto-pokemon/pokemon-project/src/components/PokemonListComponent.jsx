import { useContext, useEffect, useState } from "react";
import PokemonCardComponent from "./PokemonCardComponent"
import "./PokemonList.css";
import GetFormComponent from "./GetFormComponent";
import { PokemonContext } from "../context/Pokemon.context";


function PokemonListComponent(props) {

    const { pokemons, setPokemons} = useContext(PokemonContext); //esta variable la cogemos del contexto, por lo que es global


    useEffect(()=>{
        getPokemons(1, 20);
    }, [])

    const fetchPokemon = async(index) =>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
        const data = await response.json();
        return data;
    }

    const getPokemons = async(from, to) =>{
        const pokemonArr = [];
        for(let i = from; i<= to; i++){
            const pokemon = await fetchPokemon(i);
            pokemonArr.push(pokemon);
        }

        setPokemons(pokemonArr);

    }

    const HTMLPokemon = pokemons.map((pokemon)=>{
        return <PokemonCardComponent key={pokemon.id} pokemon = {pokemon} selectedPokemon={props.selectedPokemon} selectedPokemon2 = {props.selectedPokemon2}></PokemonCardComponent>
    })

  return (
    <div>
        <GetFormComponent getPokemons = {getPokemons}></GetFormComponent>

        <ul className="pokemon-list">
            {HTMLPokemon}
        </ul>
    </div>

  )
}

export default PokemonListComponent