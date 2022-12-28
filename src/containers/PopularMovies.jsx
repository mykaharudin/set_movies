import React, { useEffect, useState } from 'react'
import tmdb from '../iniapi/tmdb';
import MovieCard from '../components/MovieCard'

const PopularMovies = () => {
    const [popular, setPopular] = useState([]);

    const fetchPopular = async () => {
        try {
            const fetchData = await tmdb.get("movie/popular", 
            {params: { language: "en-US",}});
            setPopular(fetchData.data.results);
        } catch (error) {
            console.log(error);
            setPopular([]);
        }
    }

    useEffect(() => {
        fetchPopular()
    }, []);


    return (
        <div className='popular'>
        <h1 style={{ marginTop: '0px' }}>Popular Movies</h1>
        {popular && <div className='movie-grid'>
            {popular.map((movie, i) => (
            <MovieCard movie={movie} index={i} key={movie.id} />))}
            </div>}
        </div>
    )
}
export default PopularMovies;