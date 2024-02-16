import React, { useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { ReactComponent as StarIcon } from "../../assets/img/icon/yellowfillstar.svg";
import CustomInput from "../../layout/CustomInput";
import SearchBox from "../../layout/searchcontainer/SearchBox";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUserDetails } from "../../Redux/Thunks/userThunk";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("btn clicked");
    dispatch(fetchUserDetails({ values, navigate }));
  };

  return (
    <Box sx={{ mt: 20, mb: 20 }}>
      <SearchBox />
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6} sm={6} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={1} lg={1}>
                <StarIcon />
              </Grid>
              <Grid item xs={11} lg={11}>
                <Typography>LOG IN TO YOUR ACCOUNT</Typography>
                <Box>
                  <Grid
                    item
                    // spacing={2}
                    mt={2}
                    lg={9}
                    md={7}
                    sm={7}
                    component="form"
                    onSubmit={handleSubmit}
                  >
                    <Grid item xs={12} lg={12}>
                      <CustomInput
                        id="Email"
                        name="email"
                        label="E-MAIL"
                        color="primary"
                        variant="standard"
                        onChange={handleChange}
                        value={values.email}
                      />
                    </Grid>
                    <Grid item xs={12} lg={12} sx={{ mt: 2 }}>
                      <CustomInput
                        id="Password"
                        name="password"
                        label="PASSWORD"
                        color="primary"
                        variant="standard"
                        onChange={handleChange}
                        value={values.password}
                        type="password"
                      />
                    </Grid>
                    <Grid item xs={12} lg={12}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: 3,
                        }}
                      >
                        <Button
                          // component={Link}
                          // to="/"
                          type="submit"
                          variant="outlined"
                          className="custom-button"
                          sx={{ minWidth: "200px", padding: "10px 20px" }}
                        >
                          Log in
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Box sx={{ mt: 5 }}>
                  <Typography component={Link} variant="body2">
                    HAVE YOU FORGOTTEN YOUR PASSWORD?
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={5} sm={5} md={5}>
            <Grid container>
              <Grid item xs={1} lg={1}>
                <StarIcon />
              </Grid>
              <Grid item xs={11} lg={4} md={6} sm={8}>
                <Box>NEED AN ACCOUNT?</Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                  <Button
                    component={Link}
                    to="/register"
                    variant="outlined"
                    className="custom-button"
                    sx={{ padding: "10px 20px" }}
                  >
                    REGISTER
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
