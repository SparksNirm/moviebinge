import { Grid } from '@mui/material';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import {useNavigate} from "react-router-dom";
const Header = () => {

    const location=useLocation();
    //const history=useNavigate();
    
    const history=useNavigate();
 
    const [username,setUsername]=useState("");

    const clickHandler=()=>{
       
        if(localStorage.getItem("username"))
        {
            localStorage.getItem("username")
            setUsername("")
            console.log("sdfsdfsf")
            history("/logout")
        }

    }
    useEffect(()=>{

        if(localStorage.getItem("username"))
        {
            setUsername(localStorage.getItem("username"))
        }
    })
    const pages=[
        {
            id:2,
            path:"/login",
            name:"Login"
        },
        {
            id:3,
            path:"/signup",
            name:"Sign Up"
        },
        

]
  return (
    <header>
        <nav className='navbar'>
            <Grid container>
                <Grid item md={2}>
                    <Link to="/" className="site-title">Movie Binge</Link>
                </Grid>
                <Grid style={{display:"flex"}} item md={8}>
                    <ul>
                        <li className={location.pathname==="/movies" ? 'active':null}>
                            <a href="/movie"> All movies &amp; TV Shows</a>
                        </li>
                    </ul>
                </Grid>
                <Grid item md={2} style={{justifyContent:"flex-end",display:"flex"}}>
                {username==='' && <ul >
                {
                    pages.map((page)=>(
                        <li key={page.id} className={location.pathname===page.path ? 'active':null}>
                            <a href={page.path}>{page.name}</a>
                        </li>
                    ))
                }
            </ul>}
            {username!=='' && <ul>
                    <li className='welcomemsg'>
                        Hello, {username}
                    </li>
                    <li>
                        <a href="/logout" onClick={clickHandler}>Logout</a>    
                    </li>                    
                </ul>}
                </Grid>
            </Grid>
            {/* <Link to="/" className="site-title">Movie Binge</Link>
            {username==='' && <ul >
                {
                    pages.map((page)=>(
                        <li key={page.id} className={location.pathname===page.path ? 'active':null}>
                            <a href={page.path}>{page.name}</a>
                        </li>
                    ))
                }
            </ul>}
            {username!=='' && <ul>
                    <li className='welcomemsg'>
                        Hello, {username}
                    </li>
                    <li>
                        <a href="/logout" onClick={clickHandler}>Logout</a>    
                    </li>                    
                </ul>} */}
        </nav>
    </header>
  )
}

export default Header