import { Box, Container, Grid, InputBase, TextField, alpha } from '@mui/material'
import React from 'react'
import smile from '../../assets/img/icon/smile.svg'
import CustomInput from '../CustomInput'
import styled from 'styled-components';

  
const SearchBox = () => {
  return (
    <Container>
    <Grid container>
        <Grid item lg={6}>
            <Box><img src={smile} alt='' className='smile-img' /></Box>
        </Grid>
        <Grid item >
            <CustomInput type='search' color="secondary" variant="outlined" />
        </Grid>
    </Grid>
    </Container>
  )
}

export default SearchBox
