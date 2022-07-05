import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Chip, Typography } from '@mui/material';
const MovieDetails = () => {


    const [movie,setMovie]= useState({
        title:"",
        image:"",
        genre:[],
        description:"",
        rentPrice:0,
        buyPrice:0,
        duration:"",
        imdbrating:0,
        backgroundimage:"",

    })

    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/movies/${id}`).then((response)=>{
          return response.json();
      }).then(movie=>{
        console.log(movie)
        setMovie(movie)
      }).catch((err)=>{
        console.log(`Error:${err}`)
      })
    })
  return (
    <div>
        {/* <div className="back" style={{backgroundImage:`url(${movie.backgroundimage})`,height:100}}> </div> */}
        <div className="back">
            <img src={process.env.PUBLIC_URL + movie.backgroundimage} width="81.75%" height="375px" alt="img"></img>
             </div>
        <div className="moviedetails" >
                <img className='moviedetailsimage' src={process.env.PUBLIC_URL + movie.image} alt="img">
                </img> 
                <div>  
                <Typography variant="h2" fontWeight="900" fontStyle="bold" color="secondary">
                {movie.title}
                </Typography  >
                {movie.genre.map((genre)=>(
                    <Chip style={{marginRight:2,marginTop:4, backgroundColor:"grey",fontWeight:1500}} label={`${genre}`} variant="outlined"></Chip>
                )
                )}
                <Typography variant="h6">
                 IMDB Rating: {movie.imdbrating} | {movie.duration}  
                </Typography>
                <Typography variant="h5" fontWeight="900" fontStyle="bold">
                 {movie.description}
                </Typography>

                <Button style={{marginRight:50}} variant="contained">Rent ${movie.rentPrice}</Button>
                <Button variant="contained">Buy ${movie.rentPrice}</Button>
                </div>
                
                </div>
    </div>
  )
}

export default MovieDetails