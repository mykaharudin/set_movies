import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import tmdb from "../iniapi/tmdb"

const Carosel =({movie})=>{
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await tmdb.get("trending/movie/week");
                setMovies(fetchedMovies.data.results);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovies();
    },[]);

    const forKlikhandler =()=>{
        navigate(`/movie/${movie.id}`)
    }

    return(
        <div>
            <Carousel showArrows={true} showThumbs={false} showStatus={false} showIndicators={false} axis={'horizontal'} autoPlay={true} interval={5000} transitionTime={500} infiniteLoop={true}>
                {movies.map((item)=>(
                <Box sx={{width: "80%" , height: 700, backgroundColor:"#b70000"}} key={item.id} onclick={()=>forKlikhandler(item.id)}>
                            
                    <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="main" style={{ objectFit: "cover", width: "100vw", height: "90vh" }}/>

                    <Typography position={"absolute"} top={150} width={"60%"} paddingLeft={8} variant={"h1"} fontSize={"2em"} textAlign={"start"} color={"white"} marginBottom={0}>
                        {item.title}
                    </Typography>
                    
                    <Typography position={"absolute"} top={200} width={"40%"} paddingLeft={8} variant={'h6'} fontSize={"1em"} textAlign={"start"} color={"white"} marginBottom={0}>
                        Released : {item.release_date}
                    </Typography>
                    
                    <Typography position={"absolute"} top={200} width={"40%"} paddingLeft={8} variant={'h6'} fontSize={"1em"} textAlign={"start"} color={"white"} marginBottom={0} display={'flex'}flexDirection={"column"}>
                        {item.overview}
                    </Typography>

                </Box>
                ))}
            </Carousel>
        </div>
    )
}

export default Carosel;