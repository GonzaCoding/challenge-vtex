import React from 'react'

export const MovieListItem = ({key, movie}) => {
    return (
        <article className="movie-card">
            <img className="movie-img" src={movie.img} />
            <h3 className="movie-title" >{movie.title}</h3>
            <p className="movie-year">{movie.year}</p>
            <button className="btn-details">See details</button>
        </article>
    )
}
