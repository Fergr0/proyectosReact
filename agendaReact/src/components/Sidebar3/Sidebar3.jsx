import { useState } from "react";
import "./styles.css";
import background from "./bg.jpeg";
import { NavLink } from "react-router-dom";

const navItems = [
  { icon: "person_add", label: "SignUp", path: "/signUp" },
  { icon: "login", label: "SignIn", path: "/logIn" },
  { icon: "visibility", label: "Ver Contactos", path: "/prueba" },
  { icon: "help", label: "Ayuda", path: "/help" },
];

export const Sidebar3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      className="page sidebar-3-page"
      style={{ backgroundImage: `url(${background})` }}
    >
      <aside className={`sidebar-3 ${isOpen ? "open" : ""}`}>
        <div className="inner">
          <header>
            <button
              type="button"
              className="sidebar-3-burger"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="material-symbols-outlined">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </header>
          <nav>
            {navItems.map(({ icon, label, path }) => (
              <NavLink 
                key={icon} 
                to={path} 
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                <span className="material-symbols-outlined">{icon}</span>
                <p className="nav-text">{label}</p>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </section>
  );
};