import React from 'react'
import { MovieListItem } from './MovieListItem'

const movies=[
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

]

export const MovieList = () => {
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
