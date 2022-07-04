import './css/App.css';
import './index.css'
import {
     Routes, Route} from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import  {createTheme, ThemeProvider} from '@mui/material/styles';
import Movies from './pages/Movies';
import { useState } from 'react';
import digitalContext from './context/Digitalstorecontext';
import MovieDetails from './pages/MovieDetails';
import Logout from './pages/Logout';
import { brown, cyan, grey } from '@mui/material/colors';

const theme=createTheme({
  typography:{
    fontFamily: "Titillium Web"
  },
  palette:{
    primary:grey,
    secondary:cyan
  }
})


function App() {
  const [movies,setMovies]=useState([]);
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <>
    <digitalContext.Provider value={{movies,setMovies, isLoggedIn,setIsLoggedIn}} >
    <ThemeProvider theme={theme}>
    <Header/>
    <div className="App">
    <Routes>
        <Route path='/' element={<HomePage/>}>
        </Route>
        <Route path='/login'  element={<LoginPage/>}>
        </Route>
        <Route path='/signup' element={<SignUpPage/>}>
        </Route>
        <Route path='/movie' element={<Movies/>}>
        </Route>
        <Route path='/movie/:id' element={<MovieDetails/>}>
        </Route>
        <Route path='/logout' element={<Logout/>}>
        </Route>
    </Routes>
    </div>
    <Footer/>
    </ThemeProvider>
    </digitalContext.Provider>
    </>
  );
 
}

export default App;
