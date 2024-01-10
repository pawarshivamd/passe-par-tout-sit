import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import SearchBox from "../../layout/searchcontainer/SearchBox";
import CustomInput from "../../layout/CustomInput";
import { Link } from "react-router-dom";

const AddressMain = () => {
  return (
    <Box sx={{ mb: 5,mt:20 }}>
      <SearchBox />
      <Container>
        <Grid container lg={6} md={8} spacing={2}  alignItems="end">
          <Grid item lg={12} xs={12}>
            <Typography>EDIT YOUR BILLING ADDRESS</Typography>
            <Typography sx={{ mt: 2 }} variant="body2">
              To place your order, you must first fill in your account details.
            </Typography>
          </Grid>

          <Grid item lg={6} md={6} sm={6}  xs={12}>
            <CustomInput
              id="NAME"
              name="NAME"
              label="NAME"
              color="primary"
              variant="standard"
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <CustomInput
              id="SURNAME"
              name="SURNAME"
              label="SURNAME"
              color="primary"
              variant="standard"
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6}  xs={12}>
            <CustomInput
              id="ADDRESS"
              name="ADDRESS"
              label="ADDRESS"
              color="primary"
              variant="standard"
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6}  xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={3} md={2} sm={2} xs={2}>
                <CustomInput
                  placeholder="+961"
                  value="+961"
                  color="primary"
                  variant="standard"
                  label="PREFIX"
                />
              </Grid>
              <Grid item lg={9} xs={10}>
                <CustomInput
                  placeholder="00 000 000"
                  color="primary"
                  variant="standard"
                  type="number"
                  label="TELEPHONE"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={6}  xs={12}>
            <CustomInput
              id="DISTRICT"
              name="DISTRICT"
              label="DISTRICT"
              color="primary"
              variant="standard"
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6}  xs={12}>
            <CustomInput
              id="LOCALITY"
              name="LOCALITY"
              label="LOCALITY"
              color="primary"
              variant="standard"
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6}  xs={12}>
            <CustomInput
              id="REGION"
              name="REGION"
              label="REGION"
              color="primary"
              variant="standard"
            />
          </Grid>
          <Grid item lg={6}>
            <Button sx={{ml:2,marginBottom:"5px"}} component={Link} to="/shopping-bag" variant="outlined" className="custom-button">
              SAVE & CONTINUE
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AddressMain;
