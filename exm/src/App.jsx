import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "../src/context/ProductContext"

import InsertarProducto from "../src/components/InsertarProducto"
import ListarProductos from "../src/components/ListarProductos";
import EditarProductos from "../src/components/EditarProductos";
import BarraProgreso from "../src/components/BarraProgreso";

function App() {
  return (
    <ProductProvider>
        <BarraProgreso />
        <Routes>
          <Route path="/" element={<InsertarProducto />} />
          <Route path="listado" element={<ListarProductos />} />
          <Route path="editar/:id" element={<EditarProductos />} />
        </Routes>
    </ProductProvider>
  );
}

export default App;
