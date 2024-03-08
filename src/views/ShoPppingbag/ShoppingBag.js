import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ShopData } from "../Shop/Shop";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../../assets/img/icon/closeicon.svg";
import SearchBox from "../../layout/searchcontainer/SearchBox";
import ContinueProFooter from "../../layout/ContinueProFooter";
import Favorite from "../favorite/Favorite";
import { ReactComponent as StarIcon } from "../../assets/img/icon/yellowfillstar.svg";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartDetails, removeCartItem } from "../../Redux/Thunks/cartThunk";
import Loader from "../../utils/Loader";
import Notification from "../../utils/Notification";

const ShoppingBag = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [productToRemove, setProductToRemove] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("auth_token");
  const { cartData, isLoading, isError } = useSelector((state) => state.cart);
  console.log(cartData, "cartData");

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  useEffect(() => {
    if (token) {
      dispatch(fetchCartDetails());
    }
    // else {
    //   navigate("/login");
    //   Notification("info", "Please login to Continue");
    // }
  }, [dispatch, token]);

  const handleProductRemove = (product_id) => {
    if (product_id) {
      setProductToRemove(product_id); // Store the product ID to remove
      setShowConfirmationModal(true); // Open the confirmation modal
    }
  };

  const confirmProductRemove = () => {
    // Action to remove the product
    dispatch(removeCartItem({ id: productToRemove }))
      .then(() => {
        dispatch(fetchCartDetails());
        setShowConfirmationModal(false); // Close the confirmation modal after successful removal
      })
      .catch((error) => {
        console.error("Error removing item:", error);
        setShowConfirmationModal(false); // Close the confirmation modal if there's an error
      });
  };

  const cancelProductRemove = () => {
    // Cancel action, close the modal
    setShowConfirmationModal(false);
  };

  // const handleSearchChangeShoppingBag = (event) => {
  //   navigate("/shop");
  //   console.log(1, "11111");
  //   localStorage.setItem("AutoFocus", "true");
  //   console.log(2, "11111");
  // };
  const handleSearchChangeShoppingBag = (event) => {
    console.log(1, "Setting AutoFocus");
    localStorage.setItem("AutoFocus", "true");
    console.log(2, "AutoFocus set, navigating");

    // Delay navigation slightly
    setTimeout(() => navigate("/shop"), 50);
  };

  if (isLoading) {
    return <Loader />;
  }

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
              <NavLink>
                Shopping Bag ({cartData?.cart_items?.length || 0})
              </NavLink>
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
                {cartData?.cart_items && cartData.cart_items.length > 0 ? (
                  cartData?.cart_items?.map((item, index) => {
                    console.log("item", item);
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
                              image={item?.product.main_image}
                              alt={item?.product.main_image}
                              sx={{ objectFit: "cover" }}
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
                                {/* <Link
                                  onClick={() =>
                                    navigate(`/shop/new/${item.product.id}`)
                                  }
                                >
                                  {item?.product?.product_name}
                                </Link> */}
                                <Link to={`/shop/new/${item.product.id}`}>
                                  {item?.product?.product_name}
                                </Link>
                              </Typography>
                              <CloseIcon
                                onClick={() => handleProductRemove(item?.id)}
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
                      No items in shopping bag !!{" "}
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
            </Container>
            {/* <ContinueProFooter BtnText="Continue" to="/select-address" /> */}
            <ContinueProFooter
              BtnText="Continue"
              to={`/${
                cartData?.cart_items?.length > 0 ? "select-address" : "shop"
              }`}
            />
          </Box>
        )}
        {activeTab === 2 && <Favorite />}
      </Box>

      {/* Black overlay */}
      {showConfirmationModal && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />
      )}

      {/* Confirmation Modal */}
      {showConfirmationModal && (
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
          }}
        >
          <Typography variant="h6" color="#000" gutterBottom>
            Are you sure you want to delete?
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={confirmProductRemove}
              variant="contained"
              color="primary"
            >
              Yes
            </Button>
            <Button
              onClick={cancelProductRemove}
              variant="contained"
              color="secondary"
            >
              Cancel
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ShoppingBag;
