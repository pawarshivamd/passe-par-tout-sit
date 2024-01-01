import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import yellowfillstar from "../../assets/img/icon/yellowfillstar.svg";
// import Navbar from '../Navbar/Navbar'
import { useTheme } from "@mui/material/styles";
import CustomInput from "../../layout/CustomInput";
import SearchBox from "../../layout/searchcontainer/SearchBox";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <Box>
      <SearchBox />
      <Container>
        <Grid container lg={12} spacing={2}>
          <Grid item lg={6}>
            <Grid container>
              <Grid item lg={1}>
                {" "}
                <img src={yellowfillstar} alt="star" />
              </Grid>
              <Grid item lg={11}>
                <Typography> LOG IN TO YOUR ACCOUNT</Typography>
                <Box>
                  <Grid container lg={9} spacing={2} mt={2}>
                    <Grid item lg={12}>
                      <CustomInput
                        id="Email"
                        name="Email"
                        label="Email"
                        color="primary"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item lg={12}>
                      <CustomInput
                        id="Password"
                        name="Password"
                        label="Password"
                        color="primary"
                        variant="standard"
                      />
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
                          variant="outlined"
                          className="custom-button"
                          sx={{ minWidth: "200px", padding: "10px 20px" }}
                        >
                          {" "}
                          Log in
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item lg={12}>
                <Box sx={{ mt: 5 }}>
                  <Typography component={Link}>
                    HAVE YOU FORGOTTEN YOUR PASSWORD?
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4}>
            <Grid container>
              <Grid item lg={1} xs={1}>
                <img src={yellowfillstar} alt="star" />
              </Grid>
              <Grid item lg={5} xs={11}>
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
