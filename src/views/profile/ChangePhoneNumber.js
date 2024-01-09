import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CustomInput from "../../layout/CustomInput";
import { ReactComponent as StarIcon } from "../../assets/img/icon/yellowfillstar.svg";
import { Sd } from "@mui/icons-material";

const ChangePhoneNumber = ({ SaveButton }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <StarIcon />
        <Typography sx={{ ml: 2 }}>EDIT ADDRESS</Typography>
      </Box>
      <Box>
        <Grid container spacing={2} lg={6} xs={12} alignItems="end">
          <Grid item lg={6} xs={12}>
            <Grid container spacing={1}>
              <Grid item lg={2}>
                <CustomInput
                  placeholder="+961"
                  lable="PREFIX"
                  value="+961"
                  color="primary"
                  variant="standard"
                />
              </Grid>
              <Grid item lg={10}>
                <CustomInput
                  lable="NEW PHONE NUMBER"
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
