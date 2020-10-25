import React, {useEffect, useState, useRef} from 'react'
import { MovieListItem } from './MovieListItem'

export const MovieList = () => {
    
    const [movies, setMovies] = useState([]);
    const loader = useRef(null);
    const [page, setPage] = useState(0);

    useEffect(()=>{
        if(page > 0) {
            const url = `https://api.themoviedb.org/3/discover/movie?api_key=cba2729e2b09eabe7bcd684a1788211d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;

            fetch (url)
                .then(res => res.json())
                .then(data => {
                    const m = movies.concat(
                        data.results.map(
                            ({id, title, poster_path, release_date }) =>
                            ({
                                id,
                                title,
                                img: "https://image.tmdb.org/t/p/w185" + poster_path,
                                year: release_date.substring(0,4)
                            })
                        )
                    );
                    setMovies(m);

                })
        }
        
    },[page])

    useEffect(() => {
        var options = {
           root: null,
           rootMargin: "20px",
           threshold: 1.0
        };
       // initialize IntersectionObserver
       // and attaching to Load More div
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
           observer.observe(loader.current)
        }

    }, []);

    /* useEffect(() => {
        // here we simulate adding new posts to List
        const newList = postList.list.concat([1,1,1,1]);
        setPostList({
            list: newList
        })
    }, [page]) */

    // here we handle what happens when user scrolls to Load More div
   // in this case we just update page variable
    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {   
            setPage((page) => page + 1)
        }
    }
    
    return (
        <section className="movie-list">
            {
                movies.map(movie =>(
                    <MovieListItem key={movie.id} movie={movie} />
                ))
            }

            <div className="loading" ref={loader}>
                    <h2>Load More</h2>
            </div>
        </section>
    )
}
