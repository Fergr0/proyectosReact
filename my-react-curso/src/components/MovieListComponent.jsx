

function MovieListComponent() {
    const movies = ["Lord of the rings", "Star wars", "Dune"]
    const HTMLMovies = movies.map((movie,index)=>{//ASI SE RENDERIZAN LISTAS, CON EL MAP
        return <p key={movie}>{index+1}-{movie}</p>
    })
  return (
    <section>
        <h2>Movies</h2>
        {HTMLMovies}
    </section>

  )
}

export default MovieListComponent