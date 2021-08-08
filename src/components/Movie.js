import React from 'react';
import {useParams} from 'react-router-dom'

//Config
import {IMAGE_BASE_URL, POSTER_SIZE} from '../config';

//components
import BreadCrumb from './BreadCrumb'
import Grid from './Grid'
import Spinner from './Spinner'
import MovieInfo from './MovieInfo'
//Hook
import { useMovieFetch } from '../hook/useMovieFetch'

// Image
import NoImage from '../images/no_image.jpg'
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';

const Movie =()=>{
    const {movieId} = useParams()

    const { state: movie, loading, error} = useMovieFetch(movieId)
    // console.log(movie)
    if(loading) return <Spinner />
    if(error) return <div> someting went wrong ...</div>
    
    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar 
                time={movie.runtime}  
                revenue={movie.revenue}  
                budget={movie.budget} />
            
            <Grid header='Actors'>
                {movie.actors.map( actor =>(
                    <Actor 
                        key={actor.credit_id} 
                        name={actor.name} 
                        charactor={actor.charactor} 
                        imageUrl={actor.profile_path ?  `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path }`
                        : NoImage } 
                    
                    />
                ))}
                </Grid>
            
        </>
    )

}

export default Movie;
