import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

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
import {
  addToWishList,
  fetchWishList,
  removeFromWishList,
} from "../../Redux/Thunks/wishListThunk";
import Loader from "../../utils/Loader";
import Notification from "../../utils/Notification";
import banner1 from "../../assets/img/bannerdemo.png"
import banner2 from "../../assets/img/banner2.png"

const Home = () => {
  const dispatch = useDispatch();
  const [isDrawerVisible, setIsDrawerVisible] = React.useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("auth_token");

  const { products, isLoading, isError } = useSelector((state) => state.home);
  console.log(products, "productsss::>>");
  const { wishList } = useSelector((state) => state.wishList);

  const {
    cartData,
    isLoading: cartIsLoading,
    isError: cartIsError,
  } = useSelector((state) => state.cart);

  //   const product_id = 2;
  //   const product_color = "red";
  //   const product_size = "XL";

  //   dispatch(addToCart({ product_id, product_color, product_size }))
  //     .then(() => {
  //       dispatch(fetchCartDetails());
  //     })
  //     .catch((error) => {
  //       console.error("Error adding item to cart:", error);
  //     });
  // };

  useEffect(() => {
    dispatch(fetchHomeProducts());
    if (token) {
      dispatch(fetchCartDetails());
      dispatch(fetchWishList());
    }
  }, [dispatch, token]);

  // const handleToggle = (product_id) => {
  //   if (token) {
  //     setIsChecked((prevChecked) => !prevChecked);
  //     if (isChecked) {
  //       dispatch(removeFromWishList({ product_id }));
  //     } else {
  //       dispatch(addToWishList({ product_id }));
  //     }
  //   } else {
  //     Notification("info", "Please login to Continue");
  //   }
  // };
  const handleToggle = (product_id) => {
    if (token) {
      setIsChecked((prevItems) => ({
        ...prevItems,
        [product_id]: !prevItems[product_id],
      }));

      if (isChecked[product_id]) {
        dispatch(removeFromWishList({ product_id }));
      } else {
        dispatch(addToWishList({ product_id }));
      }
    } else {
      Notification("info", "Please login to Continue");
    }
  };

  // useEffect(() => {
  //   if (token) {
  //     const productIds = products.map((product) => String(product.id));
  //     const wishListProductIds = wishList?.wishlist?.map(
  //       (item) => item.product_id
  //     );
  //     setIsChecked(
  //       wishListProductIds?.some((productId) => productIds.includes(productId))
  //     );
  //   }
  // }, [products, wishList.wishlist]);
  useEffect(() => {
    if (token && wishList?.wishlist) {
      const initialCheckedState = products.reduce((acc, product) => {
        // Convert product.id to String if it's not already, assuming wishList IDs are also strings
        const isWishlisted = wishList.wishlist.some(
          (wishItem) => String(wishItem.product_id) === String(product.id)
        );
        acc[String(product.id)] = isWishlisted;
        return acc;
      }, {});

      setIsChecked(initialCheckedState);
    }
  }, [products, wishList.wishlist, token]);
  console.log(cartData.cart_items, "cartData.cart_items");
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

        {cartData?.cart_items?.map((item, index) => (
          <Grid container spacing={2} key={index}>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Box>
                <img
                  src={item?.product.main_image}
                  width={"100%"}
                  alt={item?.product.main_image}
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
        ))}
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
          <img src={banner1} alt="" width={"100%"} />
        </Box>
      </Box>
      <section>
        <Box className="banner-container">
          <Box className="passe-banner-section">
          <img src={banner2} alt="" width={"100%"} />
            {/* <Box className="right-box-section">
              <Typography sx={{ textAlign: "center" }}>& even more swag</Typography>
              <Box sx={{ textAlign: "center" ,padding:" 0 15px"}}>
                <RightMoveArrow className="arrow-icon" />
              </Box>
            </Box>
            <Box className="left-box-section">
              <Box sx={{ textAlign: "center" }}>
                <LeftMoveArrow className="arrow-icon" />
              </Box>
              <Typography sx={{ marginTop:"-50px",padding:" 0 15px" }}> For swag</Typography>
            </Box> */}
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
                              <Link
                                to={"/shop"}
                                // onClick={() => {
                                //   if (!token) {
                                //     Notification(
                                //       "error",
                                //       "Please log in to view this page"
                                //     );
                                //   }
                                // }}
                              >
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

                                  {/* {isChecked ? (
                                    <Typography className="rating-box set-rating-star ">
                                      <StarIcon
                                        // onClick={() => handleToggle(id)}
                                        onClick={() => {
                                          if (token) {
                                            handleToggle(id);
                                          } else {
                                            Notification(
                                              "error",
                                              "Please log in to add to wishlist"
                                            );
                                          }
                                        }}
                                      />
                                    </Typography>
                                  ) : (
                                    <Typography className="rating-box rating-star ">
                                      <StarIcon
                                        onClick={() => {
                                          if (token) {
                                            handleToggle(id);
                                          } else {
                                            Notification(
                                              "error",
                                              "Please log in to add to wishlist"
                                            );
                                          }
                                        }}
                                      />
                                    </Typography>
                                  )} */}
                                  {isChecked[id] ? (
                                    <Typography className="rating-box set-rating-star ">
                                      <StarIcon
                                        onClick={() => {
                                          if (token) {
                                            handleToggle(id);
                                          } else {
                                            Notification(
                                              "error",
                                              "Please log in to add to wishlist"
                                            );
                                          }
                                        }}
                                      />
                                    </Typography>
                                  ) : (
                                    <Typography className="rating-box rating-star ">
                                      <StarIcon
                                        onClick={() => {
                                          if (token) {
                                            handleToggle(id);
                                          } else {
                                            Notification(
                                              "error",
                                              "Please log in to add to wishlist"
                                            );
                                          }
                                        }}
                                      />
                                    </Typography>
                                  )}
                                </Box>
                                <Box className="card-details-box">
                                  <Typography
                                    className="main-text"
                                    sx={{ fontWeight: "bold" }}
                                  >
                                    {product_name}
                                  </Typography>
                                  <Box className="price-box">
                                    <Typography className="main-price-text">
                                      {/* {parseInt(product_price)}$ */}
                                      {parseInt(discount_price)}$
                                    </Typography>
                                    <Typography className="sub-rpice">
                                      DISCOUNT :
                                      <del> {parseInt(product_price)}$</del>
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
                                      onClick={async () => {
                                        if (token) {
                                          navigate(`/shop/new/${id}`);
                                        } else {
                                          Notification(
                                            "error",
                                            "Please log in to add items to your bag"
                                          );
                                          navigate("/login");
                                        }
                                      }}
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
