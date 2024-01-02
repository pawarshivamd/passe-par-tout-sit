import { Box, Container, Grid, InputBase, TextField, alpha } from '@mui/material'
import React from 'react'
import smile from '../../assets/img/icon/smile.svg'
import CustomInput from '../CustomInput'
const SearchBox = () => {
  return (
    <Container sx={{mb:5}}>
    <Grid container spacing={2} alignItems="center" justifyContent="space-between">
        <Grid item lg={6}>
            <Box sx={{display:"flex",flexDirection:"column"}} className="smile-box">
            <img src={smile} alt='' width="50px" className='smile-img' />
            </Box>
        </Grid>
        <Grid item lg={3}>
            <CustomInput type='search' placeholder="SEARCH" color="secondary" variant="outlined" className="search-filed" />
        </Grid>
    </Grid>
    </Container>
  )
}

export default SearchBox
