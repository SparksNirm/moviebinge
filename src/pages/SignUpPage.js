import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";
const SignUpPage = () => {

    const history = useNavigate();
    //states declaration
     const [user,setUser]=useState({
        firstname:"",
        lastname:"",
        email:"",
        mobileNumber:"",
        username:"",
        password:"",
     });

    //onTextFieldChange Handler
     const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser(users => ({...users, [name]: value}))
      }

    //SignUp Button Click
    const submitHandler=(evt)=>{
        evt.preventDefault();
        fetch("/users",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(user)
        }
        )
        .then((response)=>{
            console.log(response)
           if(response.status===201)
           {
            history("/login")
           }
      }).catch((err)=>{
        console.log(`Error:${err}`)
      })
    }
    return (
        <div>
            <Grid container>
                <Grid item md={4}>

                </Grid>
                <Grid item md={4}>
                    <form noValidate autoComplete='off' onSubmit={submitHandler}>
                        <Typography variant='h6' align='center' fontWeight='bold' fontStyle=''>Sign Up Here</Typography>
                        <TextField
                            style={{ marginTop: 20, marginBottom: 20 }}
                            variant="outlined"
                            label="First Name"
                            name="firstname"
                            color='secondary'
                            value={user.firstname}
                            onChange={handleChange}
                            fullWidth
                            required>
                        </TextField>
                        <TextField
                            style={{ marginTop: 20, marginBottom: 20 }}
                            variant="outlined"
                            label="Last Name"
                            name="lastname"
                            color='secondary'
                            value={user.lastname || ''}
                            onChange={handleChange}
                            fullWidth
                            required>
                        </TextField>
                        <TextField
                            style={{ marginTop: 20, marginBottom: 20 }}
                            variant="outlined"
                            label="Email"
                            color='secondary'
                            name="email"
                            value={user.email || ''}
                            onChange={handleChange}
                            fullWidth
                            required>
                        </TextField>
                        <TextField
                            style={{ marginTop: 20, marginBottom: 20 }}
                            variant="outlined"
                            label="Mobile Number"
                            name="mobileNumber"
                            color='secondary'
                            value={user.mobileNumber || ''}
                            onChange={handleChange}
                            fullWidth
                            required>
                        </TextField>
                        <TextField
                            style={{ marginTop: 20, marginBottom: 20 }}
                            variant="outlined"
                            label="User Name"
                            name="username"
                            color='secondary'
                            value={user.username || ''}
                            onChange={handleChange}
                            fullWidth
                            required>
                        </TextField>
                        <TextField
                            style={{ marginTop: 20, marginBottom: 20 }}
                            variant="outlined"
                            label="Password"
                            name="password"
                            color='secondary'
                            value={user.password || ''}
                            onChange={handleChange}
                            fullWidth
                            required>
                        </TextField>
                        <Button
                            variant="contained"
                            type='submit'
                        >Sign Up</Button>
                        <Typography 
                            variant="body2"                        >
                            Already have an Account? <a  className='link' href="/login">Sign In</a>
                        </Typography>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}

export default SignUpPage