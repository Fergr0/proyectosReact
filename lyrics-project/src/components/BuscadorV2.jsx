import React, { useState } from 'react'

function BuscadorV2(props) {
const [localGroup, setLocalGroup] = useState("")
  const [localSong, setLocalSong] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  const searchLirycs = async (event) => {
    event.preventDefault()
    props.setGroup(localGroup)
    props.setSong(localSong)
    setIsLoading(true);
    setTimeout(() => {props.llamadaApi(localGroup, localSong)
                    setIsLoading(false)
    }, 2000);
    
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
                  value={localGroup}
                  onChange={(e) => setLocalGroup(e.target.value)}
                />
        </div>
        <div className="mb-3">
                <label htmlFor="cancion" className="form-label">Canción</label>
                <input
                  type="text"
                  id="cancion"
                  className="form-control"
                  placeholder="One"
                  value={localSong}
                  onChange={(e)=>{setLocalSong(e.target.value)}}
                />
        
        </div>
        <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  {isLoading ? "Buscando" : "Buscar"}
                </button>
        </div>
        </form>
      </div>
    </section>
  )
}

export default BuscadorV2