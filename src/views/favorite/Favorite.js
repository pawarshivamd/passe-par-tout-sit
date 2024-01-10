import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { ShopData } from "../Shop/Shop";
import { Link } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../../assets/img/icon/closeicon.svg";

const Favorite = () => {
  return (
    <Box sx={{ mt: 5 ,mb:5 }}>
    <Container>
      <Grid container spacing={2}>
        {ShopData.filter((item) => item.id === "0").map((cureEle, index) => {
          const { ShopImg, ImgAlt, MainText, Price } = cureEle;
          return (
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Card sx={{ borderRadius: "0px",boxShadow:"none" }}>
                <Box
                  sx={{
                    height: "350px",
                    width: "min(100% - 0px, 100%)",
                    marginInline: "auto",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="100%"
                    image={ShopImg}
                    alt={ImgAlt}
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
      </Grid>
      </Container>
    </Box>
  );
};

export default Favorite;
