import { Box, Drawer } from "@mui/material";
import React from "react";

const CustomDrawer = ({ onClose, state, children }) => {
  return (
    <Box>
      <React.Fragment key={"right"}>
        <Drawer
          anchor={"right"}
          open={state}
          onClose={() => onClose("jHi I am shivam tewzting trext")}
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
