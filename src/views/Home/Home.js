import {
  Box,
  Button,
  Card,
  Container,
  Drawer,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import productimg from "../../assets/img/products/product1.png";
import productimg2 from "../../assets/img/products/product2.png";
import productimg3 from "../../assets/img/products/product3.png";
import productimg4 from "../../assets/img/products/product4.png";
import { ReactComponent as StarIcon } from "../../assets/img/icon/yellowfillstar.svg";
import { ReactComponent as CartIcon } from "../../assets/img/icon/cart.svg";
import Footer from "../footer/Footer";
import CloseIcon from "@mui/icons-material/Close";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import CustomDrawer from "../../layout/CustomDrawer";
import { ReactComponent as RightMoveArrow } from "../../assets/img/icon/reightmovearrow.svg";
import { ReactComponent as LeftMoveArrow } from "../../assets/img/icon/leftmovearrow.svg";

export const productData = [
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
    imgdata: productimg2,
    imgalt: "cloth",
    mainText: "Lorem ipsum",
    MainPrice: "30",
    SubPrice: "45",
  },
  {
    id: "2",
    Rating: "4.5",
    imgdata: productimg3,
    imgalt: "cloth",
    mainText: "Lorem ipsum",
    MainPrice: "30",
    SubPrice: "45",
  },
  {
    id: "3",
    Rating: "4.5",
    imgdata: productimg4,
    imgalt: "cloth",
    mainText: "Lorem ipsum",
    MainPrice: "30",
    SubPrice: "45",
  },
];
const Home = () => {
  const [isDrawerVisible, setIsDrawerVisible] = React.useState(false);

  const list = (anchor) => (
    <Box
      sx={{ width: 550 }}
      role="presentation"
      onClick={() => setIsDrawerVisible(false)}
      onKeyDown={() => setIsDrawerVisible(false)}
    >
      <Box>
        <Grid container spacing={2}>
          <Grid item lg={5}>
            <Box>
              <img src={productimg} width={"100%"} alt="" />
            </Box>
          </Grid>
          <Grid item lg={7}>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <CloseIcon color="primary" />
            </Box>
            <Typography sx={{ mt: 2 }}>ADDED TO YOUR SHOPPING BAG</Typography>
            <Typography sx={{ mt: 1 }}>Lorem ipsum dolo</Typography>
            <Typography>COLOR / SIZE</Typography>
            <Box sx={{ mt: 3 }}>
              <Button
                variant="outlined"
                className="custom-button"
                sx={{ padding: "7px 40px" }}
              >
                SEE SHOPPING BAG
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Box className="banner-section">
        <Box className="banner-box">
          <Box>
            <Logo className="logo-banner" />
          </Box>
          <Box>
            <Typography sx={{ color: "#fff" }}>A vous, pour tout</Typography>
          </Box>
        </Box>
      </Box>
      <section>
        <Box className="passe-banner-section">
          <Box className="banner-box">
            Lorem ipsum dolor sit amet consectetur. Ipsum erat velit iaculis
            elementum lorem. Luctus natoque purus pellentesque proin id Gravida
            vel vel pharetra tortor.
          </Box>
          <Box className="right-box-section">
            <Typography sx={{ textAlign: "center" }}> lorem is </Typography>
            <Box sx={{ textAlign: "center" }}>
              <RightMoveArrow className="arrow-icon" />
            </Box>
          </Box>
          <Box className="left-box-section">
            <Box sx={{ textAlign: "center" }}>
              <LeftMoveArrow className="arrow-icon" />
            </Box>
            <Typography sx={{ textAlign: "center" }}> lorem is </Typography>
          </Box>
        </Box>
      </section>
      <section>
        <Box>
          <Container>
            <Box>
              <Typography className="trending-head-title">
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
                          <Grid item lg={6} sm={6} xs={5}>
                            <Box className="img-box">
                              <img src={imgdata} alt={imgalt} />
                            </Box>
                          </Grid>
                          <Grid item lg={6} sm={6} xs={7}>
                            <Box className="card-contain">
                              <Box className="head-section">
                                <Typography className="rating-box">
                                  <StarIcon />
                                  <span className="rating-text"> {Rating}</span>
                                </Typography>
                                <Typography className="rating-box rating-star">
                                  <StarIcon />
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
                                    onClick={() =>
                                      setIsDrawerVisible(!isDrawerVisible)
                                    }
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
        <CustomDrawer
          state={isDrawerVisible}
          onClose={() => setIsDrawerVisible(false)}
          children={list("right")}
        />
      </Box>
    </Box>
  );
};

export default Home;
