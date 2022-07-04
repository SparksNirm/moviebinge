import { Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        
        <span><Typography variant='body2' fontSize='medium'><a  href="/"> &copy; MovieBinge.com </a>  </Typography></span> | 
        <span><Typography fontSize='medium' variant="body2"> <a  href="/signup"> Sign Up </a></Typography></span> |
        <span><Typography fontSize='medium' variant="body2"> <a  href="/login"> Log In </a></Typography></span> 
    </div>
  )
}

export default Footer