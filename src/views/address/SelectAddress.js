import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Link, useNavigate } from "react-router-dom";
import ContinueProFooter from "../../layout/ContinueProFooter";
import SearchBox from "../../layout/searchcontainer/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddresss } from "../../Redux/Thunks/addressThunk";
import Loader from "../../utils/Loader";
import ContinueProFooter2 from "../../layout/ContinueFooter2";
import Notification from "../../utils/Notification";
import { fetchCartDetails } from "../../Redux/Thunks/cartThunk";
import { placeOrder } from "../../Redux/Thunks/orderThunk";

const SelectAddress = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("auth_token");
  const { address, isLoading } = useSelector((state) => state.address);
  const { cartData } = useSelector((state) => state.cart);

  const { addresses, message, status } = address;

  console.log(cartData);

  useEffect(() => {
    if (token) {
      dispatch(fetchAddresss());
      dispatch(fetchCartDetails());
    }
  }, [dispatch]);

  const idStoretoLocal = (id) => {
    localStorage.setItem("address_id", id);
  };

  const user_data = JSON.parse(localStorage.getItem("user_data"));
  const product_size = cartData.cart_items[0].size;
  console.log(user_data, cartData.cart_items[0].size, "formData");

  // const handleContinueClick = () => {
  //   const user_id = user_data.id;
  //   const address_id = localStorage.getItem("address_id");
  //   const orderData = [
  //     {
  //       user_id: user_id,
  //       address_id: address_id,
  //       cart_id: cart_id,
  //       product_size: product_size,
  //     },
  //   ];
  //   console.log(user_id, "formData");

  //   if (address_id) {
  //     console.log("called");
  //     dispatch(placeOrder(orderData));
  //     navigate("/profile");
  //   } else {
  //     Notification("info", "Please select an address");
  //   }
  // };
  const handleContinueClick = () => {
    // Assuming user_data and address_id are already available as shown in your example
    const user_id = user_data.id;
    const address_id = localStorage.getItem("address_id");

    // Generate cart_id from all cart item IDs
    // const cart_id = cartData.cart_items.map((item) => item.id).join(",");

    // Now, instead of taking the size of the first item, we'll prepare orderData for each cart item
    const orderData = cartData.cart_items.map((item) => ({
      user_id: user_id,
      address_id: address_id,
      cart_id: item.id, // This will be the same for all items, consider if this is the intended logic
      product_size: item.size, // Size of the current item
      // If you need to include more item-specific data, you can add them here
    }));

    console.log("Order Data:", orderData);

    console.log(orderData, "orderData");

    if (address_id) {
      console.log("Order placement called");
      dispatch(placeOrder(orderData)); // Ensure your placeOrder action can handle an array of orders
      navigate("/profile");
    } else {
      Notification("info", "Please select an address");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box sx={{ mt: 20 }}>
      <SearchBox />
      <Container>
        <Box sx={{ mb: 5 }}>
          <Grid container spacing={2} lg={6} md={6} sm={8} xs={12}>
            <Grid item lg={12} xs={12}>
              <Box className="select-address-head-section">
                <Typography className="main-text">
                  Select Delivery Address
                </Typography>
                <Typography
                  className="add-addres-text"
                  component={Link}
                  to="/address"
                >
                  <AddIcon /> Add New Address
                </Typography>
              </Box>
            </Grid>

            {addresses && addresses.length > 0 ? (
              addresses.map((item) => {
                console.log(item);
                return (
                  <Grid item lg={12}>
                    <Box className="select-address-box">
                      <Typography className="main-title-box">
                        {item?.firstname}
                        <span className="select-opption-text">
                          {item.address_type}
                        </span>
                      </Typography>
                      <Typography className="select-address-here">
                        <span>
                          {item?.district}, {item?.region}
                        </span>
                        <br />
                        <span>{item?.address}</span>
                        <br />
                        <span>
                          {item?.country_code} {item?.mobile}
                        </span>
                        <br />
                      </Typography>
                      {/* <Box sx={{ padding: "10px" }}>
                        <Link>Edit</Link>
                      </Box> */}
                      <Box sx={{ padding: "10px" }}>
                        <Button
                          variant="outlined"
                          className="custom-button"
                          onClick={() => idStoretoLocal(item.id)}
                        >
                          Deliver to this Address
                        </Button>
                      </Box>
                    </Box>
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
                  Please Add Address First !!
                </Typography>
              </Box>
            )}

            {/* <Grid item lg={12}>
              <Box className="select-address-box">
                <Typography className="main-title-box">
                  Rami adolf H<span className="select-opption-text">Home</span>
                </Typography>
                <Typography className="select-address-here">
                  <span>Lebanon, Beirut</span>
                  <br />
                  <span>street 4 Hazmieh building 6 floor</span>
                  <br />
                  <span>+961 70 000 000, 70 000 000</span>
                  <br />
                </Typography>
                <Box sx={{ padding: "10px" }}>
                  <Link>Edit</Link>
                </Box>
                <Box sx={{ padding: "10px" }}>
                  <Button variant="outlined" className="custom-button">
                    Deliver to this Address
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={12}>
              <Box className="select-address-box">
                <Typography className="main-title-box">
                  Rami adolf H<span className="select-opption-text">Home</span>
                </Typography>
                <Typography className="select-address-here">
                  <span>Lebanon, Beirut</span>
                  <br />
                  <span>street 4 Hazmieh building 6 floor</span>
                  <br />
                  <span>+961 70 000 000, 70 000 000</span>
                  <br />
                </Typography>
                <Box sx={{ padding: "10px" }}>
                  <Link>Edit</Link>
                </Box>
                <Box sx={{ padding: "10px" }}>
                  <Button variant="outlined" className="custom-button">
                    Deliver to this Address
                  </Button>
                </Box>
              </Box>
            </Grid> */}
          </Grid>
        </Box>
      </Container>
      <ContinueProFooter2
        BtnText="Continue"
        // to={addresses && addresses.length > 0 ? "/shopping-bag" : "/address"}
        onClick={handleContinueClick}
      />
    </Box>
  );
};

export default SelectAddress;
