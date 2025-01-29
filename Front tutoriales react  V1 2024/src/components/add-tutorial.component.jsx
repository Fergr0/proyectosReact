import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import tutorialService from '../services/tutorial.service';

function AddTutorial() {

  const [tutorial, setTutorial] = useState({})

  const insertarTutorial = (e) =>{
    e.preventDefault()

    const id = e.target.id.value
    const title = e.target.title.value
    const description = e.target.description.value
    const published = e.target.published.checked

    setTutorial({
      id:id,
      title:title,
      description:description,
      published: published
    })

    console.log(tutorial)

  }

  // Aquí, mostrarás el estado actualizado después de que se haya hecho la actualización.
  React.useEffect(() => {
    if(tutorial.id == null){
      console.log("Ajá")
    }else{
      tutorialService.create(tutorial)
    }
    
    console.log(tutorial);  // Esto ahora imprimirá el objeto actualizado
  }, [tutorial]);


  return (
    <section className="container mt-5">
      <h2 className="text-center mb-4">Añadir Tutorial</h2>
      <form className="row g-4" onSubmit={insertarTutorial}>

        {/* id */}
        <div className="col-md-6">
          <label htmlFor="id" className="form-label">Id</label>
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            required
          />
        </div>

        {/* Título */}
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            required
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
            required
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
            />
            <label className="form-check-label" htmlFor="published">
              Publicado
            </label>
          </div>
        </div>

        {/* Botón de Enviar */}
        <div className="col-12">
          <button type="submit" className="btn btn-dark w-100">Añadir Tutorial</button>
        </div>
      </form>
    </section>
  );
}

export default AddTutorial;
