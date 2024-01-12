import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as StarIcon } from "../../assets/img/icon/yellowfillstar.svg";
import CustomInput from "../../layout/CustomInput";
import SearchBox from "../../layout/searchcontainer/SearchBox";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box sx={{mt:20,mb:20}}>
      <SearchBox />
      <Container>
        <Grid container  spacing={2}>
          <Grid item lg={6} sm={6} md={6}>
            <Grid container>
              <Grid item lg={1} xs={1}>
                <StarIcon />
              </Grid>
              <Grid item lg={11} xs={11}>
                <Typography> LOG IN TO YOUR ACCOUNT</Typography>
                <Box>
                  <Grid container lg={9} sm={7} md={7} spacing={2} mt={2}>
                    <Grid item lg={12} xs={12}>
                      <CustomInput
                        id="Email"
                        name="Email"
                        label="E-MAIL"
                        color="primary"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item lg={12} xs={12}>
                      <CustomInput
                        id="Password"
                        name="Password"
                        label="PASSWORD"
                        color="primary"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item lg={12} xs={12}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: 3,
                        }}
                      >
                        <Button
                        component={Link}
                        to="/"
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
              <Grid item lg={12} xs={12}>
                <Box sx={{ mt: 5 }}>
                  <Typography component={Link} variant="body2">
                    HAVE YOU FORGOTTEN YOUR PASSWORD?
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={5} sm={5} md={5} xs={12}>
            <Grid container>
              <Grid item lg={1} xs={1}>
                <StarIcon />
              </Grid>
              <Grid item lg={4} md={6} sm={8} xs={11}>
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
