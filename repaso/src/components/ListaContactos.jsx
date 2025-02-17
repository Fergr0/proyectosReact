import React, { useEffect } from 'react'
import contactoService from '../services/contacto.service'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "../Styles/styles.css"


function ListaContactos() {

  const [contactos, setContactos] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    descargarContactos();
  }, [])

  const descargarContactos = async () => {
    try {
      const response = await contactoService.getAll();
      setContactos(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  const Editar = (id) => {
    navigate("/editar/" + id);
  }
    
  const Eliminar = async (id) => {
    try {
      await contactoService.delete(id);
      descargarContactos();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="container mt-4">
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Código Postal</th>
            <th scope="col">Cumpleaños</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto, index) => (
            <tr key={index}>
              <td scope="row">
                <button onClick={() => Editar(contacto.id)}>
                  {contacto.id}
                </button>
              </td >
              <td>{contacto.nombre}</td>
              <td>{contacto.apellido}</td> 
              <td>{contacto.ciudad}</td>
              <td>{contacto.codPostal}</td> 
              <td>{contacto.cumpleanos}</td>
              <td>
                <button className="btn btn-danger" onClick={() => Eliminar(contacto.id)}>Eliminar</button>
              </td>
              <td>
                <button className="btn btn-info" onClick={() => Editar(contacto.id)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default ListaContactos