import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w200/'

const MovieCard=({movie, index})=>{
    const navigate = useNavigate();

    const forHandleClick=()=>{
        navigate(`/movie/${movie.id}`)
    }

    return(
        <motion.div layout onClick={forHandleClick} key={index} className='movie-card'>
            {movie && (<img src={`${BASE_IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
            )}
        </motion.div>
    )
}

export default MovieCard;