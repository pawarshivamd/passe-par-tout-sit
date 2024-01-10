import { Box, Drawer } from "@mui/material";
import React from "react";

const CustomDrawer = ({ onClose, state, children }) => {
  return (
    <Box>
      <React.Fragment key={"right"}>
        <Drawer
          sx={{ zIndex: "99999999999" }}
          anchor={"right"}
          open={state}
          onClose={() => onClose("")}
          PaperProps={{
            sx: {
              color: "#ffffff",
              background: "#000000",
              padding: "50px",
            },
          }}
        >
          {children}
        </Drawer>
      </React.Fragment>
    </Box>
  );
};

export default CustomDrawer;
