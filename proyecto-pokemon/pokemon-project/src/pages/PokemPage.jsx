import { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom'

function PokemPage() {
    const { id } = useParams(); //obtener parametro de la ruta
    const [pokemon, setPokemon] = useState();

    const fetchPokemon = async (id) =>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        setPokemon(data);
    }

    const navigate = useNavigate();

    const goTo = (id) =>{
        navigate(`/pokemon/${id}`)
    }

    useEffect(()=>{
        fetchPokemon(id);
    },[id])

  return (
    <section id='pokem-page'>
        {pokemon ? (
            <div>
                <h2>{pokemon.name.toUpperCase()}</h2>
                <img src={pokemon.sprites.front_default} alt="pokemon-img" className='pokem-img' />
                <h3>HP: {pokemon.stats[0].base_stat}</h3>
                <h3>Atack: {pokemon.stats[1].base_stat}</h3>
                <h3>Defense: {pokemon.stats[2].base_stat}</h3>
                <div className='link-buttons'>
                    <button onClick={()=>{goTo(Number(id)-1)}}>
                        izda
                    </button>
                    <button onClick={()=> goTo(Number(id)+1)}>
                        drcha
                    </button>
                </div>
            </div>
        ):(
            <div>Cargando...</div>
        )}
    </section>
  )
}

export default PokemPage