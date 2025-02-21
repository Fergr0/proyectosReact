import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Listado from './components/Listado'
import { Routes, Route } from 'react-router-dom'
import { ProductProvider } from './context/ProductContext'
import MostarCantidad from './components/MostarCantidad';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductProvider>
       <Routes>
          <Route path="/" element={<Listado />} />
          {<Route path="mostrar/:id" element={<MostarCantidad />} />
          /*<Route path="editar/:id" element={<EditarProductos />} />
          <Route path="segundo" element={<Segundo />} /> */}
        </Routes>
      </ProductProvider>
    </>
  )
}

export default App
