// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // 🔹 Importamos Storage

// 🔹 Configuración de Firebase (CORRIGE el `storageBucket`)
const firebaseConfig = {
  apiKey: "AIzaSyBjtMXdCx8kVPsEjsBiForCiSy0BDhH0oA",
  authDomain: "agendareact-6b1df.firebaseapp.com",
  projectId: "agendareact-6b1df",
  storageBucket: "agendareact-6b1df.appspot.com", // 🔹 Corregido
  messagingSenderId: "185241877806",
  appId: "1:185241877806:web:85f367db0c0134970a4ebf",
  measurementId: "G-WPW7RZRWYE"
};

// 🔹 Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app); // 🔹 Inicializar Firebase Storage

// 🔹 Función para generar documento de usuario en Firestore
export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = doc(firestore, `users/${user.uid}`);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    const { email, displayName, photoURL } = user;
    try {
      await setDoc(userRef, {
        displayName,
        email,
        photoURL: photoURL || null, // 🔹 Asegurar que `photoURL` no sea `undefined`
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }

  return getUserDocument(user.uid);
};

// 🔹 Función para obtener el documento del usuario
const getUserDocument = async (uid) => {
  if (!uid) return null;

  const userRef = doc(firestore, `users/${uid}`);
  try {
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      return {
        uid,
        ...userDoc.data()
      };
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

// 🔹 Exportar `storage` para poder usarlo en otros componentes
export { auth, firestore, storage };
