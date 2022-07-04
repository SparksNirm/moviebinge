import { Typography } from '@mui/material'
import React, {  useEffect } from 'react'

const Logout = () => {

    useEffect(()=>{
        if(localStorage.getItem("username"))
        {
            localStorage.removeItem("username")
        }
    })
  return (
    <div className='logoutmsg'>
        <Typography variant="h4" align='center' style={{color:"green",backgroundColor:"lightgreen",borderRadius:50,height:100,width:600,paddingTop:50}}>
            You have been successfully logged out.
        </Typography>

    </div>
  )
}

export default Logout