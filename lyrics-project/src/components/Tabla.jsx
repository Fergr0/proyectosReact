import React, { useState } from 'react';

function Tabla(props) {

  

    // Función para añadir una nueva canción al estado
    const addSong = (newArtist,newSong, newLyric) => {
      setCanciones(prevCanciones => [...prevCanciones, newArtist,newSong,newLyric]);
    };

  return (
    <section className="py-4">
      <div className="container">
        <h3 className="text-center mb-4">Tabla de Letras</h3>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">Grupo/Artista</th>
                <th scope="col">Canción</th>
                <th scope="col">Letra</th>
              </tr>
            </thead>
            <tbody>
                {/* Por cada peticion, se anadiria un tr */}
                {props.canciones.map((cancion, index) => (
                <tr key={index}>
                  <td>{cancion[0]}</td>
                  <td>{cancion[1]}</td>
                  <td>
                    <pre style={{ whiteSpace: "pre-wrap" }}>{cancion[2]}</pre>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Tabla;
