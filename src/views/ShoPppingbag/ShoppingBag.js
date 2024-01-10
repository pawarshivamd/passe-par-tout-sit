import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ShopData } from "../Shop/Shop";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../../assets/img/icon/closeicon.svg";
import SearchBox from "../../layout/searchcontainer/SearchBox";
import ContinueProFooter from "../../layout/ContinueProFooter";
import Favorite from "../favorite/Favorite";
import { ReactComponent as StarIcon } from "../../assets/img/icon/yellowfillstar.svg";

const ShoppingBag = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <Box sx={{mt:20}}>
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
              <NavLink>Shopping Bag (0)</NavLink>
            </Typography>
            <Typography
              onClick={() => handleTabChange(2)}
              style={{
                borderBottom: activeTab === 2 ? "1px solid #EFC80C" : "none",
              }}
            >
              <NavLink> Favorite <StarIcon/> </NavLink>
            </Typography>
          </Box>
          </Box>
          </Container>
          <Box>
            {activeTab === 1 && (
              <Box sx={{ mt: 5 }}>
              <Container>
                <Grid container spacing={2}>
                  {ShopData.filter(
                    (item) => item.id === "0" || item.id === "1"
                  ).map((cureEle, index) => {
                    const { ShopImg, ImgAlt, MainText, Price } = cureEle;
                    return (
                      <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Card sx={{ borderRadius: "0px" ,boxShadow:"none"}}>
                          <Box
                            sx={{
                              height: "450px",
                              width: "min(100% - 0px, 100%)",
                              marginInline: "auto",
                            }}
                          >
                            <CardMedia
                              component="img"
                              height="100%"
                              image={ShopImg}
                              alt={ImgAlt}
                              sx={{objectFit:"contain"}}
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
                <ContinueProFooter BtnText="Continue" to="/address" />
              </Box>
            )}
            {activeTab === 2 && <Favorite />}
          </Box>      
    </Box>
  );
};

export default ShoppingBag;
