import { auth } from "../firebase";
import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => { 
  const context = useContext(authContext);
  if (!context) { 
    console.error("No se encontró el contexto de autenticación.");
    return null;
  }
  return context;
};

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null); //Se inicializa el user con null

  useEffect(() => {//Se ejecuta la función cuando el componente se monta
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        console.log("Usuario no autenticado.");
        setUser(null);
      }
    });

    return () => unsubscribe(); // Se cierra correctamente la suscripción
  }, []);


  const getUserFromFirestore = async (uid) => {
    try {
      const userRef = doc(firestore, "users", uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        return { uid, ...userSnap.data() }; // 🔹 Retorna el usuario con los datos de Firestore
      } else {
        console.log("Usuario no encontrado en Firestore");
        return null;
      }
    } catch (error) {
      console.error("Error al obtener usuario de Firestore:", error);
      return null;
    }
  };

  const signUp = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);

      const userDoc = {
        uid: response.user.uid,
        email,
        displayName: displayName || "Usuario",
        photoURL: photoURL || "https://via.placeholder.com/100",
      };
      await setDoc(doc(firestore, "users", response.user.uid), userDoc);
      setUser(response.user); // Se actualiza el estado después de registrarse
      return response.user;
    } catch (error) {
      console.error("Error en signUp:", error.message);
      return null;
    }
  };

  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
        setUser(response.user); // Se actualiza el estado después de iniciar sesión
      return response.user;
    } catch (error) {
      console.error("Error en login:", error.message);
      return null;
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      console.log("Usuario cerró sesión.");
      setUser(null); // Se actualiza el estado después de cerrar sesión
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };



  return (
    <authContext.Provider value={{ signUp, login, logOut, user }}>
      {children}
    </authContext.Provider>
  );
}
