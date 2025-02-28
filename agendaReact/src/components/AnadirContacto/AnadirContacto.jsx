import React, { useState } from "react";
import ContactoService from "../../services/contacto.service";
import { useNavigate } from "react-router-dom";
import "./AnadirContacto.css"; // Usa los mismos estilos del login

function AnadirContactoComponent() {
  const [contacto, setContacto] = useState({
    nombre: "",
    apellido: "",
    calle: "",
    codPostal: "",
    ciudad: "",
    cumpleanos: "",
  });

  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContacto({ ...contacto, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ContactoService.create(contacto)
      .then(() => {
        setMensaje("Contacto añadido con éxito!");
        setTimeout(() => navigate("/ver"), 2000);
      })
      .catch(() => setMensaje("Error al guardar el contacto"));
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h3>Añadir Contacto</h3>
        {mensaje && <p className="text-success">{mensaje}</p>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              placeholder="Ingresa el nombre"
              name="nombre"
              value={contacto.nombre}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="apellido">Apellido</label>
            <input
              type="text"
              id="apellido"
              placeholder="Ingresa el apellido"
              name="apellido"
              value={contacto.apellido}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="calle">Calle</label>
            <input
              type="text"
              id="calle"
              placeholder="Ingresa la calle"
              name="calle"
              value={contacto.calle}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="codPostal">Código Postal</label>
            <input
              type="text"
              id="codPostal"
              placeholder="Ingresa el código postal"
              name="codPostal"
              value={contacto.codPostal}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="ciudad">Ciudad</label>
            <input
              type="text"
              id="ciudad"
              placeholder="Ingresa la ciudad"
              name="ciudad"
              value={contacto.ciudad}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="cumpleanos">Cumpleaños</label>
            <input
              type="date"
              id="cumpleanos"
              name="cumpleanos"
              value={contacto.cumpleanos}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="auth-btn">Guardar Contacto</button>
        </form>

        <div className="auth-footer">
          <p><a href="/ver">Ver contactos</a></p>
        </div>
      </div>
    </div>
  );
}

export default AnadirContactoComponent;
