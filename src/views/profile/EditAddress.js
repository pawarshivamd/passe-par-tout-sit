import React, { useState, useEffect } from "react";
import CustomInput from "../../layout/CustomInput";
import { ReactComponent as StarIcon } from "../../assets/img/icon/yellowfillstar.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAddress } from "../../Redux/Thunks/addressThunk";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Notification from "../../utils/Notification";

const EditAddress = ({ saveButton }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    address: "",
    country_code: "+961",
    mobile: "",
    district: "",
    // locality: "",
    region: "",
    address_type: "",
  });

  console.log(values);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const [errors, setErrors] = useState({});

  const validate = (val) => {
    let errors = {};

    if (!val.firstname) {
      errors.firstname = "First name is required";
    }

    if (!val.mobile) {
      errors.mobile = "Mobile number is required";
    } else if (val.mobile.length < 8) {
      // Adjust based on expected format, e.g., including country code
      errors.mobile = "Mobile number is invalid";
    }

    if (!val.lastname) {
      errors.lastname = "Last name is required";
    }

    if (!val.country_code) {
      errors.country_code = "Required ";
    }

    if (!val.district) {
      errors.district = "District is required";
    }

    // if (!val.locality) {
    //   errors.locality = "Locality is required";
    // }

    if (!val.region) {
      errors.region = "Region is required";
    }

    if (!val.address) {
      errors.address = "Address is required";
    }
    if (!val.address_type) {
      errors.address_type = "Address type is required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErros = validate(values);
    setErrors(validationErros);
    if (Object.keys(validationErros).length === 0) {
      dispatch(addAddress(values))
        .then((res) => {
          console.log(res);
          Notification("success", res.payload.message);
          saveButton();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", mt: 5 }}>
        <StarIcon />
        <Typography sx={{ ml: 2 }}>EDIT ADDRESS</Typography>
      </Box>
      {/* <Box>
        <Grid
          container
          spacing={2}
          lg={6}
          sm={5}
          md={5}
          xs={12}
          alignItems="end"
        >
          <Grid item lg={6} xs={12}>
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
                sx={{ paddingInline: "50px" }}
              >
                SAVE
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box> */}
      <Grid
        container
        lg={6}
        md={8}
        spacing={2}
        alignItems="end"
        component="form"
        onSubmit={handleSubmit}
      >
        {/* <Grid item lg={12} xs={12}>
          <Typography>EDIT YOUR BILLING ADDRESS</Typography>
          <Typography sx={{ mt: 2 }} variant="body2">
            To place your order, you must first fill in your account details.
          </Typography>
        </Grid> */}

        <Grid item lg={6} md={6} sm={6} xs={12}>
          <CustomInput
            id="NAME"
            name="firstname"
            label="NAME"
            color="primary"
            variant="standard"
            onChange={handleChange}
            value={values.firstname}
            error={Boolean(errors.firstname)}
            helperText={errors.firstname}
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <CustomInput
            id="SURNAME"
            name="lastname"
            label="SURNAME"
            color="primary"
            variant="standard"
            onChange={handleChange}
            value={values.lastname}
            error={Boolean(errors.lastname)}
            helperText={errors.lastname}
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <CustomInput
            id="ADDRESS"
            name="address"
            label="ADDRESS"
            color="primary"
            variant="standard"
            onChange={handleChange}
            value={values.address}
            error={Boolean(errors.address)}
            helperText={errors.address}
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Grid container spacing={2}>
            <Grid item lg={3} md={2} sm={2} xs={2}>
              <CustomInput
                placeholder="+961"
                color="primary"
                variant="standard"
                label="PREFIX"
                type="text"
                name="country_code"
                // onChange={handleChange}
                value={values.country_code}
                error={Boolean(errors.country_code)}
                helperText={errors.country_code}
              />
            </Grid>
            <Grid item lg={9} xs={10}>
              <CustomInput
                placeholder="00 000 000"
                color="primary"
                variant="standard"
                // type="number"
                type="text"
                label="TELEPHONE"
                name="mobile"
                onChange={handleChange}
                value={values.mobile}
                error={Boolean(errors.mobile)}
                helperText={errors.mobile}
                // inputProps={{
                //   maxLength: 8,
                // }}
                inputProps={{
                  maxLength: 8,
                  pattern: "\\d*", // Ensures only digits can be entered
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <CustomInput
            id="DISTRICT"
            name="district"
            label="DISTRICT"
            color="primary"
            variant="standard"
            onChange={handleChange}
            value={values.district}
            error={Boolean(errors.district)}
            helperText={errors.district}
          />
        </Grid>
        {/* <Grid item lg={6} md={6} sm={6} xs={12}>
          <CustomInput
            id="LOCALITY"
            name="locality"
            label="LOCALITY"
            color="primary"
            variant="standard"
            onChange={handleChange}
            value={values.locality}
            error={Boolean(errors.locality)}
            helperText={errors.locality}
          /> 
        </Grid>*/}
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <CustomInput
            id="REGION"
            name="region"
            label="REGION"
            color="primary"
            variant="standard"
            onChange={handleChange}
            value={values.region}
            error={Boolean(errors.region)}
            helperText={errors.region}
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <FormControl
            variant="standard"
            sx={{ marginBottom: "4px", minWidth: 120 }}
            color="primary"
            error={Boolean(errors.address_type)}
            fullWidth
          >
            <InputLabel id="select-label" className="textFieldcustomLable">
              ADDRESS TYPE
            </InputLabel>
            <Select
              labelId="select-label"
              id="select-address"
              name="address_type"
              value={values.address_type}
              onChange={handleChange}
              // label="Age"
              color="primary"
              error={Boolean(errors.address_type)}
              helperText={errors.address_type}
              className="customInput"
              sx={{
                "& .MuiSelect-icon": {
                  color: "#FFF",
                },
              }}
            >
              <MenuItem value="home">HOME</MenuItem>
              <MenuItem value="office">OFFICE</MenuItem>
              <MenuItem value="other">OTHER</MenuItem>
            </Select>
            {errors.address_type && (
              <FormHelperText>{errors.address_type}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button
              sx={{ mx: "auto", marginBottom: "5px" }}
              // component={Link}
              // to="/shopping-bag"
              variant="outlined"
              className="custom-button"
              type="submit"
            >
              SAVE & CONTINUE
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditAddress;
