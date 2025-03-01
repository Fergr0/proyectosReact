import React, { useEffect } from "react";
import "../Popup/Popup.css"; // Importa estilos

const Popup = ({ isOpen, onClose, children, side = false }) => {
  
  // Cerrar popup con la tecla ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null; // No renderiza si no está abierto
  }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div 
        className={side ? "popup-content popup-side" : "popup-content"} 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="popup-close" onClick={onClose}>✖</button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
