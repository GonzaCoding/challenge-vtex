import React, { useState, useEffect } from 'react'

export const MovieDetail = ({ movieId }) => {
    //console.log(movieId);
    const [movieDetail, setMovieDetail] = useState({});
    const [movieCast, setMovieCast] = useState([]);
    const [loadingMovieDetail, setLoadingMovieDetail] = useState(true);
    const [loadingMovieCast, setLoadingMovieCast] = useState(true);

    useEffect(() => {
        getMovieDetail(movieId);
        getMovieCast(movieId);
    }, []);

    const getMovieDetail = async (movieId) => {
        
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;

        const fetchData = await fetch(url);

        const jsonData = await fetchData.json();
                
        setMovieDetail({
            title: jsonData.title,
            img: "https://image.tmdb.org/t/p/w342" + jsonData.poster_path,
            genres: jsonData.genres,
            year: jsonData.release_date.substring(0, 4)
        });
        setLoadingMovieDetail(false);
    }

    const getMovieCast = async (movieId) => {
        
        const urlCast = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;

        const fetchData = await fetch(urlCast);

        const jsonData = await fetchData.json();
        setMovieCast(jsonData.cast);
        setLoadingMovieCast(false);
    }

    const {title, img, genres, year} = movieDetail;

    return (
        <div>
            { !loadingMovieDetail &&
                <>
                    <h1>{title}</h1>
                    <img src={img} />
                    <p>Release year: {year}</p>
                    <p>Genres: </p>
                    <div className="genres-list">
                    {
                        genres.map(genre => (
                            <span className="movie-genre" key={genre.id}>{genre.name}</span>
                        ))
                    }
                    </div>
                    
                    <p>Cast:</p>
                    <ul>
                    {  !loadingMovieCast &&
                        movieCast.map(cast => {
                            //console.log(cast.name);
                            return(
                                <li className="movie-cast" key={cast.cast_id}>{cast.name}</li>
                            )
                            
                        })
                    } 
                    </ul>
                      
                    
                    
                </>
            }
            
        </div>
    )
}
