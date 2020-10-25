import React, {useEffect, useState} from 'react'
import { MovieListItem } from './MovieListItem'

/* const movies=[
    {
        id: 1,
        title: "Movie 1",
        img: "https://m.media-amazon.com/images/M/MV5BN2NkZjA0OWUtZDgyMy00MjIxLWJhZTEtYjdmYzVjZTQ3YWRiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
        year: 2002
    },
    {
        id: 2,
        title: "Movie 2",
        img: "https://m.media-amazon.com/images/M/MV5BN2NkZjA0OWUtZDgyMy00MjIxLWJhZTEtYjdmYzVjZTQ3YWRiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
        year: 2006
    },
    {
        id: 3,
        title: "Movie 3",
        img: "https://m.media-amazon.com/images/M/MV5BN2NkZjA0OWUtZDgyMy00MjIxLWJhZTEtYjdmYzVjZTQ3YWRiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
        year: 2008
    },
    {
        id: 4,
        title: "Movie 4",
        img: "https://m.media-amazon.com/images/M/MV5BN2NkZjA0OWUtZDgyMy00MjIxLWJhZTEtYjdmYzVjZTQ3YWRiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
        year: 1999
    },

] */

export const MovieList = () => {
    
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=cba2729e2b09eabe7bcd684a1788211d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

        fetch (url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                const m = data.results.map(
                    ({id, title, poster_path, release_date }) =>
                    ({
                        id,
                        title,
                        img: "https://image.tmdb.org/t/p/w185" + poster_path,
                        year: release_date.substring(0,4)
                    })
                );
                setMovies(m);

                //https://image.tmdb.org/t/p/w185
            })
    },[])
    
    return (
        <section className="movie-list">
            {
                movies.map(movie =>(
                    <MovieListItem key={movie.id} movie={movie} />
                ))
            }
        </section>
    )
}
