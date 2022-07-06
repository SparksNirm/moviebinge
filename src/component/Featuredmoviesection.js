import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Featuredmoviesection = ({type}) => {

    const [featuredmovies,setFeaturedMovies]=useState([]);
    const navigate = useNavigate();

    const clickHandler = () => {

        navigate("/movie")
    
      }

    useEffect(()=>{
        if(type==='Movie')
        {
            fetch("/db/movies?isFeatured=true&type=Movie").then((response) => {
            return response.json()
          }).then((json) => {
            console.log(json);
            setFeaturedMovies(json);
          })
            .catch((err) => {
              // console.log(`Error ${err}`)
            });
        }else
        {
            fetch("/db/movies?isFeatured=true&type=TVSeries").then((response) => {
            return response.json()
          }).then((json) => {
            setFeaturedMovies(json);
          })
            .catch((err) => {
              console.log(`Error ${err}`)
            });
        }
        }, [])
  return (
    <div>
        <div className='featuremovieheading'>
            { type==="Movie" && <Typography style={{ position: 'inline-block' }} variant="h6">
              Featured Movies
            </Typography>}
            { type==="TVSeries" && <Typography style={{ position: 'inline-block' }} variant="h6">
              Featured TV Shows
            </Typography>}
            <Button variant='filled' color='primary' onClick={clickHandler}>View All</Button>
          </div>

          <div className='featuredmovie' >
            {
              featuredmovies.map((featuremovie) => (
                <img className='featuredmovieimage' src={process.env.PUBLIC_URL + featuremovie.image} alt="img"></img>
              ))
            }
          </div>
    </div>
  )
}

export default Featuredmoviesection