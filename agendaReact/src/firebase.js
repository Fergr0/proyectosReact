import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyBjtMXdCx8kVPsEjsBiForCiSy0BDhH0oA",
  authDomain: "agendareact-6b1df.firebaseapp.com",
  projectId: "agendareact-6b1df",
  storageBucket: "agendareact-6b1df.appspot.com",
  messagingSenderId: "185241877806",
  appId: "1:185241877806:web:85f367db0c0134970a4ebf",
  measurementId: "G-WPW7RZRWYE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = doc(firestore, `users/${user.uid}`);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    try {
      await setDoc(userRef, {
        displayName: additionalData.displayName || "Usuario",
        email: user.email,
        photoURL: additionalData.photoURL || null,
      });

      console.log(" Documento creado correctamente en Firestore.");
    } catch (error) {
      console.error(" Error al crear el documento de usuario:", error);
    }
  }
};

export { auth, firestore, storage };
