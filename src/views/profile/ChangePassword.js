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
import { ReactComponent as Yellowfillstar } from "../../assets/img/icon/yellowfillstar.svg";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
const ChangePassword = ({ SaveButton }) => {
  const [showcurentpassword, setshowcurentpassword] = useState(false);
  const curentpasswordshow = () => setshowcurentpassword((show) => !show);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Yellowfillstar />
        <Typography sx={{ ml: 2 }}>CHANGE PASSWORD</Typography>
      </Box>
      <Box>
        <Grid container spacing={2} lg={4} xs={12}>
          <Grid item lg={12} xs={12}>
            <FormControl variant="standard" fullWidth>
              <InputLabel
                htmlFor="curent-password"
                className="textFieldcustomLable"
              >
                CURRENT PASSWORD
              </InputLabel>
              <Input
                id="current-password"
                type={showcurentpassword ? "text" : "password"}
                className="customInput"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={curentpasswordshow}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showcurentpassword ? (
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
          <Grid item lg={12} xs={12}>
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="password" className="textFieldcustomLable">
                Password
              </InputLabel>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                className="customInput"
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
                SAVE
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ChangePassword;
