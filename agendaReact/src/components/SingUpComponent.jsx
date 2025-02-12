import React, { useState } from "react";
import { auth, generateUserDocument } from "../firebase.js"; // Importa Firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
      // Crear usuario en Firebase Auth
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      
      // Guardar usuario en Firestore con la URL de la imagen proporcionada
      await generateUserDocument(user, { displayName, photoURL });

      // Limpiar campos después del registro
      setEmail("");
      setPassword("");
      setDisplayName("");
      setPhotoURL("");

      navigate("/login"); // Redirigir a login
    } catch (error) {
      setError("Error al registrarse. Inténtalo de nuevo.");
      console.error(error.message);
    }
  };

  return (
    <section>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">Registro</h3>
                {error && <p className="text-danger text-center">{error}</p>}
                <form onSubmit={signUp}>
                  {/* Nombre */}
                  <div className="mb-3">
                    <label htmlFor="displayName" className="form-label">Nombre</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="displayName" 
                      placeholder="Ingresa tu nombre" 
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      required 
                    />
                  </div>

                  {/* Correo Electrónico */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      placeholder="Ingresa tu correo" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                  </div>

                  {/* Contraseña */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="password" 
                      placeholder="Ingresa tu contraseña" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required 
                    />
                  </div>

                  {/* URL de Imagen de perfil */}
                  <div className="mb-3">
                    <label htmlFor="photoURL" className="form-label">URL de Foto de perfil</label>
                    <input 
                      type="text" 
                      className="form-control"
                      id="photoURL"
                      placeholder="Ingresa la URL de tu foto de perfil"
                      value={photoURL}
                      onChange={(e) => setPhotoURL(e.target.value)}
                    />
                  </div>

                  {/* Botón de Registro */}
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Registrarse
                    </button>
                  </div>
                </form>

                {/* Enlace a Login */}
                <div className="mt-3 text-center">
                  <p>¿Ya tienes cuenta? <a href="/login" className="text-decoration-none">Inicia sesión</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpComponent;
