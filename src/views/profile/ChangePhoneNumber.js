import { Box, Button, Grid, Typography } from "@mui/material";
import {
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import React, { useState, useEffect } from "react";
import CustomInput from "../../layout/CustomInput";
import { ReactComponent as StarIcon } from "../../assets/img/icon/yellowfillstar.svg";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeMobileNo } from "../../Redux/Thunks/userThunk";

const ChangePhoneNumber = ({ SaveButton }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    mobile: "",
    password: "",
    country_code: "+961",
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
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validate = (values) => {
    let errors = {};

    // Email validation
    if (!values.mobile) {
      errors.mobile = "Mobile number is required";
    } else if (values.mobile.length < 8) {
      // Adjust based on expected format, e.g., including country code
      errors.mobile = "Mobile number is invalid";
    }

    // Country_code validation
    if (!values.country_code) {
      errors.country_code = "Country Code is required";
    }

    // Password validation
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const handleSubmit = () => {
    const validationErrors = validate(userData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(changeMobileNo(userData))
        .then((res) => {
          console.log(res);
          const user_data2 = {
            ...user_data,
            country_code: userData.country_code,
            mobile: userData.mobile,
          };
          localStorage.removeItem("user_data");
          localStorage.setItem("user_data", JSON.stringify(user_data2));
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
        <Typography sx={{ ml: 2 }}>CHANGE PHONE NUMBER</Typography>
      </Box>
      <Box>
        <Grid
          container
          spacing={2}
          lg={3}
          md={4}
          sm={4}
          xs={12}
          alignItems="end"
        >
          <Grid item lg={12} xs={12}>
            <Grid container spacing={1}>
              <Grid item lg={2} md={2} sm={2} xs={2}>
                <CustomInput
                  placeholder="+961"
                  label="PREFIX"
                  // value="+961"
                  value={userData.country_code}
                  // autofocus
                  error={Boolean(errors.country_code)}
                  helperText={errors.country_code}
                  color="primary"
                  variant="standard"
                />
              </Grid>
              <Grid item lg={10} md={10} sm={10} xs={10}>
                <CustomInput
                  label="NEW PHONE NUMBER"
                  placeholder="00 000 000"
                  color="primary"
                  name="mobile"
                  value={userData.mobile}
                  // onChange={handleChange}
                  error={Boolean(errors.mobile)}
                  helperText={errors.mobile}
                  variant="standard"
                  type="tel"
                  onChange={(e) => {
                    // Remove non-numeric characters
                    const sanitizedValue = e.target.value.replace(/\D/g, "");
                    // Update the state with the sanitized value
                    handleChange({
                      target: {
                        name: "mobile",
                        value: sanitizedValue,
                      },
                    });
                  }}
                  inputProps={{
                    maxLength: 8,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={12} xs={12}>
            <FormControl variant="standard" fullWidth>
              <InputLabel
                htmlFor="standard-adornment-password"
                className="textFieldcustomLable"
              >
                Password
              </InputLabel>
              <Input
                autoComplete="off"
                onChange={handleChange}
                value={userData.password}
                id="standard-adornment-password"
                name="password"
                type={showPassword ? "text" : "password"}
                className="customInput "
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
              {errors.password && (
                <FormHelperText style={{ color: "red" }}>
                  {errors.password}
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
                mt: 3,
              }}
            >
              <Button
                color="primary"
                variant="outlined"
                className="custom-button"
                onClick={() => handleSubmit()}
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
