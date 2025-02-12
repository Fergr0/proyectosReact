import React, { useState } from "react";
import { auth } from "../firebase.js"; // Asegúrate de que la ruta sea correcta
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/prueba"); // Redirige a la página principal o dashboard después de iniciar sesión
    } catch (error) {
      setError("Error al iniciar sesión. Verifica tus credenciales.");
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
                <h3 className="card-title text-center">Iniciar Sesión</h3>
                {error && <p className="text-danger text-center">{error}</p>}
                <form onSubmit={login}>
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

                  {/* Botón de inicio de sesión */}
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Iniciar Sesión
                    </button>
                  </div>
                </form>

                {/* Enlace para registrarse */}
                <div className="mt-3 text-center">
                  <p>¿No tienes cuenta? <a href="/" className="text-decoration-none">Regístrate</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginComponent;
