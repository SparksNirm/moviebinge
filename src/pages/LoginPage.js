import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";


const LoginPage = () => {

    const history=useNavigate();

    //states Declaration
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [usernameError,setUsernameError]=useState('');
    const [passwordError,setPasswordError]=useState('');


    //function definitions

    //LoginInButtonclickHandler

    const submitHandler=(evt)=>{
        evt.preventDefault();
        setUsernameError('');
        setPasswordError('');
        if(username==='')
        {
            setUsernameError('Username is required')
        }
        if(password==='')
        {
            setPasswordError('Password is required')
        }
        if(username!=='' & password!=='')
        {
            fetch(`/users?username=${username}`)
        .then((response)=>{
           return response.json();
           
      }).then((json)=>{
        console.log(json)
            if(json[0].username===username && json[0].password===password)
            {
                localStorage.setItem("username",`${username}`);
                history("/")
            }
      }).catch((err)=>{
        console.log(`Error:${err}`)
      })
        }
    }


    return (
        <div>
            <Grid container className='login'>
                <Grid item md={4}>

                </Grid>
                <Grid item md={4}>
                    <form className='loginform' noValidate autoComplete='off' onSubmit={submitHandler}>
                        <Typography variant='h6' fontWeight='bold' align='center' >Login Here</Typography>
                        <TextField
                            style={{marginTop:20,marginBottom:20}}
                            variant="outlined"                            
                            label="User Name"
                            color='secondary'
                            value={username}
                            onChange={(e)=>{setUsername(e.target.value)}}
                            fullWidth
                            required>
                        </TextField>
                        <div className='error'>{usernameError}</div>
                        <TextField
                            style={{marginTop:20,marginBottom:20}}
                            variant="outlined"
                            label="Password"
                            color='secondary'
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            type="password"
                            fullWidth
                            required>
                        </TextField>
                        <div className='error'>{passwordError}</div>
                        <Typography 
                            variant="body2"
                            style={{marginBottom:20}}>
                            Don't have an account? Register <a className='link' href="/signup">here</a>
                        </Typography>
                        <Button 
                            variant="contained"
                            type='submit'
                        >Sign In</Button>
                    </form>
                </Grid>
                <Grid item md={4}>

                </Grid>
            </Grid>
        </div>
    )
}

export default LoginPage