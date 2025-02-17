import React, { useEffect } from 'react'
import { useState } from 'react'
import contactoService from '../services/contacto.service'
import { useNavigate } from "react-router-dom";

function Anadir() {

    const [contacto, setContacto] = useState({})
    const navigate = useNavigate();


    const handleRegister = async (e) => {
        e.preventDefault();//Evita que se recargue la página
        try {
            const form = e.target; // Obtiene el formulario directamente
            const nombre = form.nombre.value;
            const apellidos = form.apellidos.value;
            const calle = form.calle.value;
            const codPostal = form.codPostal.value;
            const ciudad = form.ciudad.value;
            const cumpleanos = form.cumpleanos.value;

            setContacto({
                nombre: nombre,
                apellido: apellidos,
                calle: calle,
                codPostal: codPostal,
                ciudad: ciudad,
                cumpleanos: cumpleanos
            })
            const contacto2 ={
                nombre: nombre,
                apellido: apellidos,
                calle: calle,
                codPostal: codPostal,
                ciudad: ciudad,
                cumpleanos: cumpleanos
            }
            contactoService.create(contacto2)
            console.log(contacto)
            navigate("/listado");
        } catch (e) {
            console.log("Error en el registro:" + e);
        }



    }
    useEffect(() => {
        console.log("Estado actualizado:", contacto);
       
    }, [contacto]); // Se ejecuta cuando cambia el estado de contacto

    return (
        //nombre, apellidos, ciudad, calle, codigo postal, cumpleaños
        <>
            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name='nombre' aria-describedby="nombre" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellidos</label>
                    <input type="text" className="form-control" id="apellidos" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Ciudad</label>
                    <input type="text" className="form-control" id="ciudad" aria-describedby="ciudad" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Calle</label>
                    <input type="text" className="form-control" id="calle" aria-describedby="calle" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Código postal</label>
                    <input type="text" className="form-control" id="codPostal" name="codPostal"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Cumpleaños</label>
                    <input type="date" className="form-control" id="cumpleanos" aria-describedby="cumpleanos" lang='es' />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Anadir