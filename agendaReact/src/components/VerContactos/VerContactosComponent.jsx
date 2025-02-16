import React, { use, useEffect, useState } from "react";
import ContactoService from "../../services/contacto.service";
import "../VerContactos/VerContactos.css";

function VerContactosComponent() {

  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const retrieveTutorials = () => {
    ContactoService.getAll()
      .then(response => {
        setContactos(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  return (
    <div className="container">
      <div className="row">
        {contactos.map((contacto, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{contacto.nombre}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{contacto.apellido}</h6>
                <p className="card-text">Ciudad: {contacto.ciudad}</p>
                <p className="card-text">Calle: {contacto.calle}</p>
                <p className="card-text">Código Postal: {contacto.codPostal}</p>
                <p className="card-text">Cumpleaños: {contacto.cumpleanos}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VerContactosComponent;
