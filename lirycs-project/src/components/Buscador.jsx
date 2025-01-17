import React, { useState } from 'react'

function buscador(props) {

  const searchLirycs = async (event, group, song) => {
    event.preventDefault()
    setGroup(group)
    setSong(song)
    llamadaApi(group, song)
  }

  return (
    <section className='py-5 bg-light'>
      <div className="container">
        <form onSubmit={searchLirycs}>
        <div className="mb-3">
                <label htmlFor="grupo" className="form-label">Grupo</label>
                <input
                  type="text"
                  id="grupo"
                  className="form-control"
                  placeholder="Metallica"
                />
        </div>
        <div className="mb-3">
                <label htmlFor="cancion" className="form-label">Canción</label>
                <input
                  type="text"
                  id="cancion"
                  className="form-control"
                  placeholder="One"
                />
        
        </div>
        <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Buscar
                </button>
        </div>
        </form>
      </div>
    </section>
  )
}

export default buscador