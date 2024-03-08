import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";
import SearchBox from "../../layout/searchcontainer/SearchBox";
import { Link } from "react-router-dom";
import { ReactComponent as PhoneIcon } from "../../assets/img/icon/phone.svg";
import { ReactComponent as LocationIcon } from "../../assets/img/icon/loction.svg";
import { ReactComponent as TagIcon } from "../../assets/img/icon/tag.svg";
import { ReactComponent as ContactSupportIcon } from "../../assets/img/icon/contact-support.svg";
import styled from "styled-components";
import ContinueProFooter from "../../layout/ContinueProFooter";
const InputCustom = styled(TextField)`
  border: 0;
  & input {
    width: 100%;
    padding: 7px 10px;
    color: #fff;
    border: 0;
    &::placeholder {
      color: "#fff";
    }
    &:focus {
      border-color: #efc80c; /* Focused border color */
    }

    &:hover {
      border-color: #efc80c;
      outline: #efc80c; /* Border color on hover, if needed */
    }
  }
  & fieldset {
    border-radius:0;
    border-color: #efc80c;
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: #efc80c;
      outline: #efc80c;
    }
  }
  .MuiInputBase-root:hover fieldset {
    border-color: #efc80c;
  }
  
`;
const CustomTextarea = styled(TextareaAutosize)`
  background: transparent;
  width: 100%;
  padding: 7px 10px;
  color: #ffffff;
  border-color: #efc80c;
  &:focus {
    border-color: #efc80c;
  }
  &:focus-visible {
    border-color: #efc80c;
    outline: #efc80c;
  }
`;
const ContactUs = () => {
  return (
    <Box sx={{ mt: 20 }}>
      <SearchBox />
      <Container>
        <Box className="contact-main-text">Contact Way</Box>
        <Grid
          container
          spacing={2}
          lg={11}
          sm={12}
          md={12}
          xs={12}
          sx={{ mt: 4 }}
        >
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ mr: 2 }}>
                <PhoneIcon width={17} />
              </Box>
              <Box>
                <Typography variant="body2">
                  Tel:
                  <Link to="tel:+961 70 154 218" style={{ color: "#EFC80C" }}>
                    +961 70 154 218
                  </Link>
                </Typography>
                <Typography variant="body2" sx={{ textWrap: "nowrap" }}>
                  E-Mail:
                  <Link
                    to="mailto:swag@pptthebrand.com"
                    style={{ color: "#EFC80C" }}
                  >
                    swag@pptthebrand.com
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ mr: 2 }}>
                <LocationIcon width={17} fill="none " />
              </Box>
              <Box>
                <Typography variant="body2">20 Margaret st, London</Typography>
                <Typography variant="body2">Great britain, 3NM98-LK</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ mr: 2 }}>
                <ContactSupportIcon width={17} />
              </Box>
              <Box>
                <Typography variant="body2">Support Forum</Typography>
                <Typography variant="body2">For over 24hr</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ mr: 2 }}>
                <TagIcon width={17} />
              </Box>
              <Box>
                <Typography variant="body2">Free standard shipping</Typography>
                <Typography variant="body2">on all orders.</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 5, mb: 5 }}>
          <Typography>Get In Touch</Typography>
          <Grid container spacing={2} lg={9} sm={10}>
            <Grid item lg={10} sx={{ mt: 3 }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices tristique amet erat vitae eget dolor los vitae
                lobortis quis bibendum quam.
              </Typography>
            </Grid>
            <Grid item lg={4} sm={5} xs={12}>
              <InputCustom
                id="Your-Name"
                placeholder="Your Name*"
                variant="outlined"
                color="primary"
                fullWidth
              />
            </Grid>
            <Grid item lg={6} sm={7} xs={12}>
              <InputCustom
                id="Your-Name"
                placeholder="Contact Number"
                variant="outlined"
                color="primary"
                fullWidth
              />
            </Grid>
            <Grid item lg={4} sm={5} xs={12}>
              <InputCustom
                id="Your-Name"
                placeholder="Your E-mail"
                variant="outlined"
                color="primary"
                fullWidth
              />
            </Grid>
            <Grid item lg={6} sm={7} xs={12}>
              <InputCustom
                id="Your-Name"
                placeholder="Subject*"
                variant="outlined"
                color="primary"
                fullWidth
              />
            </Grid>
            <Grid item lg={7} sm={7} xs={12}>
              <CustomTextarea
                id="messege"
                placeholder="Type Your Messege*"
                color="primary"
                minRows={4}
                fullWidth
              />
            </Grid>
            <Grid item lg={10}  xs={12}>
            <Box sx={{display:"flex",justifyContent:"end"}}>

              <Button
                component={Link}
                variant="outlined"
                className="custom-button"
                sx={{ padding: "5px 50px" }}
              >
                Submit
              </Button>
            </Box>

            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* <ContinueProFooter BtnText="Submit" /> */}
    </Box>
  );
};

export default ContactUs;
