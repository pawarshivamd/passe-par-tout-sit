import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const ContinueProFooter = (props) => {
  return (
    <section style={{ position: "relative", bottom: "0px" }}>
      <Box sx={{ borderTop: "2px solid #EFC80C", marginTop: "auto" }}>
        <Container>
          <Box sx={{ padding: "20px 0", mb: 3 }}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="end"
            >
              <Grid item lg={2} md={2} sm={2} xs={6}>
                <Typography>Items</Typography>
                <Typography>000.000</Typography>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={6}>
                <Typography>Delivery</Typography>
                <Typography>00.000</Typography>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={6}>
                <Typography>Total</Typography>
                <Typography>000.000</Typography>
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={6}>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <Button
                    variant="outlined"
                    className="custom-button"
                    sx={{ padding: "5px 50px" }}
                  >
                    {props.BtnText}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default ContinueProFooter;
