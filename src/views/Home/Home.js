import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";

import { ReactComponent as StarIcon } from "../../assets/img/icon/yellowfillstar.svg";
import { ReactComponent as CartIcon } from "../../assets/img/icon/cart.svg";
import Footer from "../footer/Footer";
import CloseIcon from "@mui/icons-material/Close";
import CustomDrawer from "../../layout/CustomDrawer";
import { ReactComponent as RightMoveArrow } from "../../assets/img/icon/reightmovearrow.svg";
import { ReactComponent as LeftMoveArrow } from "../../assets/img/icon/leftmovearrow.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// actions
import { fetchHomeProducts } from "../../Redux/Thunks/homeThunk";
import { addToCart, fetchCartDetails } from "../../Redux/Thunks/cartThunk";
import Loader from "../../utils/Loader";

const Home = () => {
  const dispatch = useDispatch();
  const [isDrawerVisible, setIsDrawerVisible] = React.useState(false);
  const navigate = useNavigate();
  // const userData = useSelector((state) => state.user);

  const token = localStorage.getItem("auth_token");

  // console.log(userData);

  const { products, isLoading, isError } = useSelector((state) => state.home);

  const {
    cartData,
    isLoading: cartIsLoading,
    isError: cartIsError,
  } = useSelector((state) => state.cart);

  console.log(cartData, "cart data product details ");

  const handleAddToCart = () => {
    const product_id = 2;
    const product_color = "red";
    const product_size = "XL";

    dispatch(addToCart({ product_id, product_color, product_size }))
      .then(() => {
        dispatch(fetchCartDetails());
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
      });
  };

  useEffect(() => {
    dispatch(fetchHomeProducts());
    if (token) {
      dispatch(fetchCartDetails());
    }
  }, [dispatch]);

  const list = (anchor) => (
    <Box
      className="drawer-open-section"
      role="presentation"
      onClick={() => setIsDrawerVisible(false)}
      onKeyDown={() => setIsDrawerVisible(false)}
    >
      <Box>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <CloseIcon
            color="primary"
            sx={{ cursor: "pointer" }}
            onClick={() => setIsDrawerVisible(false)}
          />
        </Box>

        <Typography sx={{ mt: 2, textAlign: "right" }}>
          ADDED TO YOUR SHOPPING BAG
        </Typography>

        {cartData?.cart_items?.map(
          (item, index) => (
            console.log(item, "cartData in productDetails.."),
            (
              <Grid container spacing={2} key={index}>
                <Grid item lg={5} md={5} sm={12} xs={12}>
                  <Box>
                    <img
                      src={item?.main_image_path}
                      width={"100%"}
                      alt={item?.main_image_path}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Grid>
                <Grid item lg={7} md={7} sm={12} xs={12}>
                  <Typography sx={{ mt: 1 }}>
                    {item?.product_details?.product_name}
                  </Typography>
                  <Typography>
                    {item?.product_details?.product_name}/
                    {item?.product_details?.product_name}
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <Button
                      component={Link}
                      to="/shopping-bag"
                      variant="outlined"
                      className="custom-button"
                      sx={{ padding: "7px 40px" }}
                    >
                      SEE SHOPPING BAG
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            )
          )
        )}
      </Box>
    </Box>
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box>
      <Box className="banner-container">
        <Box className="banner-section">
          <Box className="banner-box">
            <Box>{/* <Logo className="logo-banner" /> */}</Box>
            <Box>
              {/* <Typography sx={{ color: "#EFC80C",ml:2 }}>A' vous, pour tout</Typography> */}
            </Box>
          </Box>
        </Box>
      </Box>
      <section>
        <Box className="banner-container">
          <Box className="passe-banner-section">
            <Box className="banner-box">
              Lorem ipsum dolor sit amet consectetur. Ipsum erat velit iaculis
              elementum lorem. Luctus natoque purus pellentesque proin id
              Gravida vel vel pharetra tortor.
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
              {!isLoading ? (
                <Grid container spacing={5}>
                  {products.map((cureEle, index) => {
                    const {
                      id,
                      average_rating,
                      main_image,
                      product_name,
                      product_price,
                      discount_price,
                    } = cureEle;
                    return (
                      <Grid item lg={6} md={6} sm={6} xs={12} key={index}>
                        <Card className="product-card">
                          <Grid container spacing={2}>
                            <Grid item lg={6} md={5} sm={5} xs={5}>
                              <Link to={`/shop/new/${id}`}>
                                <Box className="img-box">
                                  <img src={main_image} alt={product_name} />
                                </Box>
                              </Link>
                            </Grid>
                            <Grid item lg={6} md={7} sm={7} xs={7}>
                              <Box className="card-contain">
                                <Box className="head-section">
                                  <Typography className="rating-box rating-text-box">
                                    <StarIcon />
                                    <span className="rating-text">
                                      {average_rating}
                                    </span>
                                  </Typography>
                                  <Typography className="rating-box rating-star">
                                    <StarIcon />
                                  </Typography>
                                </Box>
                                <Box className="card-details-box">
                                  <Typography className="main-text">
                                    <Link to={`/shop/new/${id}`}>
                                      {product_name}
                                    </Link>
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
                                      onClick={() => [
                                        // setIsDrawerVisible(!isDrawerVisible),
                                        // handleAddToCart(),
                                        navigate(`/shop/new/${id}`),
                                      ]}
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
              ) : (
                <Typography className="trending-head-title">
                  <span style={{ borderBottom: "1px solid #EFC80C" }}>
                    Loading
                  </span>
                </Typography>
              )}
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
