import React, { useContext, useEffect, useRef, useState } from 'react'
import digitalstoreContext from '../context/Digitalstorecontext'
const delay = 3500;

const Carusel = () => {

    const [caruselMovies,setCaruselMovies]=useState([]);
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(()=>{
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === caruselMovies.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
          resetTimeout();
        };
    },[index])
    useEffect(()=>{
        fetch("movies?isCarusel=true").then((response) => {
            return response.json()
          }).then((json) => {
            setCaruselMovies(json);
          })
            .catch((err) => {
            //   console.log(`Error ${err}`)
            });
      
    })
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
  return (
    <div>
        <div className="slideshow">
            <div
              className="slideshowSlider"
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {caruselMovies.map((movie, index) => (<div className='slide' key={index} >
                <img className='image' src={process.env.PUBLIC_URL + movie.image} alt="img">
                </img>
              </div>))}

            </div>
          </div>
          <div className="slideshowDots">
            {caruselMovies.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
    </div>
  )
}

export default Carusel