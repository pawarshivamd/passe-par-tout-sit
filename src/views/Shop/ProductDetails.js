import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ReactComponent as CartIcon } from "../../assets/img/icon/cart.svg";
import { ReactComponent as CartIconStroke } from "../../assets/img/icon/cartstroke.svg";
import { ReactComponent as StarIcon } from "../../assets/img/icon/yellowfillstar.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CloseIcon from "@mui/icons-material/Close";
import productimg from "../../assets/img/products/product1.png";
import ReactImageMagnify from "react-image-magnify";
import { productData } from "../Home/Home";
import Footer from "../footer/Footer";
import SearchBox from "../../layout/searchcontainer/SearchBox";
import CustomDrawer from "../../layout/CustomDrawer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../utils/Loader";

// actions
import { fetchProductDetails } from "../../Redux/Thunks/productDetailsThunk";
const ProductDetails = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const {
    product,
    productSize,
    productColor,
    productImage,
    relatedProducts,
    isLoading,
    error,
  } = useSelector((state) => state.product);

  console.log("Product", product);
  console.log("productSize", productSize);
  console.log("productColor", productColor);
  console.log("productImage", productImage);
  console.log("relatedProducts", relatedProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductDetails());
  }, []);

  useEffect(() => {
    if (product && product.main_image) {
      setActiveimg(product.main_image);
    }
  }, [product]);

  const [activeimg, setActiveimg] = useState("");
  const list = (anchor) => (
    <Box
      className="drawer-open-section"
      role="presentation"
      onClick={() => setIsDrawerVisible(false)}
      onKeyDown={() => setIsDrawerVisible(false)}
    >
      <Box>
        <Grid container spacing={2}>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Box>
              <img
                src={productimg}
                width={"100%"}
                alt=""
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Grid>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <CloseIcon color="primary" sx={{ cursor: "pointer" }} />
            </Box>
            <Typography sx={{ mt: 2 }}>ADDED TO YOUR SHOPPING BAG</Typography>
            <Typography sx={{ mt: 1 }}>Lorem ipsum dolo</Typography>
            <Typography>COLOR / SIZE</Typography>
          </Grid>
          <Box sx={{ mt: 3, width: "80%" }}>
            <Button
              component={Link}
              to="/shopping-bag"
              variant="outlined"
              className="custom-button"
              sx={{ padding: "7px 20px", width: "100%" }}
            >
              SEE SHOPPING BAG
            </Button>
          </Box>
        </Grid>
      </Box>
    </Box>
  );

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Box sx={{ mt: 20 }}>
      <SearchBox />
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Box className="product-zoom-left-setion">
              <Grid container spacing={1}>
                <Grid
                  item
                  lg={10}
                  md={10}
                  sm={10}
                  order={{ xs: 1, sm: 1, lg: 1, md: 1 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      height: "100%",
                      justifyContent: "space-around",
                      width: "95%",
                    }}
                  >
                    <div className="slider-section">
                      {/* <ReactImageMagnify
                      className="zoom-img-box"
                        style={{ zIndex: "9" }}
                        {...{
                          smallImage: {
                            alt: "",
                            isFluidWidth: true,
                            src: activeimg,
                            width: 500, 
                            height: 600,
                          },
                          largeImage: {
                            src: activeimg,
                            width: 1200,
                            height: 1200,
                          },
                        }}
                      /> */}
                      <img src={activeimg} alt={activeimg} />
                    </div>
                    <Box className="star-box">
                      <StarIcon />
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  lg={2}
                  md={2}
                  sm={2}
                  xs={12}
                  order={{ xs: 2, sm: 2, lg: 2, md: 2 }}
                  className="ss"
                >
                  <Swiper
                    direction={
                      window.innerWidth <= 600 ? "horizontal" : "vertical"
                    }
                    slidesPerView={window.innerWidth <= 767 ? 4 : 6}
                    spaceBetween={10}
                    mousewheel={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={{
                      clickable: true,
                      nextEl: "swiper-button-next  next",
                      prevEl: "swiper-button-prev prev",
                    }}
                    modules={[Navigation]}
                  >
                    {productImage?.map((slide, i) => (
                      <SwiperSlide
                        key={i}
                        onClick={() => setActiveimg(slide?.other_images)}
                      >
                        <img
                          src={slide?.other_images}
                          alt={slide?.other_images}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* col-6 right section for text */}
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Box
              sx={{ padding: "0 20px" }}
              className="product-details-right-section"
            >
              <Typography sx={{ fontWeight: "400", fontSize: "22px" }}>
                {product && product?.product_name}
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                {product && parseInt(product?.product_price) + "$"}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                {product && product?.description}
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
                  {productSize &&
                    productSize.length > 0 &&
                    productSize.map((currentElem, index) => (
                      <span className="size-text">
                        <span className="text-color">
                          {currentElem?.product_size}
                          {index !== productSize.length - 1 && " -"}
                        </span>
                      </span>
                    ))}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
                {/* {productColor &&
                  productColor.length > 0 &&
                  productColor.map((customElements, index) => (
                    <Box sx={{ mr: 2 }} className="white-sroke-icon">
                      <StarIcon width={23} height={23} stroke="#fff" />
                    </Box>
                  ))} */}

                <Box sx={{ mr: 2 }} className="white-sroke-icon">
                  <StarIcon width={23} height={23} stroke="#fff" />
                </Box>
                <Box sx={{ mr: 2 }} className="black-sroke-icon">
                  <StarIcon width={23} height={23} stroke="#000000" />
                </Box>
                <Box sx={{ mr: 2 }} className="red-sroke-icon">
                  <StarIcon width={23} height={23} stroke="#EF0C0C" />
                </Box>
                <Box sx={{ mr: 2 }} className="parupal-sroke-icon">
                  <StarIcon width={23} height={23} stroke="#9747FF" />
                </Box>
                <Box sx={{ mr: 2 }} className="gray-sroke-icon">
                  <StarIcon width={23} height={23} stroke="#919191" />
                </Box>
              </Box>
              <Button
                onClick={() => setIsDrawerVisible(!isDrawerVisible)}
                variant="outlined"
                className="custom-button"
                sx={{ paddingInline: "35px" }}
              >
                <span style={{ marginRight: "7px" }}>ADD TO BAG </span>{" "}
                <CartIconStroke width={18} height={18} />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <section style={{ margin: "50px 0" }}>
        <Container>
          <Grid container spacing={5}>
            {relatedProducts.map((cureEle, index) => {
              const {
                Rating,
                main_image,
                imgalt,
                product_name,
                product_price,
                discount_price,
              } = cureEle;
              return (
                <Grid item lg={6} md={6} sm={6} xs={12} key={index}>
                  <Card className="product-card">
                    <Grid container spacing={2}>
                      <Grid item lg={6} md={5} sm={5} xs={5}>
                        <Link to="/shop/new">
                          <Box className="img-box">
                            <img src={main_image} alt={main_image} />
                          </Box>
                        </Link>
                      </Grid>
                      <Grid item lg={6} md={7} sm={7} xs={7}>
                        <Box className="card-contain">
                          <Box className="head-section">
                            <Typography className="rating-box rating-text-box">
                              <StarIcon />
                              <span className="rating-text"> {Rating}</span>
                            </Typography>
                            <Typography className="rating-box rating-star">
                              <StarIcon />
                            </Typography>
                          </Box>
                          <Box className="card-details-box">
                            <Typography className="main-text">
                              <Link to="/shop/new">{product_name}</Link>
                            </Typography>
                            <Box className="price-box">
                              <Typography className="main-price-text">
                                {parseInt(product_price)}$
                              </Typography>
                              <Typography className="sub-rpice">
                                DISCOUNT :
                                <del> {parseInt(discount_price)}$</del>
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
                                  width: "100%",
                                  borderRadius: "0",
                                  py: 1,
                                }}
                                color="secondary"
                              >
                                <CartIcon height={18} width={18} />{" "}
                                <span style={{ marginLeft: "7px" }}>
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
