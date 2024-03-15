import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartDetails } from "../Redux/Thunks/cartThunk";

const ContinueProFooter2 = (props) => {
  const dispatch = useDispatch();

  const {
    cartData: { delivery_charge, item_total, payable_amount } = {},
    isLoading,
    isError,
  } = useSelector((state) => state.cart) || {};

  console.log(delivery_charge, item_total, payable_amount, "datatest");

  return (
    <Box className="banner-container">
      <section style={{ position: "relative", bottom: "0px" }}>
        <Box sx={{ borderTop: "2px solid #EFC80C", marginTop: "auto" }}>
          <Container>
            <Box sx={{ padding: "20px 0", mb: 3 }}>
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="end"
              >
                <Grid item lg={2} md={2} sm={2} xs={6}>
                  <Typography>Items Total</Typography>
                  <Typography>
                    {(item_total ? item_total : 0).toFixed(2)}
                  </Typography>
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={6}>
                  <Typography>Delivery</Typography>
                  <Typography>
                    {(delivery_charge ? delivery_charge : 0).toFixed(2)}
                  </Typography>
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={6}>
                  <Typography>Total</Typography>
                  <Typography>
                    {(payable_amount ? payable_amount : 0).toFixed(2)}
                  </Typography>
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={6}>
                  <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <Button
                      //   component={Link}
                      //   to={props.to}
                      variant="outlined"
                      className="custom-button"
                      sx={{ padding: "5px 50px" }}
                      onClick={props.onClick}
                    >
                      {props.BtnText}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </section>
    </Box>
  );
};
export default ContinueProFooter2;
