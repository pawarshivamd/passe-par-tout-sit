import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import ContinueProFooter from "../../layout/ContinueProFooter";
import SearchBox from "../../layout/searchcontainer/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddresss } from "../../Redux/Thunks/addressThunk";
import Loader from "../../utils/Loader";

const SelectAddress = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("auth_token");
  const { address, isLoading } = useSelector((state) => state.address);

  const { addresses, message, status } = address;

  console.log(addresses);

  useEffect(() => {
    if (token) {
      dispatch(fetchAddresss());
    }
  }, [dispatch]);

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

            {addresses &&
              addresses.length > 0 &&
              addresses.map((item) => {
                console.log(item);
                return (
                  <Grid item lg={12}>
                    <Box className="select-address-box">
                      <Typography className="main-title-box">
                        {item?.firstname}
                        <span className="select-opption-text">Home</span>
                      </Typography>
                      <Typography className="select-address-here">
                        <span>
                          {item?.district}, {item?.region}
                        </span>
                        <br />
                        <span>{item?.address}</span>
                        <br />
                        <span>
                          {item?.country_code} +{item?.mobile}
                        </span>
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
                );
              })}

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
      <ContinueProFooter BtnText="Continue" to="/profile" />
    </Box>
  );
};

export default SelectAddress;
