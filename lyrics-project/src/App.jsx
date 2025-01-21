import { useState } from 'react'
import './App.css'
import Tabla from './components/Tabla';
import BuscadorV2 from './components/BuscadorV2';

function App() {

  const[group, setGroup] = useState("")
  const[song, setSong] = useState("")
  const[lyrics, setLyrics] = useState("")
  const[canciones, setCanciones] = useState([[]])

  const llamadaApi = async (group, song) =>{
    fetch("https://api.lyrics.ovh/v1/" + group + "/" + song).then(response => response.json())
    .then(data => {
      setLyrics(data.lyrics)
            // Añadir la nueva canción al estado canciones
            setCanciones(prevCanciones => [
              ...prevCanciones,
              [group, song, data.lyrics]
            ]);
    })
    .catch(error => {
      console.error("Error al hacer la llamada:", error);
    });
  }

  return (
    <>
      <section>
        <BuscadorV2 setGroup={setGroup} setSong={setSong} llamadaApi={llamadaApi}/>
        <Tabla canciones={canciones}/>
      </section>
    </>
  )
}

export default App
