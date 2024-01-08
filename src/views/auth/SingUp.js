import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import SearchBox from "../../layout/searchcontainer/SearchBox";
import CustomInput from "../../layout/CustomInput";
import yellowfillstar from "../../assets/img/icon/yellowfillstar.svg";
import { ReactComponent as Yellowfillstar } from "../../assets/img/icon/yellowfillstar.svg";
const SingUp = () => {
  return (
    <Box>
      <SearchBox />
      <Container>
        <Grid container lg={12} spacing={2}>
          <Grid item lg={6}>
            <Grid container>
              <Grid item lg={1}>
                <img src={yellowfillstar} alt="star" />
              </Grid>
              <Grid item lg={11}>
                <Typography>PERSONAL DETAILS</Typography>
                <Box>
                  <Grid container lg={9} spacing={2}>
                    <Grid item lg={12}>
                      <CustomInput
                        id="E-MAIL"
                        name="E-MAIL"
                        label="E-MAIL"
                        color="primary"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item lg={12}>
                      <CustomInput
                        id="PASSWORD"
                        name="PASSWORD"
                        label="PASSWORD"
                        color="primary"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item lg={12}>
                      <CustomInput
                        id="NAME"
                        name="NAME"
                        label="NAME"
                        color="primary"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item lg={12}>
                      <CustomInput
                        id="SURNAME"
                        name="SURNAME"
                        label="SURNAME"
                        color="primary"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item lg={12}>
                      <Grid container spacing={1}>
                        <Grid item lg={2}>
                          <CustomInput
                            placeholder="+961"
                            value="+961"
                            color="primary"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item lg={10}>
                          <CustomInput
                            placeholder="00 000 000"
                            color="primary"
                            variant="standard"
                            type="number"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item lg={12}>
                      <Typography variant="subtitle2">
                        We will send an SMS to verify your phone number
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lg={12}
                      sx={{ display: "flex ", alignItems: "center" }}
                    >
                      <Box sx={{ mr: 1 }}>
                        <Yellowfillstar style={{ fill: "transparent" }} />
                      </Box>
                      <Typography>
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
                          variant="outlined"
                          className="custom-button"
                          sx={{ minWidth: "200px", padding: "10px 20px" }}
                        >
                          {" "}
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
