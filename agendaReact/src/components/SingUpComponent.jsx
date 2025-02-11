import React, { useState } from "react";
import { auth, generateUserDocument } from "../firebase.js";  // Asegúrate de que la ruta sea correcta
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function SingUpComponent() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const singUp = async (event) => {
    event.preventDefault();

    try {
      // Crea un nuevo usuario con email y contraseña
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      
      // Genera el documento de usuario
      await generateUserDocument(user, { displayName });

      // Limpiar los campos después del registro
      setEmail("");
      setPassword("");
      setDisplayName("");


      navigate("/logIn");
    } catch (error) {
      setError('Error Signing up with email and password');
      console.error(error.message);
    }
  }

  return (
    <section>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">Registro</h3>
                <form>
                  {/* Campo de correo electrónico */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      placeholder="Ingresa tu correo electrónico" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                  </div>

                  {/* Campo de contraseña */}
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

                  {/* Botón de registro */}
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary" onClick={singUp}>
                      Registrarse
                    </button>
                  </div>
                </form>

                {/* Enlace para iniciar sesión */}
                <div className="mt-3 text-center">
                  <p>¿Ya tienes cuenta? <a href="/login" className="text-decoration-none">Inicia sesión</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingUpComponent;
