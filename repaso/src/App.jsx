import { useState } from 'react'
import './App.css'
import Anadir from './components/Anadir'
import ListaContactos from './components/ListaContactos'
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Editar from './components/Editar';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Anadir />}/>
        <Route path="listado" element={<ListaContactos />} />
        <Route path="editar/:id" element={<Editar />} />
      </Routes>
    </>
  )
}

export default App
