import React, { useEffect, useState } from "react";
import ContactoService from "../../services/contacto.service";
import TutorialService from "../../services/tutorial.service";
import ProgressBar from "../ProgressBar/ProgressBar"; // Importamos la barra de progreso
import "../VerContactos/VerContactos.css";
import Popup from "../Popup/Popup";
import { useAuth } from "../../context/AuthContext";

function VerContactosComponent() {
  const [contactos, setContactos] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isTutorialPopupOpen, setIsTutorialPopupOpen] = useState(false);
  const [selectedContacto, setSelectedContacto] = useState(null);
  const [tutoriales, setTutoriales] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    retrieveContacts();
  }, []);

  const retrieveContacts = () => {
    ContactoService.getAll()
      .then((response) => {
        setContactos(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleOpenPopup = (contacto) => {
    setSelectedContacto(contacto);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedContacto(null);
  };

  const handleDelete = (id) => {
    ContactoService.delete(id)
      .then(() => {
        retrieveContacts();
        handleClosePopup();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // Función para abrir el popup lateral de tutoriales
  const handleOpenTutorialPopup = (contacto) => {
    if (!contacto.tutorialIds || contacto.tutorialIds.length === 0) {
      alert("Este contacto no tiene tutoriales asignados.");
      return;
    }

    // Llamar al servicio para obtener los tutoriales asociados
    TutorialService.getAll()
      .then((response) => {
        const tutorialesAsociados = response.data.filter(tutorial =>
          contacto.tutorialIds.includes(tutorial.id)
        );
        setTutoriales(tutorialesAsociados);
        setIsTutorialPopupOpen(true);
      })
      .catch((e) => {
        console.error("Error al obtener los tutoriales:", e);
      });
  };

  const handleCloseTutorialPopup = () => {
    setIsTutorialPopupOpen(false);
    setTutoriales([]);
  };

  return (
    <div className="container mt-4">
      {/* Barra de progreso de contactos */}
      <ProgressBar totalContacts={contactos.length} />

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto, index) => (
            <tr key={index} 
                className="clickable-row" 
                onClick={() => handleOpenPopup(contacto)}
            >
              <td>{contacto.nombre}</td>
              <td>{contacto.apellido}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup de información del contacto */}
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
        {selectedContacto ? (
          <div>
            <h2>
              {selectedContacto.nombre} {selectedContacto.apellido}
            </h2>
            <p><strong>Ciudad:</strong> {selectedContacto.ciudad}</p>
            <p><strong>Calle:</strong> {selectedContacto.calle}</p>
            <p><strong>Código Postal:</strong> {selectedContacto.codPostal}</p>
            <p><strong>Cumpleaños:</strong> {selectedContacto.cumpleanos}</p>

            {user && (
              <button className="btn btn-danger" onClick={() => handleDelete(selectedContacto.id)}>
                Borrar
              </button>
            )}

            <button 
              className="btn btn-info"
              onClick={() => handleOpenTutorialPopup(selectedContacto)}
            >
              Ver Tutoriales
            </button>
          </div>
        ) : <p>Cargando...</p>}
      </Popup>

      {/* Popup lateral de tutoriales */}
      <Popup isOpen={isTutorialPopupOpen} onClose={handleCloseTutorialPopup} side>
        <h3>Tutoriales de {selectedContacto?.nombre}</h3>
        {tutoriales.length > 0 ? (
          <ul>
            {tutoriales.map((tutorial) => (
              <li key={tutorial.id}>
                <strong>{tutorial.title}</strong>: {tutorial.description}
              </li>
            ))}
          </ul>
        ) : <p>No hay tutoriales asignados.</p>}
      </Popup>
    </div>
  );
}

export default VerContactosComponent;
