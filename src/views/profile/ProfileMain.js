import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as StarIcon } from "../../assets/img/icon/yellowfillstar.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import ChangeEmial from "./ChangeEmial";
import ChangePassword from "./ChangePassword";
import EditAddress from "./EditAddress";
import Signout from "./Signout";
import ChangePhoneNumber from "./ChangePhoneNumber";
const ProfileMain = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [showbox, setshowBox] = useState(false);
  const handleClick = (link) => {
    setActiveLink(link);
    setshowBox(true);
  };
  return (
    <Box>
      <Container>
        <Box sx={{ mt: 2 }}>
          {!showbox && (
            <Box>
              <Grid container spacing={2}>
                <Grid item lg={4}>
                  <Typography>My Account</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item lg={4} xs={8}>
                  <Box sx={{ display: "flex" }}>
                    <StarIcon />
                    <Box sx={{ ml: 2 }}>
                      <Typography>
                        <Link onClick={() => handleClick("addresses")}>
                          ADDRESSES
                        </Link>
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={1} xs={1}>
                  <Link onClick={() => handleClick("addresses")}>
                    <ArrowForwardIosIcon sx={{ width: "15px" }} />
                  </Link>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item lg={4} xs={8}>
                  <Box sx={{ display: "flex" }}>
                    <StarIcon />
                    <Box sx={{ ml: 2 }}>
                      <Typography>
                        <Link onClick={() => handleClick("email")}>EMAIL</Link>
                      </Typography>
                      <Typography variant="body2">
                        loremipsum@gmail.com
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={1} xs={1}>
                  <Link onClick={() => handleClick("email")}>
                    <ArrowForwardIosIcon sx={{ width: "15px" }} />
                  </Link>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item lg={4} xs={8}>
                  <Box sx={{ display: "flex" }}>
                    <StarIcon />
                    <Box sx={{ ml: 2 }}>
                      <Typography>
                        <Link onClick={() => handleClick("phone")}>PHONE</Link>
                      </Typography>
                      <Typography variant="body2">+961 00 000 000</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={1} xs={1}>
                  <Link onClick={() => handleClick("phone")}>
                    <ArrowForwardIosIcon sx={{ width: "15px" }} />
                  </Link>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item lg={4} xs={8}>
                  <Box sx={{ display: "flex" }}>
                    <StarIcon />
                    <Box sx={{ ml: 2 }}>
                      <Typography>
                        <Link onClick={() => handleClick("changePassword")}>
                          CHANGE PASSWORD
                        </Link>
                      </Typography>
                      <Typography variant="body2">...........</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={1} xs={1}>
                  <Link onClick={() => handleClick("changePassword")}>
                    <ArrowForwardIosIcon sx={{ width: "15px" }} />
                  </Link>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item lg={4} xs={12}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ mt: 5, mr: 3 }}>
                      <Button
                        onClick={() => handleClick("signout")}
                        className="custom-button"
                        variant="outlined"
                      >
                        Sign out
                      </Button>
                    </Box>
                    <Box sx={{ mt: 5 }}>
                      <Button
                        component={Link}
                        to="/"
                        className="custom-button"
                        variant="outlined"
                      >
                        Delete your account
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}
          {showbox && (
            <Box>
              {activeLink === "addresses" && (
                <EditAddress saveButton={() => setshowBox(false)} />
              )}
              {activeLink === "email" && (
                <ChangeEmial SaveButton={() => setshowBox(false)} />
              )}
              {activeLink === "phone" && (
                <ChangePhoneNumber SaveButton={() => setshowBox(false)} />
              )}
              {activeLink === "changePassword" && (
                <ChangePassword SaveButton={() => setshowBox(false)} />
              )}
              {activeLink === "signout" && (
                <Signout saveButton={() => setshowBox(false)} />
              )}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ProfileMain;
