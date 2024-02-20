import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import SearchBox from "../../layout/searchcontainer/SearchBox";
import CustomInput from "../../layout/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import Notification from "../../utils/Notification";
import { useDispatch } from "react-redux";
import { addAddress } from "../../Redux/Thunks/addressThunk";

const AddressMain = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    address: "",
    country_code: "",
    mobile: "",
    district: "",
    locality: "",
    region: "",
    address_type: "2",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isEmpty = Object.values(values).some((val) => val === "");
    if (isEmpty) {
      Notification("error", "All fields are required");
    } else {
      console.log("called");
      dispatch(addAddress(values)).then(() => {
        navigate("/select-address");
      });
    }
  };

  return (
    <Box sx={{ mb: 5, mt: 20 }}>
      {/* <SearchBox /> */}
      <Container>
        <Grid
          container
          lg={6}
          md={8}
          spacing={2}
          alignItems="end"
          component="form"
          onSubmit={handleSubmit}
        >
          <Grid item lg={12} xs={12}>
            <Typography>EDIT YOUR BILLING ADDRESS</Typography>
            <Typography sx={{ mt: 2 }} variant="body2">
              To place your order, you must first fill in your account details.
            </Typography>
          </Grid>

          <Grid item lg={6} md={6} sm={6} xs={12}>
            <CustomInput
              id="NAME"
              name="firstname"
              label="NAME"
              color="primary"
              variant="standard"
              onChange={handleChange}
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
                  type="number"
                  name="country_code"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item lg={9} xs={10}>
                <CustomInput
                  placeholder="00 000 000"
                  color="primary"
                  variant="standard"
                  type="number"
                  label="TELEPHONE"
                  name="mobile"
                  onChange={handleChange}
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
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <CustomInput
              id="LOCALITY"
              name="locality"
              label="LOCALITY"
              color="primary"
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <CustomInput
              id="REGION"
              name="region"
              label="REGION"
              color="primary"
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item lg={6}>
            <Button
              sx={{ ml: 2, marginBottom: "5px" }}
              // component={Link}
              // to="/shopping-bag"
              variant="outlined"
              className="custom-button"
              type="submit"
            >
              SAVE & CONTINUE
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AddressMain;
