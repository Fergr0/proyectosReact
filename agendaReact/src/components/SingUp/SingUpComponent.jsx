import React, { useState } from "react";
import { generateUserDocument } from "../../firebase.js";
import { useAuth } from "../../context/authContext";
import "./SingUp.css";
import { useNavigate } from "react-router-dom";

function SignUpComponent() { 

  const { user, signUp } = useAuth();
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const navigate = useNavigate();
  const isAuthenticated = user !== null; // Verificamos si el usuario está autenticado

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const user = await auth.signUp(emailRegister, passwordRegister);
      if (!user) {
        console.error("No se pudo registrar el usuario.");
        return;
      }

      console.log("Usuario registrado:", user);

      await generateUserDocument(user, { displayName, photoURL });
      console.log("Documento de usuario generado en Firestore.");
    } catch (error) {
      console.error("Error en el registro:", error.message);
    }
    navigate("/login");
  };

  return (
    isAuthenticated ? (
      <div className="auth-container">
        <div className="auth-card">
          <h3>Ya has iniciado sesión</h3>
          <p>Para registrate, primero cierra sesión</p>
        </div>
      </div>
      ) : (
    <div className="auth-container">
      <div className="auth-card">
        <h3>Registro</h3>
        <form className="auth-form" onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="displayName">Nombre</label>
            <input 
              type="text" 
              id="displayName" 
              placeholder="Ingresa tu nombre" 
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Ingresa tu correo" 
              value={emailRegister}
              onChange={(e) => setEmailRegister(e.target.value)}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Ingresa tu contraseña" 
              value={passwordRegister}
              onChange={(e) => setPasswordRegister(e.target.value)}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="photoURL">URL de Foto de perfil</label>
            <input 
              type="text"
              id="photoURL"
              placeholder="Ingresa la URL de tu foto de perfil"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>

          <button type="submit" className="auth-btn">Registrarse</button>
        </form>

        <div className="auth-footer">
          <p>¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
        </div>
      </div>
    </div>)
  );
}

export default SignUpComponent;
