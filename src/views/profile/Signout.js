import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../../layout/CustomInput";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { deleteAccount } from "../../Redux/Thunks/userThunk";
import { useDispatch } from "react-redux";
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

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  console.log(errors);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(userData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData({ ...userData, [name]: type === "checkbox" ? checked : value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

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

    return errors;
  };

  const handleSubmit = async () => {
    const validationErrors = validate(userData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const actionResult = await dispatch(deleteAccount(userData));
      const result = actionResult;
      console.log(result, "resultresultresult");
      if (result) {
        // Navigate or perform other actions after successful deletion
        navigate("/");
        window.location.reload();
      }
      // .then((res) => {
      //   console.log(res);
      //   localStorage.clear();
      //   navigate("/");
      //   window.location.reload();
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
    }
  };

  return (
    <>
      {!showConfirmDeletBox && (
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2} lg={6} md={6} sm={6} xs={12}>
            <Grid item lg={12} xs={12}>
              <Typography>DELETE YOUR ACCOUNT</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                You are about to begin the process to delete your account.
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <Typography>REMEMBER:</Typography>
              <Typography variant="body2">
                You will not be able to track any purchase, return
                and/orexchange online.
              </Typography>
            </Grid>
            <Grid item lg={12} xs={12} sx={{ mt: 5 }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  onClick={handleContinue}
                  component={Link}
                  to=""
                  className="custom-button"
                  variant="outlined"
                  sx={{ paddingInline: "50px" }}
                >
                  CONTINUE
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}

      {showConfirmDeletBox && (
        <Box sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={2} lg={6} sm={6} md={6} xs={12}>
            <Grid item lg={12} xs={12}>
              <Typography>CONFIRM THE DELETION OF YOUR ACCOUNT</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Enter your login details to continue
              </Typography>
            </Grid>
            <Grid container spacing={2}>
              <Grid item lg={6} xs={12}>
                <CustomInput
                  type="email"
                  id="Email"
                  name="email"
                  label="EMAIL"
                  color="primary"
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  onChange={handleChange}
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
                    PASSWORD
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    className="customInput "
                    onChange={handleChange}
                    name="password"
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
                    component={Link}
                    // to="/"
                    onClick={() => handleSubmit()}
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
