import React, { useEffect, useState } from "react";
import productoService from "../services/producto.service";
import { useNavigate } from "react-router-dom";
import "../Styles/styles.css";

function ListarProductos() {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    descargarProductos();
  }, []);

  const descargarProductos = async () => {
    try {
      const response = await productoService.getAll();
      setProductos(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const Editar = (id) => {
    navigate("/editar/" + id);
  };

  const Eliminar = async (id) => {
    try {
      await productoService.delete(id);
      descargarProductos();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="container mt-4">
        {productos.length === 0 ? (
          <h2>No hay productos registrados</h2>
        ) : (
            <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Marca</th>
                <th scope="col">Stock</th>
                <th scope="col">Precio</th>
                <th scope="col">Activo</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto, index) => (
                <tr key={index}>
                  <td>
                    <button className="btn btn-link" onClick={() => Editar(producto.id)}>
                      {producto.id}
                    </button>
                  </td>
                  <td>{producto.name}</td>
                  <td>{producto.brand}</td>
                  <td>{producto.stock}</td>
                  <td>{producto.price}</td>
                  <td>{producto.active ? "Sí" : "No"}</td>
                  <td>
                    <button className="btn btn-danger me-2" onClick={() => Eliminar(producto.id)}>Eliminar</button>
                    <button className="btn btn-info" onClick={() => Editar(producto.id)}>Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        
      </div>
    </>
  );
}

export default ListarProductos;
