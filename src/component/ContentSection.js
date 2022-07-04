import React from 'react'
import Grid from '@mui/material/Grid';

const ContentSection = () => {
  return (
        <div className='contentsection'>
            <Grid container>
              <Grid item md={4}>
                <div className="contenttext">
                  <h2>
                    <span style={{ color: 'red', fontStyle: "italic" }}>Exciting Offer!!! </span> <br /> <span style={{ color: 'yellow' }}>Just $2.99 <br /> Enjoy and Have Fun </span></h2>
                </div>
              </Grid>
              <Grid item md={4}>
                <img src={process.env.PUBLIC_URL + "./movienight.jpg"} width="500"></img>
              </Grid>
              <Grid item md={4}>
                <div className="contenttext">


                  <h2><span style={{ color: 'red', fontFamily: 'Roboco' }}>Offer Valid Till </span> <br /> <span style={{ color: 'yellow' }}>30th September</span> </h2>
                </div>
              </Grid>
            </Grid>
          </div>
  )
}

export default ContentSection