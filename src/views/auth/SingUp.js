import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchBox from "../../layout/searchcontainer/SearchBox";
import CustomInput from "../../layout/CustomInput";
import { ReactComponent as StarIcon } from "../../assets/img/icon/yellowfillstar.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/api";
const SingUp = () => {
  const data = useSelector((state) => state.auth.user);
  const [userData, setUserData] = useState(data);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(loginUser(userData));
  };

  console.log(userData, data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Box sx={{ mt: 20 }} className="sing-up-section">
      <SearchBox />
      <Container>
        <Grid container lg={12} spacing={2}>
          <Grid item lg={6}>
            <Grid container sx={{ mb: 5 }}>
              <Grid item lg={1} xs={1}>
                <StarIcon />
              </Grid>
              <Grid item lg={11} xs={11}>
                <Typography>PERSONAL DETAILS</Typography>
                <Box>
                  <Grid container lg={9} sm={5} md={5} spacing={2}>
                    <Grid item lg={12} xs={12}>
                      <CustomInput
                        id="E-MAIL"
                        name="email"
                        label="E-MAIL"
                        color="primary"
                        variant="standard"
                        value={userData?.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item lg={12} xs={12}>
                      <CustomInput
                        id="PASSWORD"
                        name="password"
                        label="PASSWORD"
                        color="primary"
                        variant="standard"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item lg={12} xs={12}>
                      <CustomInput
                        id="NAME"
                        name="name"
                        label="NAME"
                        color="primary"
                        variant="standard"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item lg={12} xs={12}>
                      <CustomInput
                        id="SURNAME"
                        name="surname"
                        label="SURNAME"
                        color="primary"
                        variant="standard"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item lg={12} xs={12}>
                      <Grid container spacing={1}>
                        <Grid item lg={2} xs={2}>
                          <CustomInput
                            placeholder="+961"
                            value="+961"
                            color="primary"
                            variant="standard"
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item lg={10} xs={10}>
                          <CustomInput
                            placeholder="00 000 000"
                            color="primary"
                            name="phoneno"
                            variant="standard"
                            type="number"
                            onChange={handleChange}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item lg={12} xs={12}>
                      <Typography variant="subtitle2">
                        We will send an SMS to verify your phone number
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lg={12}
                      sx={{ display: "flex ", alignItems: "center" }}
                    >
                      <Box sx={{ mr: 1 }} className="star-icon">
                        <StarIcon stroke="#EFC80C" />
                      </Box>
                      <Typography variant="body2">
                        I have read and understand the Privacy and Cookies
                        Policy
                      </Typography>
                    </Grid>
                    <Grid item lg={12}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: 3,
                        }}
                      >
                        <Button
                          component={Link}
                          onClick={handleSubmit}
                          to="/"
                          variant="outlined"
                          className="custom-button"
                          sx={{ minWidth: "200px", padding: "10px 20px" }}
                        >
                          Create Account
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SingUp;
