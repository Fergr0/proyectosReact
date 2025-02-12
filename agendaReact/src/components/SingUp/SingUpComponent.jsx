import React, { useState } from "react";
import { auth, generateUserDocument } from "../../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./SingUp.css"

function SignUpComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signUp = async (event) => {
    event.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await generateUserDocument(user, { displayName, photoURL });

      setEmail("");
      setPassword("");
      setDisplayName("");
      setPhotoURL("");

      navigate("/login");
    } catch (error) {
      setError("Error al registrarse. Inténtalo de nuevo.");
      console.error(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h3>Registro</h3>
        {error && <p className="text-danger">{error}</p>}
        <form className="auth-form" onSubmit={signUp}>
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
    </div>
  );
}

export default SignUpComponent;
