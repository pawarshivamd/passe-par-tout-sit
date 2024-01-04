import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import SearchBox from "../../layout/searchcontainer/SearchBox";
import CustomInput from "../../layout/CustomInput";

const AddressMain = () => {
  return (
    <Box sx={{mb:5}}>
      <SearchBox />
      <Container>
        <Grid
          container
          lg={6}
          spacing={2}
          rowGap={3}
          alignItems="end"
        >
          <Grid item lg={12} xs={12}>
            <Typography>EDIT YOUR BILLING ADDRESS</Typography>
            <Typography sx={{ mt: 2 }}>
              To place your order, you must first fill in your account details.
            </Typography>
          </Grid>
          <Grid item lg={6}>
            <CustomInput
              id="NAME"
              name="NAME"
              label="NAME"
              color="primary"
              variant="standard"
            />
          </Grid>
          <Grid item lg={6}>
            <CustomInput
              id="SURNAME"
              name="SURNAME"
              label="SURNAME"
              color="primary"
              variant="standard"
            />
          </Grid>
          <Grid item lg={6}>
            <CustomInput
              id="ADDRESS"
              name="ADDRESS"
              label="ADDRESS"
              color="primary"
              variant="standard"
            />
          </Grid>
          <Grid item lg={6}>
            <Grid container spacing={2}>
              <Grid item lg={3}>
                <CustomInput
                  placeholder="+961"
                  value="+961"
                  color="primary"
                  variant="standard"
                />
              </Grid>
              <Grid item lg={9}>
                <CustomInput
                  placeholder="00 000 000"
                  color="primary"
                  variant="standard"
                  type="number"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6}>
            <CustomInput
              id="DISTRICT"
              name="DISTRICT"
              label="DISTRICT"
              color="primary"
              variant="standard"
            />
          </Grid>
          <Grid item lg={6}>
            <CustomInput
              id="LOCALITY"
              name="LOCALITY"
              label="LOCALITY"
              color="primary"
              variant="standard"
            />
          </Grid>
          <Grid item lg={6}>
            <CustomInput
              id="LEBANON"
              name="LEBANON"
              label="LEBANON"
              color="primary"
              variant="standard"
            />
          </Grid>
          <Grid item lg={6}>
            <Button variant="outlined" className="custom-button">
              SAVE & CONTINUE
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AddressMain;
