import React from 'react';

function Tabla() {
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
              <tr>
                <td>Grupo 1</td>
                <td>Canción 1</td>
                <td>Letra 1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Tabla;
