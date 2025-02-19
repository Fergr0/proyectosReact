import React, { createContext, useState, useEffect } from "react";
import productoService from "../services/producto.service";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [totalProductos, setTotalProductos] = useState(0);

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      const response = await productoService.getAll();
      if (response && response.data) {
        setTotalProductos(response.data.length);
      } else {
        console.error("Respuesta de productos no válida:", response);
      }
    } catch (error) {
      console.error("Error al cargar productos:", error);
    }
  };

  return (
    <ProductContext.Provider value={{ totalProductos, cargarProductos }}>
      {children}
    </ProductContext.Provider>
  );
};