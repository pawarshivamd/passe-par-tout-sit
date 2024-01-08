import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomInput from "../../layout/CustomInput";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
const Signout = ({ saveButton }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmDeletBox, setShowConfirmDeletBox] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleContinue = () => {
    setShowConfirmDeletBox(true);
  };

  return (
    <>
      {!showConfirmDeletBox && (
        <Box>
          <Grid container spacing={2} lg={6} xs={12}>
            <Grid item lg={12} xs={12}>
              <Typography>DELETE YOUR ACCOUNT</Typography>
              <Typography>
                You are about to begin the process to delete your account.
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <Typography>REMEMBER:</Typography>
              <Typography>
                You will not be able to track any purchase, return
                and/orexchange online.
              </Typography>
            </Grid>
            <Grid item lg={12} xs={12} sx={{ mt: 5 }}>
              <Box>
                <Button
                  onClick={handleContinue}
                  component={Link}
                  to=""
                  className="custom-button"
                  variant="outlined"
                >
                  CONTINUE
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}

      {showConfirmDeletBox && (
        <Box>
          <Grid container spacing={2} lg={6} xs={12}>
            <Grid item lg={12} xs={12}>
              <Typography>CONFIRM THE DELETION OF YOUR ACCOUNT</Typography>
              <Typography>Enter your login details to continue</Typography>
            </Grid>
            <Grid container spacing={2}>
              <Grid item lg={6} xs={12}>
                <CustomInput
                  type="email"
                  id="Email"
                  name="Email"
                  label="NEW EMAIL ADDRESS"
                  color="primary"
                  variant="standard"
                />
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item lg={6} xs={12}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel
                    htmlFor="standard-adornment-password"
                    className="textFieldcustomLable"
                  >
                    Password
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    className="customInput "
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? (
                            <RemoveRedEyeOutlinedIcon color="secondary" />
                          ) : (
                            <VisibilityOffOutlinedIcon color="secondary" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={0} sx={{ mt: 5 }}>
              <Grid item lg={6} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    onClick={() => saveButton()}
                    variant="outlined"
                    className="custom-button"
                  >
                    DELETE ALL
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Signout;
