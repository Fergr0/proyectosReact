import React, { use, useEffect, useState } from "react";
import ContactoService from "../../services/contacto.service";
import "../VerContactos/VerContactos.css";
import Popup from "../Popup/Popup";

function VerContactosComponent() {

  const [contactos, setContactos] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Estado del popup
  const [selectedContacto, setSelectedContacto] = useState(null); // Estado para el contacto seleccionado

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

  // Función para abrir el popup con un contacto específico
  const handleOpenPopup = (contacto) => {
    setSelectedContacto(contacto);
    setIsPopupOpen(true);
  };

  // Función para cerrar el popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedContacto(null);
  };

  return (
    <div className="container mt-4">
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto, index) => (
            <tr key={index}>
              <td>
                <button onClick={() => handleOpenPopup(contacto)}>
                  {contacto.nombre}
                </button>
              </td>
              <td>
                <button>
                  {contacto.apellido}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
        {selectedContacto ? (
          <div>
            <h2>{selectedContacto.nombre} {selectedContacto.apellido}</h2>
            <p><strong>Ciudad:</strong> {selectedContacto.ciudad}</p>
            <p><strong>Calle:</strong> {selectedContacto.calle}</p>
            <p><strong>Código Postal:</strong> {selectedContacto.codPostal}</p>
            <p><strong>Cumpleaños:</strong> {selectedContacto.cumpleanos}</p>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </Popup>

    </div>
  );
}

export default VerContactosComponent;
