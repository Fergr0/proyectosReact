import React from 'react'
import { useState, useEffect, useContext } from 'react';
import productoService from "../services/producto.service";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import "../Styles/styles.css";

function Listado() {

    const [productos, setProductos] = useState([]);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [cantidadCompra, setCantidadCompra] = useState(1);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { eliminarProducto, cargarProductos } = useContext(ProductContext);
  
    useEffect(() => {
      const fetchProductos = async () => {
        try {
          const response = await productoService.getAll();
          if (response && response.data) {
            setProductos(response.data);
          }
        } catch (error) {
          console.error("Error al cargar productos:", error);
        }
      };
      fetchProductos();
    }, []);
  

    const Editar = (id) => {
      navigate("/editar/" + id);
    };
  
    const seleccionarProducto = (producto) => {
      setProductoSeleccionado(producto);
      setCantidadCompra(1);
      navigate("/mostrar/" + producto.id)
    };
  
    return (
      <div className="container mt-4 d-flex">
        <div className="w-50">
          {productos.length === 0 ? (
            <h2>No hay monedas registradas</h2>
          ) : (
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((producto, index) => (
                  <tr key={index} onClick={() => seleccionarProducto(producto)} style={{ cursor: "pointer" }}>
                    <td>{producto.name}</td>
                    <td>{producto.brand}</td>
                    <td>{producto.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
}

export default Listado