import { useState } from "react"


function GetFormComponent(props) {
    const [from, setFrom] = useState(1);
    const [to, setTo] = useState (10);

    const handleFromInput = (e) =>{
        setFrom(e.target.value);
    }

    const handleToInput = (e) =>{
        setTo(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.getPokemons(from, to)
    }

  return (
    <form onSubmit={handleSubmit}>
        <fieldset>
            <label htmlFor="from-pokemon">From: </label>
            <input type="number" id="from-pokemon" min={1} onChange={handleFromInput}></input>
        </fieldset>
        <fieldset>
            <label htmlFor="from-pokemon">To: </label>
            <input type="number" id="to-pokemon" onChange={handleToInput}></input>
        </fieldset>
        <button>GetPokemon</button>
    </form>
  )
}

export default GetFormComponent