import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ReactComponent as Yellowfillstar } from "../../assets/img/icon/yellowfillstar.svg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import ChangeEmial from './ChangeEmial';
import ChangePassword from './ChangePassword';
import EditAddress from './EditAddress';
const ProfileMain = () => {
  const [activeLink, setActiveLink] = useState(null);
  // const [showcontainer, setshowconatiner] = useState(null);
  const handleClick = (link) => {
    setActiveLink(link);
    // setshowconatiner(true);
  };
  return (
<Box>
    <Container>
      <Box sx={{mt:2}}>
        <Grid container spacing={2}>
          <Grid item lg={4}>
            <Typography>My Account</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{mt:1}}>
          <Grid item lg={4} xs={8}>
          <Box sx={{display:"flex"}}>
          <Yellowfillstar />
          <Box sx={{ml:2}}>
          <Typography><Link onClick={() => handleClick('addresses')}>ADDRESSES</Link></Typography>
          </Box>
          </Box>
          </Grid>
          <Grid item lg={1} xs={1}>
          <Link onClick={() => handleClick('addresses')}><ArrowForwardIosIcon sx={{width:"15px"}} /></Link>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{mt:1}}>
          <Grid item lg={4} xs={8}>
          <Box sx={{display:"flex"}}>
          <Yellowfillstar />
          <Box sx={{ml:2}}>
          <Typography><Link onClick={() => handleClick('email')}>EMAIL</Link></Typography>
          <Typography variant='body2'>loremipsum@gmail.com</Typography>
          </Box>
          </Box>
          </Grid>
          <Grid item lg={1} xs={1}>
          <Link onClick={() => handleClick('email')}><ArrowForwardIosIcon sx={{width:"15px"}} /></Link>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{mt:1}}>
          <Grid item lg={4} xs={8}>
          <Box sx={{display:"flex"}}>
          <Yellowfillstar />
          <Box sx={{ml:2}}>
          <Typography><Link >PHONE</Link></Typography>
          <Typography variant='body2'>+961 00 000 000</Typography>
          </Box>
          </Box>
          </Grid>
          <Grid item lg={1} xs={1}>
          <Link><ArrowForwardIosIcon sx={{width:"15px"}} /></Link>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{mt:1}}>
          <Grid item lg={4} xs={8}>
          <Box sx={{display:"flex"}}>
          <Yellowfillstar />
          <Box sx={{ml:2}}>
          <Typography><Link onClick={() => handleClick('changePassword')}>CHANGE PASSWORD</Link></Typography>
          <Typography variant='body2'>...........</Typography>
          </Box>
          </Box>
          </Grid>
          <Grid item lg={1} xs={1}>
          <Link onClick={() => handleClick('changePassword')}><ArrowForwardIosIcon sx={{width:"15px"}} /></Link>
          </Grid>
        </Grid>
      {activeLink === 'addresses' && <EditAddress />}
      {activeLink === 'email' && <ChangeEmial />}
      {/* {activeLink === 'phone' && } */}
      {activeLink === 'changePassword' && <ChangePassword />}
      </Box>
    </Container>
</Box>
  )
}

export default ProfileMain
