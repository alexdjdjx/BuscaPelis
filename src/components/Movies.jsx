/* eslint-disable react/prop-types */


function ListOfMovies({movies}) {

return (
    <ul>
        {movies.map(movie => (
            <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <img src={movie.poster} alt={movie.title} />
            </li>
        ))
        }
    </ul>
)
}
function NoResults(){


    return (
        <h1>No se han encontrado resultados en la búsqueda.</h1>
    )
}

export function Movies( {movies}) {
    
    const hasMovies = movies?.length > 0
   
    return hasMovies ? <ListOfMovies movies={movies}/> : <NoResults/> 
}