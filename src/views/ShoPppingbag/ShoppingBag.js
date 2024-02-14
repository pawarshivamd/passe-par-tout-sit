import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ShopData } from "../Shop/Shop";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../../assets/img/icon/closeicon.svg";
import SearchBox from "../../layout/searchcontainer/SearchBox";
import ContinueProFooter from "../../layout/ContinueProFooter";
import Favorite from "../favorite/Favorite";
import { ReactComponent as StarIcon } from "../../assets/img/icon/yellowfillstar.svg";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartDetails, removeCartItem } from "../../Redux/Thunks/cartThunk";
import Loader from "../../utils/Loader";

const ShoppingBag = () => {
  const [activeTab, setActiveTab] = useState(1);
  const dispatch = useDispatch();

  const { cartData, isLoading, isError } = useSelector((state) => state.cart);

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  useEffect(() => {
    dispatch(fetchCartDetails());
  }, [dispatch]);

  const handleProductRemove = (product_id) => {
    if (product_id) {
      dispatch(removeCartItem({ product_id }))
        .then(() => {
          // This block will execute after the removal action has been completed
          dispatch(fetchCartDetails());
        })
        .catch((error) => {
          // Handle any errors that occur during the removal process
          console.error("Error removing item:", error);
        });
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box sx={{ mt: 20 }}>
      <SearchBox />
      <Container>
        <Box>
          <Box
            sx={{ display: "flex", alignItems: "center" }}
            className="tab-section"
          >
            <Typography
              onClick={() => handleTabChange(1)}
              style={{
                marginRight: "50px",
                borderBottom: activeTab === 1 ? "1px solid #EFC80C" : "none",
              }}
            >
              <NavLink>Shopping Bag ({cartData?.cart_items?.length})</NavLink>
            </Typography>
            <Typography
              onClick={() => handleTabChange(2)}
              style={{
                borderBottom: activeTab === 2 ? "1px solid #EFC80C" : "none",
              }}
            >
              <NavLink>
                {" "}
                Favorite <StarIcon />{" "}
              </NavLink>
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box>
        {activeTab === 1 && (
          <Box sx={{ mt: 5 }}>
            <Container>
              <Grid container spacing={2}>
                {cartData?.cart_items?.map((item, index) => {
                  return (
                    <Grid item lg={4} md={4} sm={6} xs={12} key={item.id}>
                      <Card
                        className="product-card-"
                        sx={{ borderRadius: "0px", boxShadow: "none" }}
                      >
                        <Box className="product-img">
                          <CardMedia
                            component="img"
                            height="100%"
                            image={item?.product?.main_image}
                            // alt={item?.product?.product_name}
                            sx={{ objectFit: "contain" }}
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
                              alignItems: "center",
                            }}
                          >
                            <Typography variant="subtitle1" component="div">
                              <Link>{item?.product?.product_name}</Link>
                            </Typography>
                            <CloseIcon
                              onClick={() =>
                                handleProductRemove(item?.product?.id)
                              }
                              className="close-icon"
                            />
                          </Box>
                          <Typography variant="body2">
                            {item?.product?.product_price}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>

              {/* <Grid container spacing={2}>
                {ShopData.filter(
                  (item) => item.id === "0" || item.id === "1"
                ).map((cureEle, index) => {
                  const { ShopImg, ImgAlt, MainText, Price } = cureEle;
                  return (
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                      <Card
                        className="product-card-"
                        sx={{ borderRadius: "0px", boxShadow: "none" }}
                      >
                        <Box className="product-img">
                          <CardMedia
                            component="img"
                            height="100%"
                            image={ShopImg}
                            alt={ImgAlt}
                            sx={{ objectFit: "contain" }}
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
                              alignItems: "center",
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
              </Grid> */}
            </Container>
            <ContinueProFooter BtnText="Continue" to="/address" />
          </Box>
        )}
        {activeTab === 2 && <Favorite />}
      </Box>
    </Box>
  );
};

export default ShoppingBag;
