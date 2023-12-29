import { Box, Button, Container, Grid, TextField } from '@mui/material'
import React from 'react'
import yellowfillstar from "../../assets/img/icon/yellowfillstar.svg"
// import Navbar from '../Navbar/Navbar'
import { useTheme } from '@mui/material/styles';
import CustomInput from '../../layout/CustomInput';

const Login = () => {
  return (
    <Box>
    <Container>
      
                <Grid container lg={9} spacing={2}>
                    <Grid item lg={6}>
                        <Box><img src={yellowfillstar} alt='star' /> LOG IN TO YOUR ACCOUNT</Box>
                        <Box>
                            <Grid container lg={6} spacing={2}>
                                <Grid item lg={12} >
                                    <CustomInput
                                            id="Email"                     
                                        name="Email"
                                        label="Email"
                                        color="secondary"
                                     />
                                </Grid>
                                <Grid item lg={12} >
                                    <CustomInput
                                        id="Password"                     
                                        name="Password"
                                        label="Password"
                                        color="secondary"
                                     />
                                </Grid>
                                <Grid item lg={12} >
                                    <Button variant="outlined"> Login</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item llg={4}>
                        <Box><img src={yellowfillstar} alt='star' /> LOG IN TO YOUR ACCOUNT</Box>
                        <Box sx={{display:"flex",justifyContent:"center",mt:2}}>
                            <Button variant='outlined'>REGISTER</Button>
                        </Box>
                    </Grid>
                </Grid>
  
    </Container>
    </Box>
  )
}

export default Login
