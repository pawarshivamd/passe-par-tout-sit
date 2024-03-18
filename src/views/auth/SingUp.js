import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchBox from "../../layout/searchcontainer/SearchBox";
import CustomInput from "../../layout/CustomInput";
import { ReactComponent as StarIcon } from "../../assets/img/icon/yellowfillstar.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/api";
import { registerUser } from "../../Redux/Thunks/userThunk";
import Notification from "../../utils/Notification";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const SingUp = () => {
  // const data = useSelector((state) => state.auth.user);
  // const [userData, setUserData] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    mobile: "",
    country_code: "+961",
    agreedToPolicy: false,
  });

  console.log(userData);

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = (values) => {
    let errors = {};

    // Email validation
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    // Password validation
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    // First Name validation
    if (!values.first_name) {
      errors.first_name = "First name is required";
    }

    // Last Name validation
    if (!values.last_name) {
      errors.last_name = "Last name is required";
    }

    // Mobile validation
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

    if (!values.agreedToPolicy) {
      errors.agreedToPolicy =
        "You must agree to the Privacy and Cookies Policy to proceed";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData({ ...userData, [name]: type === "checkbox" ? checked : value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // const handleAgreeToPolicyChange = () => {
  //   setUserData((prevState) => ({
  //     ...prevState,
  //     agreedToPolicy: !prevState.agreedToPolicy,
  //   }));
  // };

  // const handleSubmit = () => {
  //   dispatch(registerUser(userData));
  // };

  const handleSubmit = () => {
    const validationErrors = validate(userData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const userData2 = {
        ...userData,
        name: userData.first_name + userData.last_name,
      };
      dispatch(registerUser(userData2))
        .then((res) => {
          console.log(res);
          // Navigate("/login");
          if (res.payload.id) {
            navigate("/login");
          } else {
            Notification("error", res.payload);
          }
        })
        .catch((err) => {
          console.log(err.payload);
        });
    }
  };

  console.log(userData, "userData");

  // console.log(userData, data);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box sx={{ mt: 20 }} className="sing-up-section">
      <SearchBox />
      <Container>
        <Grid container lg={12} spacing={2}>
          <Grid item lg={6}>
            <Grid container sx={{ mb: 5 }}>
              <Grid item lg={1} xs={1}>
                <StarIcon />
              </Grid>
              <Grid item lg={11} xs={11}>
                <Typography>PERSONAL DETAILS</Typography>
                <Box>
                  <Grid container lg={9} sm={5} md={5} spacing={2}>
                    <Grid item lg={12} xs={12}>
                      <CustomInput
                        id="E-MAIL"
                        name="email"
                        label="E-MAIL"
                        value={userData.email}
                        color="primary"
                        variant="standard"
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item lg={12} xs={12}>
                      <CustomInput
                        id="PASSWORD"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={userData.password}
                        label="PASSWORD"
                        error={Boolean(errors.password)}
                        helperText={errors.password}
                        color="primary"
                        variant="standard"
                        onChange={handleChange}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                sx={{ color: "white" }}
                                onClick={togglePasswordVisibility}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item lg={12} xs={12}>
                      <CustomInput
                        id="NAME"
                        name="first_name"
                        label="NAME"
                        value={userData.first_name}
                        error={Boolean(errors.first_name)}
                        helperText={errors.first_name}
                        color="primary"
                        variant="standard"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item lg={12} xs={12}>
                      <CustomInput
                        id="SURNAME"
                        name="last_name"
                        label="SURNAME"
                        value={userData.last_name}
                        error={Boolean(errors.last_name)}
                        helperText={errors.last_name}
                        color="primary"
                        variant="standard"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item lg={12} xs={12}>
                      <Grid container spacing={1}>
                        <Grid item lg={2} xs={2}>
                          <CustomInput
                            placeholder="+961"
                            // value="+961"
                            value={userData.country_code}
                            name="country_code"
                            color="primary"
                            readOnly
                            error={Boolean(errors.country_code)}
                            helperText={errors.country_code}
                            variant="standard"
                            // onChange={handleChange}
                          />
                        </Grid>
                        <Grid item lg={10} xs={10}>
                          <CustomInput
                            placeholder="00 000 000"
                            color="primary"
                            name="mobile"
                            value={userData.mobile}
                            error={Boolean(errors.mobile)}
                            helperText={errors.mobile}
                            variant="standard"
                            type="tel"
                            // onChange={handleChange}
                            onChange={(e) => {
                              // Remove non-numeric characters
                              const sanitizedValue = e.target.value.replace(
                                /\D/g,
                                ""
                              );
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
                      <Typography variant="subtitle2">
                        We will send an SMS to verify your phone number
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lg={12}
                      sx={{ display: "flex ", alignItems: "center" }}
                    >
                      <Box
                        sx={{ mr: 1 }}
                        className={` ${
                          userData.agreedToPolicy
                            ? "star-icon-fill"
                            : "star-icon"
                        }`}
                        onClick={() =>
                          handleChange({
                            target: {
                              name: "agreedToPolicy",
                              type: "checkbox",
                              checked: !userData.agreedToPolicy,
                            },
                          })
                        }
                      >
                        <StarIcon stroke="#EFC80C" />
                      </Box>
                      <Typography variant="body2">
                        I have read and understand the Privacy and Cookies
                        Policy
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lg={12}
                      sx={{ display: "flex ", alignItems: "center" }}
                    >
                      {errors.agreedToPolicy && (
                        <FormHelperText style={{ color: "red" }}>
                          {errors.agreedToPolicy}
                        </FormHelperText>
                      )}
                    </Grid>

                    <Grid item lg={12}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: 3,
                        }}
                      >
                        <Button
                          component={Link}
                          onClick={handleSubmit}
                          variant="outlined"
                          className="custom-button"
                          sx={{ minWidth: "200px", padding: "10px 20px" }}
                        >
                          Create Account
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SingUp;
