import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as StarIcon } from "../../assets/img/icon/yellowfillstar.svg";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../Redux/Thunks/userThunk";
const ChangePassword = ({ SaveButton }) => {
  const [showcurentpassword, setshowcurentpassword] = useState(false);
  const curentpasswordshow = () => setshowcurentpassword((show) => !show);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //change password

  const [userData, setUserData] = useState({
    old_password: "",
    new_password: "",
  });
  const [errors, setErrors] = useState({});
  const user_data = JSON.parse(localStorage.getItem("user_data"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData({ ...userData, [name]: type === "checkbox" ? checked : value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };
  console.log(userData);

  const validate = (values) => {
    let errors = {};

    // Email validation
    // if (!values.mobile) {
    //   errors.mobile = "Mobile number is required";
    // } else if (values.mobile.length < 8) {
    //   // Adjust based on expected format, e.g., including country code
    //   errors.mobile = "Mobile number is invalid";
    // }

    // // Country_code validation
    // if (!values.country_code) {
    //   errors.country_code = "Country Code is required";
    // }

    // Password validation
    if (!values.old_password) {
      errors.old_password = "Old Password is required";
    } else if (values.old_password.length < 6) {
      errors.old_password = "Password must be at least 6 characters";
    }

    if (!values.new_password) {
      errors.new_password = "New Password is required";
    } else if (values.new_password.length < 6) {
      errors.new_password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const handleSubmit = () => {
    const validationErrors = validate(userData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(changePassword(userData))
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", mt: 4, mb: 4 }}>
        <StarIcon />
        <Typography sx={{ ml: 2 }}>CHANGE PASSWORD</Typography>
      </Box>
      <Box>
        <Grid container spacing={2} lg={3} sm={4} md={4} xs={12}>
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
                name="old_password"
                onChange={handleChange}
                endadornment={
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
              {errors.old_password && (
                <FormHelperText style={{ color: "red" }}>
                  {errors.old_password}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item lg={12} xs={12}>
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="password" className="textFieldcustomLable">
                NEW PASSWORD
              </InputLabel>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                className="customInput"
                name="new_password"
                onChange={handleChange}
                endadornment={
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
              {errors.new_password && (
                <FormHelperText style={{ color: "red" }}>
                  {errors.new_password}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item lg={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 5,
              }}
            >
              <Button
                color="primary"
                variant="outlined"
                className="custom-button"
                onClick={() => handleSubmit()}
                fullWidth
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
