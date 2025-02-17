
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import contactoService from '../services/contacto.service'

function Editar() {
    const { id } = useParams();
    const [contacto, setContacto] = useState({})

    useEffect(() => {
      descargarContacto();
    }, [])

      const descargarContacto = async () => {
        try {
          const response = await contactoService.get(id);
          setContacto(response.data);
          console.log(response.data);
        } catch (e) {
          console.log(e);
        }
      }

      return (
        //nombre, apellidos, ciudad, calle, codigo postal, cumpleaños
        <>
            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name='nombre' aria-describedby="nombre" value={contacto.nombre} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellidos</label>
                    <input type="text" className="form-control" id="apellidos"  value={contacto.apellido} />
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

export default Editar