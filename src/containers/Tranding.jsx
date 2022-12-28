//import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import tmdb from '../iniapi/tmdb';
import MovieCard from '../components/MovieCard';

const Tranding = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await tmdb.get("Tranding/movie/week");
                setMovies(fetchedMovies.data.results);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovies();
    }, []);

    return (
        <div className='top-rated'>
            <h1 style={{ marginTop: '0px' }}>Tranding Movie</h1>
            {movies ?
            <div className='movie-grid'>
            
            {movies.map((movie, i) => (<MovieCard movie={movie} index={i} key={movie.id} />))}
            </div>
            : <div> No Movie yet...</div>}
        </div>
    );
}

export default Tranding;
