import { useEffect } from "react"


function MovieListComponent() {
    const movies = ["Lord of the rings", "Star wars", "Dune"]
    const HTMLMovies = movies.map((movie,index)=>{//ASI SE RENDERIZAN LISTAS, CON EL MAP
        return <p key={movie}>{index+1}-{movie}</p>
    })

    useEffect(()=>{
      console.log("Movie list mounted")
    }, [])//solo se muetra en el momento de montado, por el array vacio

    useEffect(()=>{
      return () => {
        console.log("Movie list unmounted")
      }
    }, [])

  return (
    <section>
        <h2>Movies</h2>
        {HTMLMovies}
    </section>

  )
}

export default MovieListComponent