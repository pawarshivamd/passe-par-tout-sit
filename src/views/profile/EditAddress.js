import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CustomInput from "../../layout/CustomInput";
import { ReactComponent as Yellowfillstar } from "../../assets/img/icon/yellowfillstar.svg";

const EditAddress = () => {
    
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Yellowfillstar />
        <Typography sx={{ ml: 2 }}>EDIT ADDRESS</Typography>
      </Box>
      <Box>
        <Grid container spacing={2} lg={6} xs={12} alignItems="end">
          <Grid item lg={6} xs={12}>
            <CustomInput
              type="text"
              id="name"
              name="name"
              label="NAME"
              color="primary"
              variant="standard"
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <CustomInput
              type="text"
              id="surname"
              name="surname"
              label="SURNAME"
              color="primary"
              variant="standard"
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <CustomInput
              type="text"
              id="address"
              name="address"
              label="ADDRESS"
              color="primary"
              variant="standard"
            />
          </Grid>
          <Grid item lg={6} xs={12}>
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
          <Grid item lg={6} xs={12}>
            <CustomInput
              type="text"
              id="lebanon"
              name="lebanon"
              label="LEBANON"
              color="primary"
              variant="standard"
            />
          </Grid>
          <Grid item lg={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 3,
              }}
            >
              <Button
                color="primary"
                variant="outlined"
                className="custom-button"
              >
                SAVE
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default EditAddress;
