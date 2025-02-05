import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import tutorialService from '../services/tutorial.service';

function TutorialComponent(props) {

    const {id} = useParams(); // Capturamos el id del tutorial en la URL
    const [tutorial, setTutorial] = useState({
        id: '',
        title: '',
        description: '',
        published: false
    });

    useEffect(() => {
        // Cargar el tutorial por id desde la API
        tutorialService.get(id)
            .then(response => {
                setTutorial({
                    id: response.data.id,
                    title: response.data.title,
                    description: response.data.description,
                    published: response.data.published
                });
            })
            .catch(e => {
                console.log("Error loading tutorial:", e);
            });
    }, [id]); // Se ejecuta cada vez que cambie el 'id'

    // Manejar cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setTutorial({
            ...tutorial,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Creamos un nuevo objeto de tutorial con los valores del formulario
        const updatedTutorial = {
            id: tutorial.id,
            title: tutorial.title,
            description: tutorial.description,
            published: tutorial.published
        };

        // Llamamos al servicio para actualizar el tutorial en la base de datos
        tutorialService.update(updatedTutorial.id, updatedTutorial)
            .then(response => {
                console.log("Tutorial actualizado:", response.data);
                // Aquí podrías redirigir al usuario o mostrar un mensaje de éxito
            })
            .catch(e => {
                console.log("Error actualizando el tutorial:", e);
            });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Editar Tutorial</h2>
            <form className="row g-4" onSubmit={handleSubmit}>

                {/* Título */}
                <div className="col-md-6">
                    <label htmlFor="title" className="form-label">Título</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        placeholder="Ingresa el título del tutorial"
                        value={tutorial.title} // Vinculamos el valor con el estado
                        onChange={handleChange} // Actualizamos el estado al cambiar
                    />
                </div>

                {/* Descripción */}
                <div className="col-md-12">
                    <label htmlFor="description" className="form-label">Descripción</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        rows="4"
                        placeholder="Escribe la descripción del tutorial"
                        value={tutorial.description} // Vinculamos el valor con el estado
                        onChange={handleChange} // Actualizamos el estado al cambiar
                    />
                </div>

                {/* Publicado */}
                <div className="col-md-12">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="published"
                            name="published"
                            checked={tutorial.published} // Vinculamos el estado del checkbox
                            onChange={handleChange} // Actualizamos el estado al cambiar
                        />
                        <label className="form-check-label" htmlFor="published">
                            Publicado
                        </label>
                    </div>
                </div>

                {/* Botón de Guardar */}
                <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">Guardar Cambios</button>
                </div>
            </form>
        </div>
    );
}

export default TutorialComponent;
