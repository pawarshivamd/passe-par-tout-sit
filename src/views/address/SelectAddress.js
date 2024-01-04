import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import ContinueProFooter from '../../layout/ContinueProFooter';
import SearchBox from '../../layout/searchcontainer/SearchBox';

const SelectAddress = () => {
  return (
    <Box>
      <SearchBox />
      <Container>
        <Grid container spacing={2} lg={6}>
          <Grid item lg={12}>
            <Box className="select-address-head-section">
              <Typography className="main-text">
                Select Delivery Address
              </Typography>
              <Typography className="add-addres-text" component={Link}>
                <AddIcon /> Add New Address
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={12} >
            <Box className="select-address-box">
                <Typography className='main-title-box'> Rami adolf H
                <span className='select-opption-text'>Home</span>
                </Typography>
              <Typography className='select-address-here'>
                <span>Lebanon, Beirut</span>
                <br />
                <span>street 4 Hazmieh building 6 floor</span>
                <br />
                <sapn>+961 70 000 000, 70 000 000</sapn>
                <br />
              </Typography>
              <Box sx={{ padding:"10px"}}>
                <Link >Edit</Link>
              </Box>
              <Box sx={{padding:"10px"}}>
              <Button variant="outlined" className="custom-button">
                Deliver to this Address
              </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={12}>
            <Box className="select-address-box">
                <Typography className='main-title-box'> Rami adolf H
                <span className='select-opption-text'>Home</span>
                </Typography>
              <Typography className='select-address-here'>
                <span>Lebanon, Beirut</span>
                <br />
                <span>street 4 Hazmieh building 6 floor</span>
                <br />
                <sapn>+961 70 000 000, 70 000 000</sapn>
                <br />
              </Typography>
              <Box sx={{ padding:"10px"}}>
                <Link >Edit</Link>
              </Box>
              <Box sx={{padding:"10px"}}>
              <Button variant="outlined" className="custom-button">
                Deliver to this Address
              </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <ContinueProFooter BtnText="Continue" />
    </Box>
  );
}

export default SelectAddress
