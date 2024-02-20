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
import { Link, NavLink } from "react-router-dom";
import { ShopData } from "../Shop/Shop";
// import { ReactComponent as CloseIcon } from "../../assets/img/icon/closeicon.svg";
import { Link as RouterLink } from "react-router-dom";
import ProfileMain from "./ProfileMain";
import { fetchOrderProducts } from "../../Redux/Thunks/orderThunk";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_BASE_URL } from "../../utils/constants";

const Profile = () => {
  const token = localStorage.getItem("auth_token");
  const [activeTab, setActiveTab] = useState(1);
  const dispatch = useDispatch();
  const { orders, isLoading } = useSelector((state) => state.order);
  const [searchValue, setSeachVal] = useState("");

  console.log(searchValue, "searchValue");

  const { order_history } = orders;

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  useEffect(() => {
    if (token) {
      dispatch(fetchOrderProducts());
    }
  }, [dispatch]);

  const handleSearchChange = (value) => {
    setSeachVal(value);
  };

  return (
    <Box sx={{ mt: 20 }}>
      <SearchBox handleSearchChange={handleSearchChange} />
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
                  {order_history && order_history.length > 0 ? (
                    order_history?.map((cureEle, index) => {
                      const {
                        main_image,
                        ImgAlt,
                        product_name,
                        product_price,
                      } = cureEle;
                      return (
                        <Grid item lg={4} md={4} sm={6} xs={12} key={index}>
                          <Card className="product-card-">
                            <Box className="product-img">
                              <CardMedia
                                component="img"
                                height="100%"
                                // image={`${IMAGE_BASE_URL}/main_image`}
                                image={`${IMAGE_BASE_URL}/${main_image}`}
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
                                  <Link>{product_name}</Link>
                                </Typography>
                                {/* <CloseIcon /> */}
                              </Box>
                              <Typography variant="body2">
                                {product_price}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      );
                    })
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
                        You Have not placed any order yet &nbsp;
                        <Button variant="contained">
                          {" "}
                          <RouterLink to={"/shop"} style={{ color: "#3d3d3d" }}>
                            {" "}
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
