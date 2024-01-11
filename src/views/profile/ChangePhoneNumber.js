import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CustomInput from "../../layout/CustomInput";
import { ReactComponent as StarIcon } from "../../assets/img/icon/yellowfillstar.svg";

const ChangePhoneNumber = ({ SaveButton }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center",mt:4 ,mb:4 }}>
        <StarIcon />
        <Typography sx={{ ml: 2 }}>CHANGE PHONE NUMBER</Typography>
      </Box>
      <Box>
        <Grid container spacing={2} lg={3} md={4} sm={4} xs={12} alignItems="end">
          <Grid item lg={12} xs={12}>
            <Grid container spacing={1}>
              <Grid item lg={2} md={2} sm={2} xs={2}>
                <CustomInput
                  placeholder="+961"
                  label="PREFIX"
                  // value="+961"
                  color="primary"
                  variant="standard"
                />
              </Grid>
              <Grid item lg={10} md={10} sm={10} xs={10}>
                <CustomInput
                  label="NEW PHONE NUMBER"
                  placeholder="00 000 000"
                  color="primary"
                  variant="standard"
                  type="number"
                />
              </Grid>
            </Grid>
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
                onClick={() => SaveButton()}
                fullWidth
              >
                UPDATE PHONE NUMBER
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ChangePhoneNumber;
