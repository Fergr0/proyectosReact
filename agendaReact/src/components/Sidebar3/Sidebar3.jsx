import { useState } from "react";
import "./styles.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const navItems = [
  { icon: "person_add", label: "SignUp", path: "/signUp", requiresAuth: false },
  { icon: "login", label: "SignIn", path: "/logIn", requiresAuth: false },
  { icon: "visibility", label: "Ver Contactos", path: "/ver" },
  { icon: "add", label: "Añadir", path: "/anadir", requiresAuth: true },
  { icon: "logout", label: "Cerrar Sesión", requiresAuth: true, isLogout: true },
];

export const Sidebar3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth(); // Importamos `logOut` del contexto
  const navigate = useNavigate(); // Hook para redirigir al usuario

  const isAuthenticated = user !== null; // Verificamos si el usuario está autenticado

  const handleLogout = async () => {
    try {
      await logOut(); // Cerrar sesión
      navigate("/logIn"); // Redirigir al usuario a la página de login
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

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
          {navItems
            .filter(({ requiresAuth, path }) => {
              //Ocultar "SignUp" y "SignIn" si el usuario está autenticado
              if (isAuthenticated && (path === "/signUp" || path === "/logIn")) {
                return false;
              }
              //Mostrar solo los enlaces que coincidan con el estado de autenticación
              return isAuthenticated || !requiresAuth;
            })
            .map(({ icon, label, path, isLogout }) => (
              isLogout ? (
                <NavLink 
                  key={icon} 
                  className="logout-btn" 
                  onClick={handleLogout} //Llamamos a `handleLogout` cuando se hace clic
                >
                  <span className="material-symbols-outlined">{icon}</span>
                  <p>{label}</p>
                </NavLink>
              ) : (
                <NavLink 
                  key={icon} 
                  to={path} 
                  className={({ isActive }) => isActive ? "active-link" : ""}
                  onClick={() => setIsOpen(false)} 
                >
                  <span className="material-symbols-outlined">{icon}</span>
                  <p>{label}</p>
                </NavLink>
              )
            ))
          }
        </nav>
      </aside>
    </>
  );
};
