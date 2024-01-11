import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CustomInput from "../../layout/CustomInput";
import { ReactComponent as StarIcon } from "../../assets/img/icon/yellowfillstar.svg";

const EditAddress = ({ saveButton }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" , mt:5}}>
        <StarIcon />
        <Typography sx={{ ml: 2 }}>EDIT ADDRESS</Typography>
      </Box>
      <Box>
        <Grid container spacing={2} lg={6} sm={5} md={5} xs={12} alignItems="end">
          <Grid item lg={6}  xs={12}>
            <CustomInput
            
              type="text"
              id="name"
              name="name"
              label="NAME"
              value="NAME"
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
              value="SURNAME"
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
              <Grid item lg={2} md={2} sm={2} xs={2}>
                <CustomInput
                  placeholder="+961"
                  value="+961"
                  color="primary"
                  variant="standard"
                  label="PREFIX"
                />
              </Grid>
              <Grid item lg={10} md={10} sm={10} xs={10}>
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
          <Grid item lg={6} xs={12}>
            <CustomInput
              type="text"
              id="REGION"
              name="REGION"
              label="REGION"
              color="primary"
              variant="standard"
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: "4px",
              }}
            >
              <Button
                color="primary"
                variant="outlined"
                className="custom-button"
                onClick={() => saveButton()}
                sx={{paddingInline:"50px"}}
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
