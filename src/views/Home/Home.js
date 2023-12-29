import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import productimg from "../../assets/img/products/product1.png"
const Home = () => {
  return (
    <Box>
      <Box className="banner-section">
        {/* <img src={banner} alt='' className='banner-img-1' /> */}
        {/* <img src={} alt='' /> */}
      </Box>
      <section>
        <Box className="passe-banner-section">
          <Box className="banner-box">
            Lorem ipsum dolor sit amet consectetur. Ipsum erat velit iaculis
            elementum lorem. Luctus natoque purus pellentesque proin id Gravida
            vel vel pharetra tortor.
          </Box>
        </Box>
      </section>
      <section>
        <Box >
        <Container>
          <Box>
            <Typography>TRENDING</Typography>
          </Box>
          <Box>
            <Grid container spacing={2}>
                <Grid item lg={6} md={6} sm={6} xs={6}> 
                  <Card>
                    <Grid container spacing={2}>
                      <Grid item lg={6} sm={6} xs={6}>
                          <Box>
                            <img src={productimg} alt="" />
                          </Box>
                      </Grid>
                      <Grid  item lg={6} sm={6} xs={6}>
                        <Box>
                          <Box className="head-section">
                            <Typography>4.5</Typography>
                            <Typography></Typography>
                          </Box>
                          <Box>
                            <Typography>Lorem ipsum</Typography>
                            <Box>
                              
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
            </Grid>
          </Box>
        </Container>
        </Box>
      </section>
    </Box>
  );
};

export default Home;
