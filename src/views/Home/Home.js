import { Box, Button, Card, Container, Drawer, Grid, Typography } from "@mui/material";
import React from "react";
import productimg from "../../assets/img/products/product1.png";
import { ReactComponent as Yellowfillstar } from "../../assets/img/icon/yellowfillstar.svg";
import { ReactComponent as CartIcon } from "../../assets/img/icon/cart.svg";
import Footer from "../footer/Footer";
import CloseIcon from '@mui/icons-material/Close';

const productData = [
  {
    id: "0",
    Rating: "4.5",
    imgdata: productimg,
    imgalt: "cloth",
    mainText: "Lorem ipsum",
    MainPrice: "30",
    SubPrice: "45",
  },
  {
    id: "1",
    Rating: "4.5",
    imgdata: productimg,
    imgalt: "cloth",
    mainText: "Lorem ipsum",
    MainPrice: "30",
    SubPrice: "45",
  },
  {
    id: "2",
    Rating: "4.5",
    imgdata: productimg,
    imgalt: "cloth",
    mainText: "Lorem ipsum",
    MainPrice: "30",
    SubPrice: "45",
  },
  {
    id: "3",
    Rating: "4.5",
    imgdata: productimg,
    imgalt: "cloth",
    mainText: "Lorem ipsum",
    MainPrice: "30",
    SubPrice: "45",
  },
];
const Home = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 550 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <Box>
            <Grid container spacing={2}>
                <Grid item lg={5}>
                    <Box><img src={productimg} width={"100%"} alt="" /></Box>
                </Grid>
                <Grid item lg={7}>
                    <Box sx={{display:"flex" , justifyContent:"end"}}><CloseIcon color="primary" /></Box>
                    <Typography sx={{mt:2}}>ADDED TO YOUR SHOPPING BAG</Typography>
                    <Typography sx={{mt:1}}>Lorem ipsum dolo</Typography>
                    <Typography>COLOR / SIZE</Typography>
                    <Box sx={{mt:3}}><Button variant="outlined" className="custom-button" sx={{padding:"7px 40px"}}>SEE SHOPPING BAG</Button></Box>
                </Grid>
            </Grid>
        </Box>
    </Box>
  );

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
        <Box>
          <Container>
            <Box>
              <Typography sx={{ fontSize: "5rem", color: " #b0b0b04f" }}>
                <span style={{ borderBottom: "1px solid #EFC80C" }}>
                  TRENDING
                </span>
              </Typography>
            </Box>
            <Box>
              <Grid container spacing={5}>
                {productData.map((cureEle, index) => {
                  const {
                    Rating,
                    imgdata,
                    imgalt,
                    mainText,
                    MainPrice,
                    SubPrice,
                  } = cureEle;
                  return (
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Card className="product-card">
                        <Grid container spacing={2}>
                          <Grid item lg={6} sm={6} xs={6}>
                            <Box className="img-box">
                              <img src={imgdata} alt={imgalt} />
                            </Box>
                          </Grid>
                          <Grid item lg={6} sm={6} xs={6}>
                            <Box className="card-contain">
                              <Box className="head-section">
                                <Typography className="rating-box">
                                  <Yellowfillstar />
                                 <span className="rating-text"> {Rating}</span>
                                </Typography>
                                <Typography className="rating-box">
                                  <Yellowfillstar />
                                </Typography>
                              </Box>
                              <Box className="card-details-box">
                                <Typography className="main-text">
                                  {mainText}
                                </Typography>
                                <Box className="price-box">
                                  <Typography className="main-price-text">
                                    {MainPrice}$
                                  </Typography>
                                  <Typography className="sub-rpice">
                                    DISCOUNT :<del> {SubPrice}$</del>
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    mt: 2,
                                  }}
                                >
                                  <Button
                                  onClick={toggleDrawer("right", true)}
                                    variant="contained"
                                    sx={{
                                      background: "#000000",
                                      color: "#ffffff",
                                    }}
                                    color="secondary"
                                  >
                                    <CartIcon height={18} width={18} />{" "}
                                    <span style={{ marginLeft: "7px" }}>
                                      {" "}
                                      Add To Bag
                                    </span>
                                  </Button>
                                </Box>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Container>
        </Box>
      </section>
      <section style={{ marginTop: "50px" }}>
        <Footer />
      </section>
    <Box>  
        <React.Fragment key={"right"}>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          PaperProps={{
            sx: {
              color: "#ffffff",
              background: "#000000",
              padding: "50px",
            },
          }}
        >
          {list("right")}
        </Drawer>
      </React.Fragment></Box>
      </Box>
  );
};

export default Home;
