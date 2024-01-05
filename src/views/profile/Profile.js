import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import SearchBox from '../../layout/searchcontainer/SearchBox'
import { Link, NavLink } from 'react-router-dom'
import { ShopData } from '../Shop/Shop'
import { ReactComponent as CloseIcon } from "../../assets/img/icon/closeicon.svg";
import ProfileMain from './ProfileMain'

const Profile = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabChange = (tabNumber) => {
      setActiveTab(tabNumber);
    };
  return (
<Box>
    <SearchBox/>
    <Container>
    <Box>
          <Box sx={{ display: "flex", alignItems: "center" }} className="tab-section">
            <Typography
              onClick={() => handleTabChange(1)}
              style={{ marginRight: "50px" }}
            >
              <NavLink>
              PURCHASES
              </NavLink>
            </Typography>
            <Typography onClick={() => handleTabChange(2)}><NavLink>PROFILE</NavLink></Typography>
          </Box>
          <Box>
            {activeTab === 1 && (
              <Box sx={{mt:5}}>

              <Grid container spacing={2}>
                {ShopData.filter(
                  (item) => item.id === "0" || item.id === "1"
                ).map((cureEle, index) => {
                  const { ShopImg, ImgAlt, MainText, Price } = cureEle;
                  return (
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                      <Card sx={{ borderRadius: "0px" }}>
                        <Box
                          sx={{
                            height: "350px",
                            width: "min(100% - 0px, 100%)",
                            marginInline: "auto",
                          }}
                        >
                          <CardMedia
                            component="img"
                            height="100%"
                            image={ShopImg}
                            alt={ImgAlt}
                          />
                        </Box>
                        <CardContent
                          sx={{
                            background: "#191919",
                            color: "#D9D9D9",
                            paddingInline: "0px",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems:"center"
                            }}
                          >
                            <Typography variant="subtitle1" component="div">
                              <Link>{MainText}</Link>
                            </Typography>
                            <CloseIcon />
                          </Box>
                          <Typography variant="body2">{Price}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
              </Box>
            )}
            {activeTab === 2 && (
            <ProfileMain/>
            )}
          </Box>
        </Box>
    </Container>
</Box>
  )
}

export default Profile
