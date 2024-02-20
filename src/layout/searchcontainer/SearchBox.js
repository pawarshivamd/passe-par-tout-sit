import {
  Box,
  Container,
  Grid,
  InputBase,
  TextField,
  alpha,
} from "@mui/material";
import React from "react";
import smile from "../../assets/img/icon/smile.svg";
import CustomInput from "../CustomInput";
const SearchBox = (props) => {
  const handleSearchChange_ = (event) => {
    const { value } = event.target;
    props?.handleSearchChange(value);
  };

  return (
    <Container sx={{ mb: 5 }}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item lg={6} xs={6}>
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            className="smile-box"
          >
            <img src={smile} alt="" width="50px" className="smile-img" />
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={4} xs={6}>
          <CustomInput
            type="search"
            placeholder="SEARCH"
            color="secondary"
            variant="outlined"
            className="search-filed"
            onChange={handleSearchChange_}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchBox;
