import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buscador from "./components/Buscador";
import Tabla from './components/Tabla';
function App() {

  const[group, setGroup] = useState("")
  const[song, setSong] = useState("")

  const llamadaApi = async (group, song) =>{
    console.log("holaaa")
  }

  return (
    <>
      <section>
        <Buscador group={group} setGroup={setGroup} song={song} setSong={setSong} llamadaApi={llamadaApi}></Buscador>
        <Tabla></Tabla>
      </section>
    </>
  )
}

export default App
