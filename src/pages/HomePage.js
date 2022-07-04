import React, { useContext } from 'react'
import Grid from '@mui/material/Grid';
import Digitalstorecontext from '../context/Digitalstorecontext';
import Carusel from '../component/Carusel';
import Featuredmoviesection from '../component/Featuredmoviesection';
import ContentSection from '../component/ContentSection';

const HomePage = () => {
  const { movies, setMovies } = useContext(Digitalstorecontext);
  return (
    <div>
      <Grid container>
        <Grid item md={12}>
              <Carusel/>
        </Grid>
        <Grid item md={12}>
            <Featuredmoviesection type={"Movie"}/>
            <Featuredmoviesection type={"TVSeries"}/>
        </Grid>

        <Grid item md={12}>
          <ContentSection/>
        </Grid>
      </Grid>




    </div>
  )
}

export default HomePage