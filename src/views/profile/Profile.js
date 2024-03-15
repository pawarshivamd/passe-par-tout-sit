import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchBox from "../../layout/searchcontainer/SearchBox";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShopData } from "../Shop/Shop";
// import { ReactComponent as CloseIcon } from "../../assets/img/icon/closeicon.svg";
import { Link as RouterLink } from "react-router-dom";
import ProfileMain from "./ProfileMain";
import { fetchOrderProducts } from "../../Redux/Thunks/orderThunk";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../utils/Loader";
import { fetchCartDetails } from "../../Redux/Thunks/cartThunk";

const Profile = () => {
  const token = localStorage.getItem("auth_token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);

  const { orders, isLoading } = useSelector((state) => state.order);
  const [searchValue, setSearchValue] = useState("");

  let order_history;
  if (orders) {
    ({ order_history } = orders);
  }

  console.log(order_history, "orderhistoryyyy");

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  useEffect(() => {
    if (token) {
      dispatch(fetchOrderProducts());
      dispatch(fetchCartDetails());
    }
  }, [dispatch]);

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  if (isLoading) {
    return <Loader />;
  }

  const handleSearchChangeShoppingBag = (event) => {
    console.log(1, "Setting AutoFocus");
    localStorage.setItem("AutoFocus", "true");
    console.log(2, "AutoFocus set, navigating");

    // Delay navigation slightly
    setTimeout(() => navigate("/shop"), 50);
  };

  return (
    <Box sx={{ mt: 20 }}>
      <SearchBox
        handleSearchChangeShoppingBag={handleSearchChangeShoppingBag}
      />
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
              <NavLink>PURCHASES</NavLink>
            </Typography>
            <Typography
              onClick={() => handleTabChange(2)}
              style={{
                borderBottom: activeTab === 2 ? "1px solid #EFC80C" : "none",
              }}
            >
              <NavLink>PROFILE</NavLink>
            </Typography>
          </Box>
          <Box>
            {activeTab === 1 && (
              <Box sx={{ mt: 5 }}>
                <Grid container spacing={2}>
                  {/* {order_history && order_history?.length > 0 ? (
                    order_history?.map((order, index) => (
                      <React.Fragment key={index}>
                        {order?.order_items?.map((item, itemIndex) => (
                          <Grid
                            item
                            lg={4}
                            md={4}
                            sm={6}
                            xs={12}
                            key={itemIndex}
                          >
                            {console.log(item, "order")}
                            <Card className="product-card-">
                              <Box className="product-img">
                                <CardMedia
                                  component="img"
                                  height="100%"
                                  image={item.main_image}
                                  alt={item.product_name}
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
                                  <Typography
                                    variant="subtitle1"
                                    component="div"
                                  >
                                    <Link
                                      //  to={`/shop/new/${item.product_id}`}
                                      to="/purchase-details"
                                    >
                                      {item.product_name} + 3 more items
                                    </Link>
                                  </Typography>
                                </Box>
                                <Typography variant="body2">
                                  {item.discount_price}
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        ))}
                      </React.Fragment>
                    ))
                  ) : (
                    <Box
                      sx={{
                        minHeight: "40vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: 3,
                      }}
                    >
                      <Typography sx={{ textAlign: "center" }}>
                        You have not placed any orders yet. &nbsp;
                        <Button variant="contained">
                          <RouterLink to={"/shop"} style={{ color: "#3d3d3d" }}>
                            Go To Shop
                          </RouterLink>
                        </Button>
                      </Typography>
                    </Box>
                  )} */}
                  {order_history && order_history.length > 0 ? (
                    order_history.map((order, index) => (
                      <React.Fragment key={index}>
                        {order.order_items && order.order_items.length > 0 && (
                          <Grid item lg={4} md={4} sm={6} xs={12} key={index}>
                            {console.log(order.order_items[0], "order")}
                            <Card className="product-card-">
                              <Box className="product-img">
                                <CardMedia
                                  component="img"
                                  height="100%"
                                  image={order.order_items[0].main_image}
                                  alt={order.order_items[0].product_name}
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
                                  <Typography
                                    variant="subtitle1"
                                    component="div"
                                  >
                                    <Link
                                      to={`/purchase-details/${order.order_id}`}
                                    >
                                      {order.order_items[0].product_name}
                                      {order.order_items.length > 1 &&
                                        ` + ${
                                          order.order_items.length - 1
                                        } more items`}
                                    </Link>
                                  </Typography>
                                </Box>
                                <Typography variant="body2">
                                  {order.order_items[0].discount_price}
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        )}
                      </React.Fragment>
                    ))
                  ) : (
                    <Box
                      sx={{
                        minHeight: "40vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: 3,
                      }}
                    >
                      <Typography sx={{ textAlign: "center" }}>
                        You have not placed any orders yet. &nbsp;
                        <Button variant="contained">
                          <RouterLink to={"/shop"} style={{ color: "#3d3d3d" }}>
                            Go To Shop
                          </RouterLink>
                        </Button>
                      </Typography>
                    </Box>
                  )}
                </Grid>
              </Box>
            )}
            {activeTab === 2 && <ProfileMain />}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Profile;
