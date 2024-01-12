import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/img/logo.png";
import { ReactComponent as SmileICon } from "../../assets/img/icon/smile.svg";
import { ReactComponent as PhoneIcon } from "../../assets/img/icon/phone.svg";
import { ReactComponent as EmailIcon } from "../../assets/img/icon/email.svg";
import { ReactComponent as LocationIcon } from "../../assets/img/icon/loction.svg";
const Footer = () => {
  return (
    <Box className="banner-container">
    <Box sx={{ background: "#000000", padding: "50px 0px" }}>
      <Container>
        <Grid container spaceing={2} justifyContent="space-between">
          <Grid item lg={6}>
            <Box className="footer-icon-box">
              <Box>
                <img src={logo} alt="logo" />
              </Box>
              <Typography sx={{ mt: 1 }}>Lorem ipsum dolor !</Typography>
              <Typography sx={{ mt: 1 }}>
                ©2023 idol All rights reserved
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
              <Typography sx={{ textAlign: "center" }}>
                Lorem ipsum. ipsum
              </Typography>
              <Box sx={{ mt: 1, textAlign: "center" }}>
                <Typography>
                  <PhoneIcon /> Lorem ipsum dolor
                </Typography>
                <Typography>
                  <EmailIcon /> Lorem ipsum dolor
                </Typography>
                <Typography>
                  <LocationIcon /> Lorem ipsum dolor
                </Typography>
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
