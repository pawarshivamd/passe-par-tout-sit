import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as CartIcon } from "../../assets/img/icon/cart.svg";
import { ReactComponent as Yellowfillstar } from "../../assets/img/icon/yellowfillstar.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import img1 from "../../assets/img/products/product1.png";
import img2 from "../../assets/img/products/product1.png";
import img3 from "../../assets/img/products/product1.png";
import img4 from "../../assets/img/products/product1.png";
import img5 from "../../assets/img/products/product1.png";
import img6 from "../../assets/img/products/product1.png";
import img7 from "../../assets/img/products/product1.png";
import img8 from "../../assets/img/products/product1.png";
import img9 from "../../assets/img/products/product1.png";
import CloseIcon from "@mui/icons-material/Close";
import productimg from "../../assets/img/products/product1.png";
import ReactImageMagnify from "react-image-magnify";
import { productData } from "../Home/Home";
import Footer from "../footer/Footer";
import SearchBox from "../../layout/searchcontainer/SearchBox";
import CustomDrawer from "../../layout/CustomDrawer";
const ProductDetails = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const slides = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const [activeimg, setActiveimg] = useState(img1);
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
      <SearchBox />
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box className="product-zoom-left-setion">
              <Grid container spacing={1}>
                <Grid
                  item
                  lg={10}
                  md={12}
                  sm={12}
                  order={{ xs: 1, sm: 1, lg: 1, md: 1 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      height: "100%",
                      justifyContent: "space-around",
                    }}
                  >
                    <div className="slider-section">
                      <ReactImageMagnify
                        style={{ zIndex: "9" }}
                        {...{
                          smallImage: {
                            alt: "",
                            isFluidWidth: true,
                            src: activeimg,
                            width: 500, // set the desired width
                            height: 600,
                          },
                          largeImage: {
                            src: activeimg,
                            width: 1200,
                            height: 1200,
                          },
                        }}
                      />
                    </div>
                    <Box className="star-box">
                      {" "}
                      <Yellowfillstar />{" "}
                    </Box>
                  </Box>
                </Grid>

                <Grid
                  item
                  lg={2}
                  md={12}
                  sm={12}
                  xs={12}
                  order={{ xs: 2, sm: 2, lg: 2, md: 2 }}
                  className="ss"
                >
                  <Swiper
                    direction={
                      window.innerWidth <= 991 ? "horizontal" : "vertical"
                    }
                    slidesPerView={window.innerWidth <= 991 ? 3 : 6}
                    spaceBetween={10}
                    mousewheel={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={{
                      nextEl: ".swiper-button-next next",
                      prevEl: ".swiper-button-prev prev",
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    {slides.map((slide, i) => (
                      <SwiperSlide key={i} onClick={() => setActiveimg(slide)}>
                        <img src={slide} alt="" />
                      </SwiperSlide>
                    ))}
                    <div className="swiper-button-next next"></div>
                    <div className="swiper-button-prev prev"></div>
                  </Swiper>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* col-6 right section for text */}
          <Grid item lg={6}>
            <Box sx={{ padding: "0 20px" }}>
              <Typography sx={{ fontWeight: "400", fontSize: "22px" }}>
                Lorem ipsum dolor sit
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>00.000</Typography>
              <Typography sx={{ mt: 2 }}>
                Lorem ipsum dolor sit amet consectetur. Aenean eget nec sed
                pharetra quis diam lobortis placerat. Eget cras felis nec{" "}
              </Typography>
              <Box>
                <Typography
                  sx={{
                    padding: "20px 0px",
                    borderTop: "1px solid #EFC80C",
                    borderBottom: "1px solid #EFC80C",
                    margin: "20px 0px",
                  }}
                >
                  <span>S-</span>
                  <span>M-</span>
                  <span>L-</span>
                  <span>XL-</span>
                  <span>XXL</span>
                </Typography>
              </Box>
              <Button variant="outlined">
                <span style={{ marginRight: "7px" }}>ADD TO BAG </span>{" "}
                <CartIcon width={18} height={18} />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <section style={{ margin: "50px 0" }}>
        <Container>
          <Grid container spacing={5}>
            {productData.map((cureEle, index) => {
              const { Rating, imgdata, imgalt, mainText, MainPrice, SubPrice } =
                cureEle;
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
        </Container>
      </section>
      <section>
        <Footer />
      </section>
      <CustomDrawer
        onClose={() => setIsDrawerVisible(false)}
        state={isDrawerVisible}
        children={list("right")}
      />
    </Box>
  );
};
export default ProductDetails;
