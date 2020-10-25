import React from 'react';
import { useHistory } from 'react-router-dom';


export const MovieListItem = ({movie}) => {
    
    const history = useHistory();
    
    const handleClick = (id) => {
        history.push("/" + id)
    }

    return (
        <article className="movie-card">
            <img className="movie-img" src={movie.img} />
            <h3 className="movie-title" >{movie.title}</h3>
            <p className="movie-year">{movie.year}</p>
            <button onClick={() => handleClick(movie.id)} className="btn-details">See details</button>
        </article>
    )
}
