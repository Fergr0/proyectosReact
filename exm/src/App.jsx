import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InsertarProducto from './components/InsertarProducto'
import { Routes, Route } from "react-router-dom";
import ListarProductos from './components/ListarProductos'
import EditarProductos from './components/EditarProductos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<InsertarProducto />} />
        <Route path="listado" element={<ListarProductos />} />
        <Route path="editar/:id" element={<EditarProductos />} />
      </Routes>
    </>
  )
}

export default App
