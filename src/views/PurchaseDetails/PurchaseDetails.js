import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Img from "../../assets/img/products/product1.png";
import { Link, useParams } from "react-router-dom";
import SearchBox from "../../layout/searchcontainer/SearchBox";
import Footer from "../footer/Footer";
import { useTheme } from "@emotion/react";
import { theme } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { trackOrder } from "../../Redux/Thunks/orderThunk";

// const cardData = [
//   {
//     id:"0",
//     Name:"PPT LOTS(HOODIE&SWEATPANT)"
//   }
// ]
const PurchaseDetails = () => {
  const { id } = useParams();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.order.trackorders);
  const { order_delivery_trackings } = orderDetails;
  console.log(orderDetails, "orderDetails.length", id);
  // const steps = [
  //   "Order Placed",
  //   "Order Confirmed",
  //   "Out For Delivery",
  //   "Order Delivered",
  // ];
  const allPossibleSteps = [
    "Order Placed",
    "Order Confirmed",
    "Out For Delivery",
    "Order Delivered",
  ];

  // const stepDetails = [
  //   {
  //     date: "16th June 2022",
  //     time: "10:54pm",
  //   },
  //   {
  //     date: "16th June 2022",
  //     time: "10:54pm",
  //   },
  //   {
  //     date: "16th June 2022",
  //     time: "10:54pm",
  //   },
  //   {
  //     date: "16th June 2022",
  //     time: "10:54pm",
  //   },
  // ];
  const steps = order_delivery_trackings?.map((tracking) => tracking.status);
  const stepDetails = order_delivery_trackings?.map((tracking) => ({
    date: new Date(tracking.created_at).toLocaleDateString(), // Convert to your preferred date format
    time: new Date(tracking.created_at).toLocaleTimeString(), // Convert to your preferred time format
  }));
  const currentStepIndex = allPossibleSteps.findIndex(
    (step) => step === order_delivery_trackings?.slice(-1)[0]?.status
  );
  const trackingStatuses = order_delivery_trackings?.map(
    (tracking) => tracking?.status
  );

  useEffect(() => {
    // if (id) {
    dispatch(trackOrder(id));
    // }
  }, [dispatch]);

  return (
    <Box sx={{ mt: 20 }}>
      <SearchBox />
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Typography
              sx={{
                mb: 5,
                p: 1,
                borderBottom: "1px solid #efc80c",
                display: "inline-block",
              }}
            >
              Order Tracking
            </Typography>
            {/* <Box sx={{ width: "100%" }}>
              <Stepper
                activeStep={2}
                alternativeLabel={isSmallScreen ? false : true}
                orientation={isSmallScreen ? "vertical" : "horizontal"}
              >
                {steps?.map((label, index) => (
                  <Step
                    key={label}
                    sx={{
                      "& .MuiStepLabel-root .Mui-completed": {
                        color: "#efc80c", // circle color (COMPLETED)
                      },
                      "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                        {
                          color: "#efc80c", // Just text label (COMPLETED)
                        },
                      "& .MuiStepLabel-root .Mui-active": {
                        color: "#FFFFFF", // circle color (ACTIVE)
                      },
                      "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                        {
                          color: "#FFFFFF", // Just text label (ACTIVE)
                        },
                      "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                        fill: "#000", // circle's number (ACTIVE)
                      },
                      "& .MuiStepLabel-alternativeLabel .css-1vyamtt-MuiStepLabel-labelContaine":
                        {
                          fill: "#efc80c !important", // circle's number (COMPLETED)
                        },
                    }}
                  >
                    <StepLabel
                      icon={<CheckCircleIcon />}
                      sx={{
                        "& .MuiStepLabel-label": {
                          color: "#FFF ", // circle's number (COMPLETED)
                        },
                        "& .MuiSvgIcon-root": {
                          // color: "#FFF",
                        },
                      }}
                    >
                      <div>
                        <div>{label}</div>
                      </div>
                      <div>
                        <div>{stepDetails[index].date}</div>
                        <div>{stepDetails[index].time}</div>
                      </div>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box> */}
            <Box sx={{ width: "100%" }}>
              <Stepper
                activeStep={currentStepIndex}
                alternativeLabel
                orientation="horizontal"
              >
                {allPossibleSteps?.map((label, index) => (
                  <Step key={label}>
                    <StepLabel
                      icon={
                        index <= currentStepIndex ? (
                          <CheckCircleIcon sx={{ color: "#efc80c" }} />
                        ) : (
                          <CheckCircleIcon sx={{ color: "#FFF" }} />
                        )
                      }
                      sx={{
                        "& .MuiStepLabel-root .Mui-completed, & .MuiStepLabel-root.Mui-active":
                          {
                            color: trackingStatuses?.includes(label)
                              ? "#efc80c"
                              : "#FFF",
                          },
                        "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel, & .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                          {
                            color: trackingStatuses?.includes(label)
                              ? "#efc80c"
                              : "#FFF",
                          },
                        "& .MuiStepLabel-label": {
                          color: "#FFF", // Ensures that non-active step labels are white
                        },
                        "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                          fill: "#000", // Keeps the active step's icon text color as black (if applicable)
                        },
                      }}
                    >
                      {label}
                      {trackingStatuses?.includes(label) && (
                        <div style={{ color: "#efc80c", marginTop: "4px" }}>
                          <div>
                            {new Date(
                              order_delivery_trackings.find(
                                (tracking) => tracking.status === label
                              ).created_at
                            ).toLocaleDateString()}
                          </div>
                          <div>
                            {new Date(
                              order_delivery_trackings.find(
                                (tracking) => tracking.status === label
                              ).created_at
                            ).toLocaleTimeString()}
                          </div>
                        </div>
                      )}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>

            <Box sx={{ mt: 12, mb: 5 }}>
              <Grid container spacing={2}>
                {orderDetails && orderDetails
                  ? orderDetails?.order_details?.order_items?.map(
                      (item, index) => (
                        <>
                          <Grid item lg={4} md={4} sm={6} xs={12}>
                            <Card className="product-card-">
                              <Box className="product-img">
                                <Link
                                // to={`/shop/new/${id}`}
                                >
                                  <CardMedia
                                    component="img"
                                    height="100%"
                                    image={item?.product_details?.main_image}
                                    alt={Img}
                                    sx={{ objectFit: "contain" }}
                                  />
                                </Link>
                              </Box>
                              <CardContent
                                sx={{
                                  background: "#191919",
                                  color: "#D9D9D9",
                                  paddingInline: "0px",
                                }}
                              >
                                <Typography variant="subtitle1" component="div">
                                  <Link>
                                    {item?.product_details?.product_name}
                                  </Link>
                                </Typography>
                                <Box
                                  sx={{
                                    display: "flex",
                                    // justifyContent: "space-between",
                                    gap: 5,
                                    alignItems: "center",
                                    mt: 1,
                                  }}
                                >
                                  <Typography sx={{ fontSize: "14px" }}>
                                    Size: {item?.product_size}
                                  </Typography>
                                  <Typography sx={{ fontSize: "14px" }}>
                                    Color: {item?.product_color}
                                  </Typography>
                                </Box>
                                <Typography sx={{ fontSize: "14px" }}>
                                  Price: ${item?.product_price}
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        </>
                      )
                    )
                  : ""}
              </Grid>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={12} xs={12} ml={"auto"}>
            <Grid container spacing={2}>
              <Grid item lg={12} md={12} sm={6} xs={12}>
                <Box>
                  <Box
                    sx={{
                      p: 1,
                      borderBottom: "1px solid #efc80c",
                      display: "inline-block",
                    }}
                  >
                    <Typography>Shipping Details</Typography>
                  </Box>
                  <Typography sx={{ padding: "10px" }}>
                    {orderDetails?.order_details?.user.name}
                    <span
                      style={{
                        color: "#efc80c",
                        fontSize: "12px",
                        fontWeight: "400",
                        marginLeft: "20px",
                      }}
                    >
                      {orderDetails?.order_details?.address.address_type}
                    </span>
                  </Typography>
                  <Typography
                    sx={{ p: "10px" }}
                    className="select-address-here"
                  >
                    <span>
                      {orderDetails?.order_details?.address.region},
                      {orderDetails?.order_details?.address.district}
                    </span>
                    <br />
                    <span>{orderDetails?.order_details?.address.address}</span>
                    <br />
                    <span>+961 {orderDetails?.order_details?.user.mobile}</span>
                    <br />
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={12} md={12} sm={6} xs={12}>
                <Box sx={{ mt: { lg: 5, md: 5, sm: 0, xs: 2 } }}>
                  <Box
                    sx={{
                      p: 1,
                      borderBottom: "1px solid #efc80c",
                      display: "inline-block",
                    }}
                  >
                    <Typography>Price Details</Typography>
                  </Box>
                  <Box sx={{ p: "10px" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      <Typography>Subtotal</Typography>
                      <Typography>
                        ${orderDetails?.sub_total?.toFixed(2)}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      <Typography>Delivery Charges</Typography>
                      <Typography>$5.00</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1,
                        gap: 2,
                      }}
                    >
                      <Typography
                        sx={{ borderTop: "1px solid #efc80c", flex: 1, pt: 1 }}
                      >
                        Total
                      </Typography>
                      <Typography
                        sx={{ borderTop: "1px solid #efc80c", pt: 1 }}
                      >
                        ${orderDetails?.total_amount?.toFixed(2)}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default PurchaseDetails;
