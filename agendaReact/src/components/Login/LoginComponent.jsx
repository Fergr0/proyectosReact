import React, { useState } from "react";
import { auth } from "../../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
// import "Login.css"

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();
  const isAuthenticated = user !== null; // Verificamos si el usuario está autenticado

  const login = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/ver");
    } catch (error) {
      setError("Error al iniciar sesión. Verifica tus credenciales.");
      console.error(error.message);
    }
  };

  return (
    isAuthenticated ? (
      <div className="auth-container">
        <div className="auth-card">
          <h3>Ya has iniciado sesión</h3>
          <p>Para iniciar sesión, primero cierra sesión</p>
        </div>
      </div>
    ): (
    <div className="auth-container">
      <div className="auth-card">
        <h3>Iniciar Sesión</h3>
        {error && <p className="text-danger">{error}</p>}
        <form className="auth-form" onSubmit={login}>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Ingresa tu correo" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Ingresa tu contraseña" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="auth-btn">Iniciar Sesión</button>
        </form>

        <div className="auth-footer">
          <p>¿No tienes cuenta? <a href="/">Regístrate</a></p>
        </div>
      </div>
    </div>)
  );
}

export default LoginComponent;
