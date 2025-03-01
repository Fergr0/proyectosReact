import React from "react";
import "./ProgressBar.css"; // Importamos los estilos

const ProgressBar = ({ totalContacts, maxContacts = 50 }) => {
  const percentage = (totalContacts / maxContacts) * 100; // Calculamos el % de ocupación

  return (
    <div className="progress-container">
      <div className="progress-label">
        Contactos: {totalContacts}/{maxContacts} ({percentage.toFixed(1)}%)
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${percentage}%` }} // Ajusta el ancho dinámicamente
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
