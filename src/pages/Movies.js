import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import digitalstoreContext from '../context/Digitalstorecontext';


const Movies = () => {

  const {movies,setMovies}=useContext(digitalstoreContext);

  useEffect(()=>{
      fetch("/movies?type=Movie&type=TVSeries").then((response)=>{
          return response.json();
      }).then(movies=>{
        console.log(movies)
        setMovies(movies)
      }).catch((err)=>{
        console.log(`Error:${err}`)
      })
  },[])
  return (
          <div className='moviesList' >
            {
              movies.map((movie) => (
                <div className="moviecontent">
                <img className='movieListimage' src={process.env.PUBLIC_URL + movie.image} alt="img">
                </img>
                <Typography variant="body2" style={{margin:10,fontStyle:"bold"}} align='center'>
                <a href={`/movie/${movie.id}`}>{movie.title}</a>
                </Typography>
                
                </div>
                ))
            }
          </div>       
  )
}

export default Movies