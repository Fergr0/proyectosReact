import { useState } from "react";
import "./styles.css";
import background from "./bg.jpeg";
import { NavLink } from "react-router-dom";

const navItems = [
  { icon: "person_add", label: "SignUp", path: "/signUp" },
  { icon: "login", label: "SignIn", path: "/logIn" },
  { icon: "visibility", label: "Ver Contactos", path: "/prueba" },
  { icon: "help", label: "Ayuda", path: "/help" },
  { icon: "add", label: "Añadir", path: "/anadir" },
  { icon: "delete", label: "Borrar", path: "/borrar" },

];

export const Sidebar3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Botón de la hamburguesa */}
      <button 
        type="button" 
        className="sidebar-3-burger" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="material-symbols-outlined">
          {isOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Sidebar */}
      <aside className={`sidebar-3 ${isOpen ? "open" : ""}`}>
        <nav>
          {navItems.map(({ icon, label, path }) => (
            <NavLink 
              key={icon} 
              to={path} 
              className={({ isActive }) => isActive ? "active-link" : ""}
              onClick={() => setIsOpen(false)} // Cierra la sidebar al hacer clic en un enlace
            >
              <span className="material-symbols-outlined">{icon}</span>
              <p>{label}</p>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};