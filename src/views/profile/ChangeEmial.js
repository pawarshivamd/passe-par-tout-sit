import {
  Box,
  Button,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { ReactComponent as StarIcon } from "../../assets/img/icon/yellowfillstar.svg";
import CustomInput from "../../layout/CustomInput";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeEmail } from "../../Redux/Thunks/userThunk";
const ChangeEmial = ({ SaveButton }) => {
  const [showPassword, setShowPassword] = useState(false);
  const user_data = JSON.parse(localStorage.getItem("user_data"));

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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

  const handleSubmit = () => {
    const validationErrors = validate(userData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(changeEmail(userData))
        .then((res) => {
          console.log(res);
          const user_data2 = { ...user_data, email: userData.email };
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
      <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
        <StarIcon />
        <Typography sx={{ ml: 2 }}>CHANGE EMAIL</Typography>
      </Box>
      <Typography sx={{ ml: 2, mt: 2 }} variant="body2">
        Your current email address is:<span>{user_data.email}</span>
      </Typography>
      <Box>
        <Grid container spacing={2} lg={4} sm={5} md={5} xs={12}>
          <Grid item lg={12} xs={12}>
            <CustomInput
              autoComplete="off"
              type="email"
              id="Email"
              name="email"
              label="NEW EMAIL ADDRESS"
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              color="primary"
              variant="standard"
            />
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
                UPDATE EMAIL
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ChangeEmial;
