import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/img/logo.png";
import { ReactComponent as SmileICon } from "../../assets/img/icon/smile.svg";
import { ReactComponent as PhoneIcon } from "../../assets/img/icon/phone.svg";
import { ReactComponent as EmailIcon } from "../../assets/img/icon/email.svg";
import InstagramIcon from "@mui/icons-material/Instagram";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Box className="banner-container">
      <Box sx={{ background: "#000000", padding: "50px 0px" }}>
        <Container>
          <Grid container spaceing={2} justifyContent="space-between">
            <Grid item lg={8}>
              <Box className="footer-icon-box">
                <Box>
                  <img src={logo} alt="logo" />
                </Box>
                <Typography sx={{ mt: 1 }}>
                  &copy;2024 ppt All rights reserved <br /> powered by{" "}
                  <Link to="https://creativecartel.me/">Creative Cartel</Link>
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={3}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <SmileICon width={100} height={100} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ mt: 1, textAlign: "center" }}>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px",my:1 }}
                  >
                    <PhoneIcon />
                    <Link to="tel:+961 70 154 218">+961 70 154 218</Link>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px",my:1 }}
                  >
                    <EmailIcon />
                    <Link to="mailto:swag@pptthebrand.com">swag@pptthebrand.com</Link>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px",my:1 }}
                  >
                    <InstagramIcon fontSize="15px" />
                    <Link to="https://www.instagram.com/pptthebrand/">pptthebrand</Link>
                  </Box>
                  
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
