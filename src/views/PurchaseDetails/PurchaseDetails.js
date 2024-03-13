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
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Img from "../../assets/img/products/product1.png";
import { Link } from "react-router-dom";
import SearchBox from "../../layout/searchcontainer/SearchBox";
import Footer from "../footer/Footer";
import { useTheme } from "@emotion/react";
import { theme } from "../../App";
const steps = [
  "Order Placed",
  "Order Confirmed",
  "Out For Delivery",
  "Order Delivered",
];
const stepDetails = [
  {
    date: "16th June 2022",
    time: "10:54pm",
  },
  {
    date: "16th June 2022",
    time: "10:54pm",
  },
  {
    date: "16th June 2022",
    time: "10:54pm",
  },
  {
    date: "16th June 2022",
    time: "10:54pm",
  },
];
// const cardData = [
//   {
//     id:"0",
//     Name:"PPT LOTS(HOODIE&SWEATPANT)"
//   }
// ]
const PurchaseDetails = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx={{ mt: 20 }}>
      <SearchBox />
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
          <Typography sx={{mb:5,p:1 ,borderBottom:"1px solid #efc80c",display:"inline-block"}} >Order Tracking</Typography>
            <Box sx={{ width: "100%" }}>
              <Stepper
                activeStep={2}
                alternativeLabel={isSmallScreen ?   false : true } 
                orientation={isSmallScreen ? 'vertical' : 'horizontal'}

              >
                {steps.map((label, index) => (
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
            </Box>

            <Box sx={{ mt: 12 ,mb:5 }}>
              <Grid container spacing={2}>
              {/* {cardData.map((item, id) => (
                
              ))} */}
                <Grid item lg={4} md={4} sm={6} xs={12}>
                  <Card className="product-card-">
                    <Box className="product-img">
                      <Link
                      // to={`/shop/new/${id}`}
                      >
                        <CardMedia
                          component="img"
                          height="100%"
                          image={Img}
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
                        <Link>PPT LOTS(HOODIE&SWEATPANT)</Link>
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          // justifyContent: "space-between",
                          gap:5,
                          alignItems: "center",
                          mt: 1,
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Size: M
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          Color: Black
                        </Typography>
                      </Box>
                      <Typography sx={{ fontSize: "14px" }}>
                        Price: $100.00
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                  <Card className="product-card-">
                    <Box className="product-img">
                      <Link
                      // to={`/shop/new/${id}`}
                      >
                        <CardMedia
                          component="img"
                          height="100%"
                          image={Img}
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
                        <Link>PPT LOTS(HOODIE&SWEATPANT)</Link>
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          // justifyContent: "space-between",
                          gap:5,
                          alignItems: "center",
                          mt: 1,
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Size: M
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          Color: Black
                        </Typography>
                      </Box>
                      <Typography sx={{ fontSize: "14px" }}>
                        Price: $100.00
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                  <Card className="product-card-">
                    <Box className="product-img">
                      <Link
                      // to={`/shop/new/${id}`}
                      >
                        <CardMedia
                          component="img"
                          height="100%"
                          image={Img}
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
                        <Link>PPT LOTS(HOODIE&SWEATPANT)</Link>
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          // justifyContent: "space-between",
                          gap:5,
                          alignItems: "center",
                          mt: 1,
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Size: M
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          Color: Black
                        </Typography>
                      </Box>
                      <Typography sx={{ fontSize: "14px" }}>
                        Price: $100.00
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                  <Card className="product-card-">
                    <Box className="product-img">
                      <Link
                      // to={`/shop/new/${id}`}
                      >
                        <CardMedia
                          component="img"
                          height="100%"
                          image={Img}
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
                        <Link>PPT LOTS(HOODIE&SWEATPANT)</Link>
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          // justifyContent: "space-between",
                          gap:5,
                          alignItems: "center",
                          mt: 1,
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Size: M
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          Color: Black
                        </Typography>
                      </Box>
                      <Typography sx={{ fontSize: "14px" }}>
                        Price: $100.00
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

              </Grid>
            </Box>
          </Grid>
          <Grid item  lg={3} md={4} sm={12} xs={12} ml={"auto"} >
            <Grid container spacing={2}>
              <Grid item lg={12} md={12} sm={6} xs={12}>
                <Box>
                  <Box sx={{ p: 1, borderBottom: "1px solid #efc80c",display:"inline-block" }}>
                    <Typography>Shipping Details</Typography>
                  </Box>
                  <Typography sx={{ padding: "10px" }}>
                    Tanvi
                    <span
                      style={{
                        color: "#efc80c",
                        fontSize: "12px",
                        fontWeight: "400",
                        marginLeft: "20px",
                      }}
                    >
                      Home
                    </span>
                  </Typography>
                  <Typography
                    sx={{ p: "10px" }}
                    className="select-address-here"
                  >
                    <span>Gujarat, India</span>
                    <br />
                    <span>b/12 mayur vihar opposite matruvatika</span>
                    <br />
                    <span>+961 48564189</span>
                    <br />
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={12} md={12} sm={6} xs={12}>
                <Box sx={{mt:{lg:5,md:5,sm:0,xs:2}}}>
                  <Box sx={{ p: 1, borderBottom: "1px solid #efc80c",display:"inline-block" }}>
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
                      <Typography>$100.00</Typography>
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
                        gap:2,
                        
                      }}
                    >
                      <Typography sx={{borderTop:"1px solid #efc80c",flex:1,pt:1}}>Total</Typography>
                      <Typography sx={{borderTop:"1px solid #efc80c",pt:1}}>$105.00</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </Box>
  );
};

export default PurchaseDetails;
