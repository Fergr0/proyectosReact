import React, { useState, useEffect } from 'react';
import './InfoUsuarioComponent.css';
import { useAuth } from "../../context/AuthContext";
import { firestore } from '../../firebase';
import { doc, getDoc } from "firebase/firestore"; 

function InfoUsuarioComponent() {
    const { user } = useAuth(); // Obtengo el usuario del contexto
    const [uid, setUid] = useState(null); // Inicializo el uid con null
    const [currentUser, setCurrentUser] = useState(null); // Estado para almacenar el usuario de Firestore


    useEffect(() => {
        if (user) {
            setUid(user.uid);
        } else {
            setUid(null); // Si el usuario cierra sesión, limpiamos el estado
            setCurrentUser(null); // Limpiamos el estado del usuario
        }
    }, [user]);
    

    // Obtiene los datos del usuario desde Firestore
    useEffect(() => {
        const fetchUser = async () => {
            if (uid) {//Si el uid está definido
                try {
                    const userRef = doc(firestore, "users", uid);//Se obtiene la referencia del usuario
                    const userSnap = await getDoc(userRef);//Se obtiene el documento del usuario
                    
                    if (userSnap.exists()) {//Si el usuario existe
                        setCurrentUser(userSnap.data()); // Guardamos los datos del usuario
                    } else {
                        console.log("Usuario no encontrado en Firestore.");
                    }
                } catch (error) {
                    console.error("Error al obtener usuario de Firestore:", error);
                }
            }
        };

        fetchUser();//Se ejecuta la función para obtener los datos del usuario
    }, [uid]); // Se ejecuta cuando cambia `uid`

    return (
        <div className="info-usuario">
            {currentUser ? (
                <>
                    <img 
                        src={currentUser.photoURL} 
                        alt="Profile"
                        className="profile-picture"
                    />
                    <span className="user-name">{currentUser.displayName}</span>
                </>
            ) : (
                <p>Cargando usuario...</p>
            )}
        </div>
    );
}

export default InfoUsuarioComponent;
